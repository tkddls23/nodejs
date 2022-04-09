const {odd,even} = require('./var');

console.time('시작');
function checkOddEven(num){
    if (num %2) {
        return odd;
    }
    else {
        return even;
    }
};
console.timeEnd('시작');



module.exports = checkOddEven;

console.log(checkOddEven(5));
