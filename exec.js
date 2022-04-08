const exec = require('child_process').exec;
// const {exec} = require('child_process'); 이렇게 써도됨

const process = exec('dir'); //터미널에서 dir명령어를 친거와 같다

process.stdout.on('data', function(data) {
    console.log(data.toString()); //tostring 안하면 0101이렇게 나옴
});

process.stderr.on('data', function(data) {
    console.error(data.toString()); //tostring 안하면 0101이렇게 나옴
});