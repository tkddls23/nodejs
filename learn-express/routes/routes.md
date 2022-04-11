router들이 수백개 되면 어떻게 될까 - 보기도안좋고 매우 길어진다
-> 분리의 필요성

# 라우트 매개변수

router.get('/user/:id',(req,res)=>{
console.log(req.params, req.query); // id출력 queryString출력
});

# 일반 라우터보다 뒤에 위치해야한다 위에있으면 아래있는게 실행 X

# 404 ROUTER

- 모든 라우터에서 걸리는게 없는경우
  app.use((req,res,next)=> {
  res.status(404).send('not found');
  });

# 주소는 같지만 메서드가 다른 코드가 있을때

router.get('abc/',(req,res)=> {
res.send('GET/abc');
});

router.get('abc/',(req,res)=> {
res.send('POST/abc');
});

-->

router.route('/abc')
.get((req,res)=> {
res.send('GET/abc');
})
.post((req,res)=> {
res.send('POST/abc');
});
// 근데 위에 방식도 많이 쓰임
