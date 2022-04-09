let html = '<div class="box_title">제목 영역</div>' //안에 문자는 "

let desc = "it's 3 o'clock" // 영어로 된문장은 "이편함

# `` - 백틱 값을 넣거나 식을 넣거나 여러줄을 넣을수있다

let result = `my name is ${name}` //백틱은 값넣을때 편함
let result = `1+2 = ${1+2}`;
let desc = ` jddfdf gdfdf gdgggg`; // ''로 표현하려면 꼭 \n을 써야한다 또한 꼭 한줄로 써야한다 줄바꿈을 하면 error

# legnth - .length - 문자열 길이

# 배열과 같이 문자에 숫자로 접근가능

//다만 한글자만 바꾸는건안된다
let desc = '안녕하세요';
desc[4] = '용'; //변화없다
console.log(desc); //안녕하세요 로 나온다

# .toUpperCase() .toLowerCase() - 대문자 소문자로 바꿔준다

# str.indexOf(text) - text가 str에서 몇번째 위치하는지 알려준다 찾는 문자가 없으면 -1반환

# str.includes(text) - text가 str에 있으면 true 없으면 false

# str.slice(n,m) - str에서 n(시작점) 부터 m(없으면 문자열 끝까지 양수면 그 숫자까지 (포함x) 음수면 끝에서부터 센다) 까지 문자열을 반환

# str.substring(n,m) - n과 m사이 문자열 반환 - n,m바꿔도 동작 음수는 0으로 인식

# str.substr(n,m) - n부터 시작해 m개를 가져온다

# .trim() - 앞뒤 공백제거

# str.repeat(n) - 문자열 n번 반복

# 'a' < 'c' //true 문자열도 비교가능하다 ascii값

# 'a'.codePointAt(0); // 97 a의 아스키코드값을 가져온다

# String.fromCodePoint(97) // 97이라는 숫자코드의 문자를 가져온다
