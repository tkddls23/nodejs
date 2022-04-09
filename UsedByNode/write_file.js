const fs = require('fs').promises; //promise로 바꿔줌

fs.writeFile('./write.txt', '글이 입력됩니다.')
    .then(() =>{
        return fs.readFile('./write.txt')

    })
    .then((data)=> {
        console.log(data.toString()); //읽는데 성공하면 출력
    })
    .catch((err) => {
        throw err;
    }); // 보통 fs promise를 많이 쓴다