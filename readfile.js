// fs - 파일시스템에 접근하는 모듈

const fs = require('fs');

fs.readFile('./read.txt',(err,data) => {
    if(err) {
        throw err;
    }
    console.log(data); //010101010 이진으로 나옴 정확히는 이진법을 16진법으로 바꿔서 나옴
    console.log(data.toString());
});