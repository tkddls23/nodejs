const user = function(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name);
    };

};

const mike = new user('mike',30); //생성자

# class

class user2 {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new user2('tom',19); // class
// showName 은 user2의 prototype에 저장된다

# 생성자와 class

생성자의 경우

const mike = user('mike',30); // undefined출력 분명 잘못적은것임에도 error가 발생하지않는다

class의 경우 - new없이 쓰면 error - __proto__에보면 constructor가 user2라는게 명시되어있다

for in 문을 실행시 생성자의 경우 함수도 다 보여준다(심지어 함수를 prototype으로 적어도) class의 경우 함수는 안보여준다

# extends - 생성자함수의 경우 prototype으로 상속을 구현했다 class의 경우 extends를 사용한다

class Car {
    constructor(color) {
        this.color =color;
        this.wheel = 4;
    }
    drive(){
        console.log('drive...');
    }
    stop(){
        console.log('stop!');
    }
}

class Bmw extends Car {
    park() {
        console.log('park');
    }
}

const z4 = new Bmw('blue');

# method overriding

class Car {
    constructor(color) {
        this.color =color;
        this.wheel = 4;
    }
    drive(){
        console.log('drive...');
    }
    stop(){
        console.log('stop!');
    }
}

class Bmw extends Car {
    constructor () {
        this.navigation= 1;
    }
    park() {
        console.log('park');
    }
}

const z4 = new Bmw('blue'); // error - 부모생성자를 먼저 호출해야한다

- 따라서 항상 자식쪽에서 constructor에서 super()로 부모 클래스의 constructor를 실행해줘야한다

class Bmw extends Car {
    constructor () {
        super(); //부모클래스 constructor 실행
        this.navigation= 1;
    }
    park() {
        console.log('park');
    }
}

const z4 = new Bmw('blue');  // constructor가 잘생성된다 but, 인수로 받은 color가 있음에도 undefined가 저장되는데 똑같이 constructor에 인수로 받아줘야한다

class Bmw extends Car {
    constructor (color) {
        super(color); //부모클래스 constructor 실행
        this.navigation= 1;
    } //자식 class가 작동할때 constructor가 없으면 있는거처럼 동작함 그래서 consturctor를 따로 추가하지않아도 잘작동 했던거
    park() {
        console.log('park');
    }
}
