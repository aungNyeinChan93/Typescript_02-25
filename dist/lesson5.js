"use strict";
// interfaces
var _a, _b;
// usage of Dog interface and Eat by & 
"🐕";
const mike = {
    name: 'mike',
    age: 3,
    eat() {
        console.log(`${this.name} is eating!`);
    }
};
(_a = mike.eat) === null || _a === void 0 ? void 0 : _a.call(mike);
// usage of cat interface by extends
"🐈";
const kitty = {
    name: 'kitty',
    age: 2,
    color: 'yellow',
    eat() {
        console.log(`${this.name} is eating!`);
    },
    meow() {
        console.log(`${this.name} is meow!`);
    }
};
console.log(kitty);
kitty.eat();
(_b = kitty.meow) === null || _b === void 0 ? void 0 : _b.call(kitty);
const jonnyLogin = {
    email: 'jonny@123',
    password: 123123123
};
const susuLogn = {
    email: 'susu@123',
    password: 123123123
};
const loginProcess = (user) => {
    // user.email && user.password is correct 
    return [`${user.email} and ${user.password}  are correct. You have login success!`, 12312332123];
};
const [message, token] = loginProcess === null || loginProcess === void 0 ? void 0 : loginProcess(jonnyLogin);
console.log(message);
console.log(token);
// return obj
const tester = (name, age) => {
    let userName = name;
    let userAge = age;
    return { userName, userAge };
};
const { userName: nickName, userAge } = tester('koko', 33);
console.log(nickName, userAge);
// array
const authUser = [];
authUser.push(jonnyLogin);
authUser.push(susuLogn);
authUser.forEach(user => console.log(user.email)); //log email 
const userList = (users) => {
    let message = 'Auth users email ';
    let emails = users.map(user => user.email);
    return [message, emails];
};
const [mess, emails] = userList(authUser);
console.log(`${mess} : ${emails}`);
