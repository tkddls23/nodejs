# Generator - 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

function* fn() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    yield 3;
    return 'finish';
}

const a = fn();
console.log(a); // generator 객체만 반환된다
console.log(a.next()); // 가장가까운 yield문을 만날때까지 실행되고 data객체를 반환 - 반환된 객체는 {value:1, done:false}형식으로 
value는 yield오른쪽값 (값을 생략하면 undefined) done은 함수코드가끝나는지를 반환(return문)

# a.next() - 가장가까운 yield문을 만날때까지 실행
# a.return() - 그즉시 return done 속성값은 true가됨 이후에 next를 호출해도 value를 얻어올수없음
# a.throw() 
ex) 
function* fn() {
    try{
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        yield 3;
        return 'finish';
    }
    catch (e) {
        console.log(e);
    }
}

const a = fn();
a.throw(new Error('err'));// catch문 실행되고 done은 true가된다 이후 next를 호출해도 이미 끝났고 value를 얻어올수없다

# Generator - 즉 iterator면서 iterable하다

- iterable = 반복이가능하다는 의미
-- 메소드 Symbol.iterator가 있어야한다
-- 메서드로 호출한 결과는 Symbol.iterator는 iterator를 반환해야 한다.

- iterator
-- value와 done 프로퍼티를 가진 객체를 반환하는 next()를 가져야한다

배열또한 iterator를 가지고있어서 iterable하다. 문자열또한 iterable
