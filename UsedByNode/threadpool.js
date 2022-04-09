// 기본적으로 노드는 백그라운드에서 4개동시에 돌아감

const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',() => {
    console.log('1',Date.now() - start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',() => {
    console.log('2',Date.now() - start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',() => {
    console.log('3',Date.now() - start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',() => {
    console.log('4',Date.now() - start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',() => {
    console.log('5',Date.now() - start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',() => {
    console.log('6',Date.now() - start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',() => {
    console.log('7',Date.now() - start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',() => {
    console.log('8',Date.now() - start);
});

// 해보면 4개씩 나눠서 돌린다

// (SET) UV_THREADPOOL_SIZE=8 스레드풀사이즈를 8로 바꿀수있음