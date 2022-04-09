const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);

process.stdout.on('data',function(data) {
    console.log(data.toString());
});

process.stderr.on('data',function(data) {
    console.error(data.toString());
});

//단 해당 언어가 설치되어 있어야한다.
//해당언어에 실행을 해달라고 요청하는것뿐이다