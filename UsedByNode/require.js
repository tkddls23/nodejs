require('./var'); // 이렇게 써도됨
//이러면 다른파일에 var.js가 실행은되는데 
// exports로 보낸걸 require.js에서 안씀
// 실행은 시키고싶은데 따로 변수를가지고싶지 않은경우 씀

console.log(require);
//require는 제일위에 올필요가 없다. import는 위에 와야댐