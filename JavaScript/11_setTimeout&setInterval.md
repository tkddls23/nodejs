# setTimeout - 일정시간이 지난 후 함수를 실행
function fn() {
    console.log(3);
}

setTimeout(fn,3000); // 3초후 실행
setTimeout(function() {
    console.log(3);
},3000); //이렇게 써도된다

//인수가 있을때

function showName(name) 
{
    console.log(name);
}

setTimeout(showname,3000,'mike')

# clearTimeout - 예정된 작업을 없앤다
const tId = function showName(name) 
{
    console.log(name);
}

clearTimeout(tId); // 작업취소


# setInterval - 일정 시간 간격으로 함수를 반복

function showName(name) 
{
    console.log(name);
}

setInterval(showname,3000,'mike'); // 3초마다 반복

# clearInteval // 중간에 작업취소하고싶을때

# 주의사항 - delay time을 0으로 줘도 바로 실행 x

ex) 
setTimeout(fucntion(){
    console.log(2);
},0); //브라우저는 기본적으로 4ms정도의 대기시간이 존재

console.log(1);

1 실행후 2 실행

ex)

let num = 0;

function showTime() {
    console.log(`접속한지 ${num++}초가 지남`);
    
    if (num > 5) {
        clearInterval(tId);
    }
}

const tId = setInterval(showTime,1000); /1초마다 반복 5초이후 멈춤