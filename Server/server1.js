const http = require('http'); //http import

const server = http.createServer((req,res)=> {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    // res.write('<h1>hello server</h1>'); //safari의 경우 이게 html코드인지 모른다
    // res.write('<p>hello server</p>');
    // res.end('<p>hello Wonseok</p>');
})// create server - from req 얘네도 stream
    .listen(8080); //node가 실행한작업을 process로 올리는 작업

// http는 기본 80 https 443 - 생략가능

server.on('listening',()=>{
    console.log('8080port server waiting');
});
server.on('error',(error)=>{
    console.error(error);
});