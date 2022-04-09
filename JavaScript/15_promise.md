# promise - 내용이 실행은 되었지만 아직 반환하지 않은 객체
- then을 붙이면 결과를 반환함

cosnt pr = new Promise((resolve,reject) => {

}); //resolve는 성공 reject는 실패시 실행되는 callback 함수

# callback fn - 어떤일이 완료되고 나서 실행되는 함수

# new Promise 생성자가 반환하는 객체는

- state - pending(대기) fulfilled(이행됨) rejected(거부됨)
- result - undefined value(resolve(value) 호출시) error(reject(error)호출시)

ex)
const pr = new Promise((resolve,reject) => {
setTimeout(() => {
resolve('ok')
},3000)
});
// pending,undefined였다가 -> 3초후 fulfilled 'ok'가된다

const pr = new Promise((resolve,reject) => {
setTimeout(() => {
reject(new Error('error...'))
},3000)
});
// pending,undefined였다가 -> 3초후 rejected 'error'가된다

# 사용자의 코드

const pr = new Promise((resolve,reject) => {
setTimeout(() => {
resolve('ok')
},3000)
});

- then

pr.then(
function(result){
console.log(result+'가지러가자');
}, - 이행되었을때 실행
function(err){
console.log('다시주문해주세요');
} - 거부되었을때 실행
);

- catch - error발생시 즉 reject인경우만 실행된다

pr.then(
function(result){
console.log(result+'가지러가자');
}
).catch(
function(err) {

    }

)//이렇게 쓸수있다 - 위 코드보다 catch를 쓰는게 가독성이더 좋다 또한

const pr = new Promise((resolve, reject) => {
setTimeout(()=> {
reject(new Error('err...'));
}, 1000);
});

console.log('시작');
pr.then((result)=>{
console.log(result);
})
.catch((err)=> {
console.log(err);
})
.finally(()=> {
console.log('끝');
});

- finally - 무조건 실행되는거

const f1 = () => {
return new Promise((res,rej) => {
setTimeout(()=> {
res('1번 주문 완료');
}, 1000);
});
};

const f2 = (message) => {
console.log(message);

    return new Promise((res,rej) => {
        setTimeout(()=> {
            res('2번 주문 완료');
        }, 1000);
    });

};

const f3 = (message) => {
console.log(message);

    return new Promise((res,rej) => {
        setTimeout(()=> {
            res('3번 주문 완료');
        }, 1000);
    });

};

console.log('시작');
f1()
.then((res)=>f2(res))
.then((res)=>f3(res))
.then((res)=>console.log(res))
.catch(console.log)
.finally(() => {
console.log('끝');
}); // f1시작 f2시작 f3시작 끝출력

// 만약 3개의 함수를 동시에 실행할수있다면 3초면 다해결가능하다

# Promise.all(배열을 받는다)

Promise.all([f1(),f2(),f3()])
.then(res =>{
console.log(res);
});// 각 프로미스로 넘겨준값이 배열로출력된다.

//promise.all의 경우 reject가되면 실패됨 - 하나의 정보라도 누락되는경우 페이지를 보여주면 안되는경우에 쓰면좋다

# Promise.race(배열을 받는다)

Promise.race([f1(),f2(),f3()])
.then(res =>{
console.log(res);
}); //all은 모든 작업이 완료되야 출력 but race의 경우 제일 먼저끝나는거 출력만함

# Promise.allSettled - 하나라도 실패하면 catch로 감
- 실패한것만 추려낼수있다