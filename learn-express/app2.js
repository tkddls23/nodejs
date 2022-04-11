const express = require('express');
const morgan = require('morgan'); 
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3001);

app.use(morgan('dev')); // 요청 기록이 나온다
// 개발시 dev 실제 combined - ip 브라우저 시간 등 자세하게 나옴

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 위 두줄 넣으면 알아서 파싱해주기때문에 req.body.name을 그냥 쓰면댄다
//json - 클라에서 json data를 보냈을때 json을 파싱
// urlencoded - 클라에서 form을 보낼때
//extended - form 파싱시 querystring을 어떻게 할지
// true는 qs모듈 false는 querystring true추천함 더빨라서
//다만 form에서 이미지나 파일을 보내는경우 urlencode로는 안됨
//이런경우는 multer 써야댐

app.use(cookieParser(process.env.COOKIE_SECRET));
// cookie파싱하기 엄청 귀찮은데 알아서 다해줌

app.use(session({
  resave: false,  // 요청이 왔을때 세션에 수정사항이 생기지않아도 다시 저장할지 여부
  saveUninitialized: false, // 세션에 저장할 내역이 없더라도 세션을 저장할지
  secret: process.env.COOKIE_SECRET, // cookie secret과 비슷
  cookie: {
    httpOnly: true, // js 공격 방지
    secure: false,
  },
  name: 'session-cookie', //기본값은 connect.sid
}));

const multer = require('multer');
const fs = require('fs');

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({ // 보통 storage limits 옵션
  storage: multer.diskStorage({ // storage - 업로드한 파일을 어디에 저장할지
    destination(req, file, done) {// 어디다 저장할지
      done(null, 'uploads/');
    },
    filename(req, file, done) {// 어떤이름으로 올릴지
      const ext = path.extname(file.originalname);//
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //날짜 확장자 여러사람이 같은 파일을 올릴때 덮어씌우는거 방지위해서
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일사이즈, 개수 등 다양한 옵션있음
}); // 어디에 어떻게 어떤이름으로 파일을 업로드할지


app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload', upload.single('image'), (req, res) => { // 한개에 파일만 업로드할때
  // 여러개 multiple 를 받을경우 upload.array로 해야한다 
  // 여러개를(file이 여러개인경우) fields 를 받을경우 array가 아니라 upload.fields([{name:'image1'},{name:'image2'},{name:'image3'}])
  // input type file의 name과 upload.single() 과 일치해야댐 
  console.log(req.file); // 업로드에 대한 정보 출력 여러개면 files files인경우에는 files.image1 이런식으로 하면댐
  res.send('ok');
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});


//알아두면 매우 편한 식
//로그인한사람만 보여주고싶은경우

// --> 미들웨어 확장법
// app.use('/',(req,res,next)=> {
//   express.static(__dirname,'public')(req,res,next)
// });

// 로그인시에만 보여주는방식
// app.use('/',(req,res,next)=> {
//   if (req.session.id) {
//     express.static(__dirname,'public')(req,res,next)
//   }
//   else{
//     next();
//   }});