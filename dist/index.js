"use strict";
const users = ['Alice', 'Bob', 'Charlie']; // The 'as const' assertion makes the array readonly and immutable.
console.log(`Hello, ${users[0]}!`);
const logUser = (user) => {
    console.log(`User: ${user.name}, Age: ${user.age}, Email: ${user.email}, Active: ${user.isActive}`);
};
logUser({ name: 'Alice', age: 30, email: '', isActive: true });
const susu = { name: 'susu', age: 30, email: '', isActive: true };
logUser(susu);
let mass;
let user;
const myTuple2 = [1, 'susu', true, 'test']; //The readonly keyword makes the tuple immutable.
console.log(myTuple2); // 1
/**
✔️ as const makes the tuple immutable.
✔️ The tuple retains exact values (literals).
✔️ The length and order of elements are fixed.
✔️ It prevents modification, ensuring strict type safety.
 */
const myTuple = [1, 'susu', false]; //The as const assertion makes the entire tuple/array readonly and immutable.
// myTuple.push(2); // Error: Property 'push' does not exist on type 'readonly [1, "susu", true]'.
