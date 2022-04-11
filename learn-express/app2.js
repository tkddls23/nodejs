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
//이런경우는 멀터 써야댐

app.use(cookieParser(process.env.COOKIE_SECRET));
// cookie파싱하기 엄청 귀찮은데 알아서 다해줌
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
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