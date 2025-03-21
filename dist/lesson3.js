"use strict";
// function 
var _a, _b;
function add(a, b) {
    return a + b;
}
console.log(add(12, 12));
// function generic
function logger(message) {
    console.log(`Log : ${message}`);
}
(_a = (logger)) === null || _a === void 0 ? void 0 : _a('aung');
(_b = (logger)) === null || _b === void 0 ? void 0 : _b(31);
logger(true);
// 
const totalNumber = (numbers) => {
    return numbers.reduce((a, c) => a + c, 0);
};
let totalRes = totalNumber([1, 2, 3, 4]);
console.log(totalRes);
const anc = {
    name: 'anc',
    age: 28
};
const about = (user) => {
    console.log(`My name is ${user.name} . I'm ${user.age} years old!`);
};
about === null || about === void 0 ? void 0 : about(anc);
