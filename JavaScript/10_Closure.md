# Closure - 함수와 렉시컬 환경의 조합 함수가 생성될 당시의 외부 변수를 기억 생성 이후에도 계속 접근가능

# lexical evn - 스크립트 전체, 실행중인 함수, 코드블록 등은 자신만의 렉시컬 환경을 갖는다. 렉시컬 환경은 환경레코드, 외부렉시컬 환경으로 구성된다. - 어휘적 환경이라고도 한다.

- 환경레코드 - 렉시컬환경에서 모든 지역변수를 프로퍼티로 저장하고있는 객체이다. this,함수일경우 매개변수도 포함.

- 현재 렉시컬 환경보다 더 상위의 렉시컬환경. 스크립트는 최상위 렉시컬환경이며 스크립트 내에 호출된 함수나 코드블록은 외부 렉시컬 환경으로 스크립트 렉시컬 환경을 참조한다

function makeCounter() {
  let count = 0; // 은닉화

  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

console.log(makeConter()()); // 0
console.log(makeConter()()); // 0
console.log(makeConter()()); // 0