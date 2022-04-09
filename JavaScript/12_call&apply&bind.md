# call apply bind - 함수호출 방식과 관계없이 this를 지정할수 있다

# call - 인수로 this로 사용할 개체를 지정가능

const mike = {
name:'mike',
};

function showThisName(){
console.log(this.name);
}

showThisName(); // windows.name 출력 - 빈문자열
showThisName.call(mike); //mike.name 출력

function update(birth,occur) {
this.birth = birth;
this.occur = occur;
}

update.call(mike,1999,'singer');
console.log(mike); //birth,occur추가됨

# call apply - call은 매개변수를 직접받지만 apply는 배열로 받음

- 작동은 똑같이함
- 배열요소를 매개변수로 사용할때 유용하다

function update(birth,occur) {
this.birth = birth;
this.occur = occur;
}

update.apply(mike,[1999,'singer']);

ex)

const nums = [1,2,3,4,5];

const minNum = Math.min(nums); //배열을 넣어버리면 NaN
const minNum = Math.min([1,2,3,4,5]) //배열을 직접넣으면 NaN
const minNum = Math.min(...nums); //1 spread syntax활용
or
const minNum = Math.min.apply(null,nums); //두번째 매개변수로 배열을 주면 된다. apply 활용

# bind - 함수의 this값을 영구히 바꿀수있다

const mike = {
name: 'mike',
};

function update(birth, occ) {
this.birth = birth;
this.occ = occ;
}

const updateMike = update.bind(mike); //항상 mike를 this로 가진다

updateMike(1980, 'police');
console.log(mike); //잘들어감

ex)
const mike = {
name: 'mike',
showName: function() {
console.log(`hello, ${this.name}`);
},
};

user.showName(); // hello,mike 출력

let fn = user.showName; // this를 잃어버린다 hello,만 출력
fn.call(user); //hello, mike 출력
fn.apply(user); //hello, mike 출력

let boundFn = fn.bind(user); //bind를 이용해 새함수 생성
boundFn(); // hello, mike출력
