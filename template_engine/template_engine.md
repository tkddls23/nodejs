# 템플릿 엔진

- html의 정적인 단점을 개선
- react vue 등 덕분에 잘안씀
- 같이쓸때도있음

- 반복문 조건문 변수 등을 사용할 수 있음

# pug - 호불호가 많이 갈린다

app.set('views', path.join(\_\_dirname,'views')); //views폴더 지정
app.set('view engine', 'pug'); //pug확장자를 선택하게함

# nunjucks

- 퍼그가 호불호가 많이갈린다 - 줄바꿈 철저히 지켜야함 양식이 좀 다름
  const nunjucks = require('nunjucks');

app.set('view engine','html'); // 확장자는 html or njk
nunjucks.configure('views',{ //views폴더가 nunjucks파일의 위치가 된다
express: app,
watch: true,
});

# error처리 미들웨어 - 404에러도 err로 넘겨주는 미들웨어

app.use((req,res,next)=>{
const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
error.status = 404;
next(error);
});

app.use((err,req,res,next)=> {
res.locals.message = err.message;
res.locals.error = process.env.NODE_ENV !== 'production' ? err :{}

# 배포가 아니면 error를 넣어주고 서비스중에는 빈개체를 넣어준다(자세히나오면 보안위협)

# process.env.NODE_ENV는 개발환경인지 배포환경인지 구분해주는 속성

    res.status(err.status) || 500);
    res.render('error');

});
