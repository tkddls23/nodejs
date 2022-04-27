const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config(); // 최대한 위에 써준다!! .env의 설정값들이 들어가기 때문
const pageRouter = require('./routes/page'); //page router
const authRouter = require('./routes/auth'); //auth router
const { sequelize } = require('./models');

const app = express();
app.set('port', process.env.PORT || 8001); //개발시와 배포시 다르게 port를 쓰기위해서

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
}); // template engine로 nunjucks 사용

sequelize.sync({force: false}) //model 수정시만  true만 실무에서는 workbench에 들어가서 수정해야한다 반드시
    .then(()=> {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err)=>{
        console.error(err);
    });

app.use(morgan('dev')); // 개발시 dev 실제 combined - ip 브라우저 시간 등 자세하게 나옴
app.use(express.static(path.join(__dirname, 'public')));  //정적파일 제공
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
    httpOnly: true,
    secure: false,
    },
}));

app.use('/', pageRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => { //404처리 middleware
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error); //error middleware로 넘겨준다
});

app.use((err, req, res, next) => { //error middleware의 경우 next 반드시 생략 금지
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});