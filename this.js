console.log(this); // js에서 this는 전역객체를 가르킴 그럼 node에서는 global을가르키나?
// no - 빈객체 출력 - 전역스코프에서는 this는 빈객체

console.log(this === module.exports); // true

function a() {
    console.log(this === global); //이건 global임
    console.log(this);
}

a();