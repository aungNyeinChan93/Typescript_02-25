"use strict";
// type
const red = ['red-100', 'red-200', { opacity: '100' }];
const green = ['green-100', 'green-200', { opacity: '80' }];
console.log(red);
const direction = ['up', 'back', 'foward', 'up'];
console.log(direction);
const newPost1 = { id: 1, title: 'new post one', color: red };
const newPost12 = { id: 2, title: 'new post two', color: green };
console.log(newPost1);
const posts = (posts) => {
    return ['post ', posts.map(post => post), posts.map(p => p.color[2].opacity)];
};
const [info, myPosts, opacitys] = posts([newPost1, newPost12]);
console.log(info);
console.log(myPosts);
console.log(opacitys);
let myId = '1';
console.log(typeof myId === 'string'); //true
const checkId = (id) => {
    // return typeof id === 'string' ? parseInt(id) : id + "";
    return typeof id === 'string' ? Number(id) : id.toString();
};
let res = checkId('2');
console.log(typeof res); //number :1
