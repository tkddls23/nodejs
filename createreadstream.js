const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
// 스트림으로 받는다 - 조각형식으로 받는다 -> 합쳐주는 작업이 있어야댄다
// highWaterMark 한번에 읽을 조각크기를 정할수있다.
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data: ', chunk,chunk.length);
    //분명 조각처리를 했는데 한번에 출력되고 길이도 한번에 출력됨
    //createReadStream이 한번에 buffer조각을  64kb를 읽어서그럼
});
readStream.on('end', ()=>{
    console.log(Buffer.concat(data).toString());
});
// 항상 에러처리해야됨 stream도 비동기처리임

readStream.on('error',(err)=>{
    throw err;
});

// 동영상,대용량 파일 서버 저장의 경우 stream은 매우매우 필수