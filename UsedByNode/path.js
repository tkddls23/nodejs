const path = require('path');

path.join(__dirname,'var.js'); // \nodejs\var.js로 합쳐준다
//posix(mac,linux)에서는 /nodejs/var.js 로 알아서 분기처리해줌

path.resolve(__dirname, '..', '/var.js');
// join은 절대경로를 무시하고 합치고 resolve의 경우 절대경로이면
// 앞에 인수들 무시하고 /var.js로 보여줌

console.log(path.resolve(__dirname, '..', '/var.js'));
//C:\var.js 출력
console.log(path.join(__dirname,'/var.js'));
//C:\Users\toehd\Desktop\nodejs\var.js 출력