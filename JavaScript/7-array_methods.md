Array

push() - 뒤 삽입
pop() - 뒤 삭제
unshift() - 앞에 삽입
shift() - 앞에 삭제

# arr.splice(n,m) - 특정요소 지움 n(시작점)부터 m개 지우고 지운 요소 반환

# arr.splice(n,m,x) - 특정요소 지우고 x추가

let arr = [1,2,3,4,5];
arr.splice(1,3,100,200);
console.log(arr); // {1,100,200,5}로 바뀐다

let arr = ['나는', '철수', '입니다'];
arr.splice(1,0,'대한민국','소방관'); // 나는 대한민국 소방관 철수 입니다 로 바뀐다

# arr.slice(n,m) - n부m까지 반환 - 문자열의 slice와 같다

let arr = [1,2,3,4,5];
arr.slice(1,4); //[2,3,4]

# arr.slice() - 괄호 안에 아무것도 안넣으면 배열복사

# arr.concat(arr2,arr3); // 합쳐서 새배열 반환

let arr = [1,2];
arr.concat([3,4]); // [1,2,3,4]

# for in

Iterable object이면 모두 대상으로 함
key를 리턴 (배열의 경우에는 index)
객체의 모든 열거 가능한 속성에 대해 반복

# for of

[Symbol.iterator] 속성을 가지는 collection만 대상으로 함
Iterable object이지만, prototype chain에 의한 Iterable은 대상에서 제외
→ Array, Map, Set, String, TypedArray, arguments 등
value를 리턴

# 둘의 가장 큰 차이점은 for ...in은 객체(Object)의 key를 순회하고, for ...of는 iterable객체의 value를 순회하는 데 사용

# forEach(fn) - 배열반복

let users = ['mike','tom','jane'];
users.forEach((item,index,arr) => {

});

# arr.lastIndexOf - arr.indexOf(3,3(index)) // 인덱스3부터 3을 찾아라

let arr = [1,2,3,4,5,1,2,3];
arr.indexOf(3); //2
arr.indexOf(3,3)// 4,5,1,2,3 에서 3을 찾음 - 7출력
arr.lastIndexOf(3) // 배열끝에서부터 3찾음

# arr/includes() - string이랑 같음

# arr.find(fn) / arr.findIndex(fn)

- 첫번째 true값만 반환하고 끝
- 만약없으면 undefined를 반환한다

let arr = [1,2,3,4,5];
const result = arr.find((item) => {
return item % 2 === 0;
});

console.log(result); //2반환

let userList = [
{ name: 'mike', age: 30 },
{ name: 'jane', age: 27 },
{ name: 'tom', age: 10 }
]
const result = userList.find((user) => {
if (user.age < 19) {
return true;
}
return false;
})

console.log(result); // {name:'tom', age: 10} 출력
//findIndex의 경우 - index를 출력함

# arr.filter(fn) - 조건을 만족하는 모든 요소를 배열로 반환한다 v,i,arr

let arr = [1,2,3,4,5];
const result = arr.filter((item) => {
return item % 2 === 0;
}); // [2,4] 반환

# arr.reverse() 배열을 역순으로 재정렬

# arr.map(fn) - 함수를 받아 특정기능을 시행하고 새로운 배열을 반환

- number index source(순회하는 대상 객체) 를 인수로 가짐
  let userList = [
  { name: 'mike', age: 30 },
  { name: 'jane', age: 27 },
  { name: 'tom', age: 10 }
  ]
  let newUserList = userList.map((user,index) => {
  return Object.assign({}, user, {
  isAdult: user.age> 19,
  });
  });

console.log(newUserList); // 객체 출력

# join

let arr = ['안녕','나는','철수야']
let result = arr.join(); // '안녕,나는,철수야' 문자열로 출력 ,로 구분
join안에 변수로 구분자가됨

# split

const users = "mike,jane,tom,tony";
const result = users.split(","); // ","로 구분해 배열로 출력 빈문자로하면 하나하나다 나눠줌

# Array.isArray() - 배열인지 체크

- js에서 배열은 객체형이기때문에 typeOf로 구분 힘들다

# arr.sort() - 배열 재정렬 - 배열 자체가 변경되니 주의

let arr = [1,5,4,2,3]; // 문자열로해도 잘 정렬됨
arr.sort();
console.log(arr); //[1,2,3,4,5] 출력

- let arr = [27,8,5,13];// 이런경우는 어떨까
  arr.sort();
  console.log(arr); // [13,27,5,8] ??? - 정렬할때 요소를 문자열로 취급해서그럼

* 제대로 된 정렬을 위해서는 어떻게 해야할까
  -> 값을 비교해줄수있는 함수를 전달해야한다.

let arr = [27,8,5,13];
function fn(a,b) {
return a - b;
}
arr.sort(fn);
console.log(arr); // [5,8,13,27] - 제대로 정렬됨

- or
  arr.sort((a,b) => {
  return a-b;
  });
  console.log(arr); // 이렇게 해도된다

# Lodash - 다양하고 편한 함수들을 제공해주는 라이브러리

\_.sortBy(arr); //이러면 잘 정렬됨
https://lodash.com/

# arr.reduce(); -인수로 함수를 받는다 배열을 돌며 원하는 작업을 마침 (누적계산값, 현재값) => { 계산값 };

let arr = [1,2,3,4,5];
const result = arr.reduce((prev, cur)=>{
return prev + curr;
}, 0) //누적값에 현재값을 더한다 초기값은 0으로

- 또 다른 예제

  let userList = [
  { name: 'mike', age: 30 },
  { name: 'jane', age: 27 },
  { name: 'tom', age: 10 },
  { name: 'harry', age: 26 },
  { name: 'sue', age: 42 },
  { name: 'steve', age: 60 },
  ];

  let result = userList.reduce((prev, cur)=> {
  if (cur.age > 19) {
  prev.push(cur.name);
  }
  return prev;
  }, []) //초기값 [] 빈 배열
  //console.log(result); - ['mike','jane','harry','sue','steve']
  //reduceRight - reduce와 똑같음 오른쪽부터 찾는거 그냥
