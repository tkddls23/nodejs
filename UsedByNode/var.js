const odd = '홀수입니다';
const even = '짝수입니다';

module.exports=  {
    odd,
    even,
};

// exports.odd = odd; 이렇게 써도된다.

// module.exports === exports === {} 초기값이 빈객체

// 다만 module.exports에 함수를 넣은경우에는 
// module.exports !== exports === {} 달라진다.