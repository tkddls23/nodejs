const http = require('http');

// cookie는 부가정보이므로 header에 저장됨
http.createServer((req,res)=>{
    console.log(req.url,req.headers.cookie);
    res.writeHead(200,{'Set-Cookie':'mycookie=test'});
    res.end('Hello Cookie!!');
})
    .listen(8083, ()=>{
        console.log('8083 port server waiting!');
    });

// 새로고침 console창에 favicon.ico가 출력되는이유
// chrome브라우저에서 favicon.ico이미지를 찾기위해 알아서 보내주는것