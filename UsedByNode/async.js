const fs = require('fs');
// 비동기 함수여서 백그라운드로 넘어가서 동시실행이 됨
// 순서를 모른다

fs.readFile('./read.txt',(err,data)=>{
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
})
fs.readFile('./read.txt',(err,data)=>{
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
})
fs.readFile('./read.txt',(err,data)=>{
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
})
fs.readFile('./read.txt',(err,data)=>{
    if (err) {
        throw err;
    }
    console.log('4번', data.toString());
})

// 비동기이면서 순서 유지
// callback hell

fs.readFile('./read.txt',(err,data)=>{
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./read.txt',(err,data)=>{
        if (err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./read.txt',(err,data)=>{
            if (err) {
                throw err;
            }
            console.log('3번', data.toString());
            fs.readFile('./read.txt',(err,data)=>{
                if (err) {
                    throw err;
                }
                console.log('4번', data.toString());
            })
        })
    })
})


