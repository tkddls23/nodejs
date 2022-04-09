const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');

writeStream.on('finish', ()=>{
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n'); //하나의 버퍼
writeStream.write('한 번 더 씁니다.'); //하나의 버퍼
writeStream.end(); //쓰기 끝 