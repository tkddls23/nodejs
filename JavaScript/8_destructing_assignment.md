# Destructing assignment - 구조 분해 할당 구문
- 배열 or 객체의 속성을 분해, 그값을 변수에 담을 수 있게하는 표현식

# 배열 구조 분해

let [x,y] = [1,2];
console.log(x); //1
console.log(y); //2

let str = 'mike-tom-jane';
let [user1,user2,user3] = str.split('-');

let [a,b,c] = [1,2]; //c의 경우 undefined가 들어간다
let [a,b,c=5] = [1,2]; //undefined의 경우 지정값을 씀

# 배열 구조 분해 - 일부 반환값 무시

let [user1, ,user2] = ['mike','tom','jane','tony']

console.log(user1); // mike
console.log(user2); // jane

# 바꿔치기

let [a,b] = [b,a]; // 두값을 교환가능하다.

# 객체 또한 구조 분해가 가능하다

let user = {name:'mike', age:30};
let {name,age} = user;
console.log(name); // 'mike'
console.log(age); // 30

# 객체 구조 분해 : 새로운 변수 이름 할당

let user = {name:'mike', age:30};
let {name: userName, age:userAge} = user;

console.log(userName); //'mike'
console.log(userAge); // 30

# 객체 구조 분해 : 기본값

let {name, age, gender} =user; //gender는 undefined값
let {name,age,gender='male'} = user; // gender에 male기본값

const ex = {a:123, b: {c:135, d:146}};
const {a, b:{d}} = ex;

console.log(a); //123
console.log(d); //146

# 많이 실수하는 부분

this를 사용하는 부분에서 구조분해할당을 쓰면 error