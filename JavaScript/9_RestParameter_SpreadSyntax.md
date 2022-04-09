funcion showNama(name) { //함수에 넘겨주는 인수에 제한이 없음
    console.log(name);
}

showName('MIKE','TOM'); // MIKE만 출력 TOM 은 출력X ERROR발생X
showName();// 심지어 비워나도 error x undefined출력할뿐

# arguments
- 함수로 넘어온 모든 인수에 접근
- 함수내에서 이용가능한 지역 변수
- length/index
- array 형태의 객체 - array아니고 object임
- 배열의 내장메서드 없음(forEach,map)

ex)
function showName(name) {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('MIKE','TOM'); // 2 , 'mike', 'tom' 출력

- es6에서는 restparameters를 권장함

# Rest parameters - array임

fucntion showName(...names) {
    console.log(names);
}
showName(); // [] 출력
showName('MIKE'); // ['MIKE'] 출력
showName('MIKE','TOM'); // ['MIKE','TOM'] 출력

function add(...numbers) {
    let result = 0;
    numbers.forEach((v,i) => {
        result += v;
    });
    console.log(result);
}

add(1,2,3,4,5,6,7,8,9,10);


- 또 다른예

function User(name,age,...skills) { //restparameter는 인수제일 마지막에 와야한다
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new Uesr('mike',30,'html','css');

console.log(uesr1);

# 전개구문 - spread syntax : 배열

let arr1 = [1,2,3];
let arr1 = [4,5,6];

let result = [...arr1, ...arr2]; //arr1과 arr2의 원소가 들어감
console.log(result); // [1,2,3,4,5,6]

let result = [0, ...arr1, ...arr2,7,8,9]; //중간에 넣는것도 가능

# 전개구문 - spread syntax : 객체
let user = {name:'mike'};
let mike = {...user,age:30}; //객체도 가능하다
//Object.assign을 쓸이유가없다 복제도가능!!

