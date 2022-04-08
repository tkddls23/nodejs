# util - 편의기능 모아둔 모듈

# deprecate - util.deprecate()
- 모듈을 번경했을때 기존의 모듈을 사용한 프로그램들은 다 고장난다 그래서 잘못만든 모듈을 사용시 경고메시지를 뜨게하는 기능

const util = require('util'); 

const dontUseMe = util.deprecate((x, y) => { 
  console.log(x + y); 
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!'); 
dontUseMe(1, 2); 

# promisfy - callback으로 남아있는애들을 promisefy로 감싸주면
.then
.catch 를 쓸수있게해줌
- 조건이 있는데 - callback이 (error,data)=> {
} 이런형식으로 되어있어야한다
