const express = require('express');
const path = require('path');
const app = express();

app.set('port',3000); //server에 변수를 심는다
//port라는 변수에 3000을 넣는다
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html')); // sendFile쓰면 알아서 읽어줌
}); //if문으로 도배할 이유가 없다이제

app.get('/about',(req,res)=>{
    res.send('this is about page');
}); 

app.listen(app.get('port'),() => {
    console.log('run express');
});

// node app 해도되는데 
// 개발할땐 nodemon app
// 올바른 경로아니면 알아서 404 띄워줌
// 저장누르고 ctrl c할 필요 x 알아서 restart 해줌