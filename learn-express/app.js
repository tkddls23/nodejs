const express = require('express');
const path = require('path');
const app = express();

app.set('port',3000); //server에 변수를 심는다
//port라는 변수에 3000을 넣는다

app.use('/about',(req,res,next)=>{
    console.log('모든 요청에 실행하고싶어요'); // 공통부분
    // 근데 use를 쓰면 밑에 라우터들이 실행이안된다
    next(); //그래서 next를해야 넘어간다
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html')); // sendFile쓰면 알아서 읽어줌
}); //if문으로 도배할 이유가 없다이제

app.get('/category/:name',(req,res)=>{
    res.send(`hi i am ${req.params.name}`);
}); // wildcard는 다른라우터보다 아래에 있어야한다
// node가 위에서 아래로 실행되기때문에 예를들어

// app.get('/category/javascript',(req,res)=> {
//     res.send('hello js');
// }); 이렇게하면 위에서 막혀버림

app.get('/about',(req,res)=>{
    res.send('this is about page');
}); 

app.use((req,res,next)=> {
    res.status(404).send('404 not found'); //잘못된 경로로 접속시
});

//error middleware의 경우 네개의 변수를 다써줘야한다 반드시
app.use((err,req,res,next)=> {
    console.error(err);
    res.send(`${err} 발생`);
});

app.listen(app.get('port'),() => {
    console.log('run express');
});

// node app 해도되는데 
// 개발할땐 nodemon app
// 올바른 경로아니면 알아서 404 띄워줌
// 저장누르고 ctrl c할 필요 x 알아서 restart 해줌


// 경로를 분리하면 깔끔해지니 좋지만 동일한 코드가 반복될때는?
// middleware

// app 만들고 -> app 관련 set => 공통 middleware use -> 각 라우터들 (범위가 넓은애들을 밑으로)
//-> 그후 error middleware를 넣어줌


// 자주하는 실수 - 한 라우터안에서 res.send or res.sendFile
// 두번하는거 or res.json을 같이한다던가
// or res.writeHead()를 같이한다던가
//res로 응답을끝냈는데 또 res로응답을 하려해서 생기는 문제
// => cannot set headers after they are sent to the client error발생