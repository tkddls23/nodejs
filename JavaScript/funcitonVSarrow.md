function - 자기만의 this를 가진다
arrow - 자기만의 this가 없음

button.addEventListener('click',funtion() {
    console.log(this.textContent);
});

button.addEventListener('click', (e)=>{
    console.log(e.textContent);
});

this를 써야하는 곳이면 function을 쓰자