async function getName() {
return 'mike';
} // 함수앞에 async를 붙여줌으로써 promise를 항상 반환한다

console.log(getName()); // Promise{<fulfilled>: 'mike'} 출력함

getName().then((name)=> {
console.log(name); //mike 출력
});

//만약 반환값이 Promise인경우

async function getName() {
return Promise.resolve('Tom');
}

getName().then((name)=> {
console.log(name);//값그대로 사용
});

# await - async내부에서만 사용가능 일반함수에서 사용하면 err

function getName(name) {
return new Promise((resove,reject)=> {
    setTimeout(()=>{
        resolve(name);
        },1000);
    });
});

async function showName() {
const result = await getName('mike'); //await 뒤에는 promise가 온다
console.log(result); //1초뒤에 mike가 찍힌다
}

15강에서 한것을 더쉽게 바꿀수있따

ex)

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
        }, 2000);
    });

};

const f3 = (message) => {
console.log(message);

    return new Promise((res,rej) => {
        setTimeout(()=> {
            res('3번 주문 완료');
        }, 3000);
    });

};

<!-- console.log('시작');
f1().then((res)=>f2(res))
.then((res)=>f3(res))
.then((res)=>console.log(res))
.catch(console.log)
.finally(() => {
console.log('끝');}); -->

console.log('시작');
async function order() {
const result1 = await f1();
const result2 = await f2(result1);
const result3 = await f3(result2);
console.log(result3);
console.log('종료');
}

order(); //then과 같은 방식으로 작동하지만 가독성이 더 좋아 자주쓰인다
// await의 경우에는 catch를 try catch문을 감싸준다

async function order() {
try {
const result1 = await f1();
const result2 = await f2(result1);
const result3 = await f3(result2);
console.log(result3);
} catch (e) {
console.log(e);
}
console.log('종료');
}

# for await - 변수 of 프로미스 배열

const promise1 =new Promise.resolve('성공1');
const promise2=new Promise.resolve('성공2');
async() => {
    for await (promise of [Promise1,Promise2]) {
        console.log(promise);
    }
}