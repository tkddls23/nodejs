// fs - 파일시스템에 접근하는 모듈

// const fs = require('fs');

// fs.readFile('./read.txt',(err,data) => {
//     if(err) {
//         throw err;
//     }
//     console.log(data); //010101010 이진으로 나옴 정확히는 이진법을 16진법으로 바꿔서 나옴
//     console.log(data.toString());
// });

// callback을 promise로

const fs = require('fs').promises; //promise로 바꿔줌

fs.readFile('./read.txt')
    .then((data) =>{
        console.log('1번',data.toString());
        return fs.readFile('./read.txt');
    })
    .then((data)=>{
        console.log('2번',data.toString());
        return fs.readFile('./read.txt');
    })
    .then((data)=>{
        console.log('3번',data.toString());
        return fs.readFile('./read.txt');
    })
    .then((data)=>{
        console.log('4번',data.toString());
    })
    .catch((err) => {
        throw err;
    }); // 보통 fs promise를 많이 쓴다

// 더 깔끔하게 만들수도 있다

async function main() {
  let data =  await fs.readFile('./read.txt');
  console.log('1번',data.toString());
  data =  await fs.readFile('./read.txt');
  console.log('2번',data.toString());
  data =  await fs.readFile('./read.txt');
  console.log('3번',data.toString());
  data =  await fs.readFile('./read.txt');
  console.log('4번',data.toString());
}

main();