# 객체.hasOwnProperty(프로퍼티) //객체에 해당 프로퍼티가 있으면 true 없으면 false - 객체의 **proto**에있다(prototype) - 객체가 직접가지고있는 property만 반환해줌 true로

const user = {
name: 'mike',
hasOwnProperty: fuction() {
console.log('haha')
}
}

user.hasOwnProperty(); // haha출력 - hasOwnProperty라는 속성이 있는경우 없으면 그냥 **proto**에서 찾음

# **proto**

const car = {
wheels: 4,
drive() {
console.log('drive..');
},
};

const bmw = {
color: 'red',
navigation: 1,
};

const benz = {
color: 'black',
};

const audi = {
color: 'blue',
};

bmw.**proto** = car; // car가 bmw의 prototype이 됨 = bmw는 car의 상속을 받는다
benz.**proto** = car; // benz가 bmw의 prototype이 됨 = benz는 car의 상속을 받는다
audi.**proto** = car; // audi가 bmw의 prototype이 됨 = audi는 car의 상속을 받는다

console.log(bmw); // {color:'red'.navigation:1} 나옴
console.log(bmw.wheels); // 4출력 - 먼저 객체내부에서 wheels속성을 찾는다 -> 찾으면 탐색을 멈추고 없으면 prototype에서 속성을 찾는다

- Object.keys() 와 Object.values()에서는 prototype은 나오지않는다

ex)

const car = {
wheels: 4,
drive() {
console.log('drive..');
},
}

const bmw = function (color) {
this.color = color;
};

bmw.prototype.wheels = 4;
bmw.prototype.drive = fuction() {
console.log('drive..');
}; //이렇게 쓰면 더 편함

const x5 = new bmw('red');

x5.**proto** = car; //이렇게 해도되는데 그럼 만들때마다 이렇게 해줘야한다;

# x5.instanceof(bmw);// true x5는 bmw로 생성되었는가

# x5.constructor === bmw; //x5의 생성자가 bmw인가 true
