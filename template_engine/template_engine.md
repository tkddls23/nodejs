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
