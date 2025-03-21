const users: any[] = ['Alice', 'Bob', 'Charlie'] as const; // The 'as const' assertion makes the array readonly and immutable.

console.log(`Hello, ${users[0]}!`);

interface User {
    name: string;
    age: number;
    readonly email: string;
    isActive: boolean;
}

const logUser = (user: User): void => {
    console.log(`User: ${user.name}, Age: ${user.age}, Email: ${user.email}, Active: ${user.isActive}`);
}
logUser({ name: 'Alice', age: 30, email: '', isActive: true });

const susu: User = { name: 'susu', age: 30, email: '', isActive: true };
logUser(susu);

let mass;

let user: { name: string, age: number, email: string, isActive: boolean };


const myTuple2: readonly [number, string, boolean, 'test'] = [1, 'susu', true, 'test']; //The readonly keyword makes the tuple immutable.
console.log(myTuple2); // 1

/**
✔️ as const makes the tuple immutable.
✔️ The tuple retains exact values (literals).
✔️ The length and order of elements are fixed.
✔️ It prevents modification, ensuring strict type safety.
 */
const myTuple = [1, 'susu', false] as const; //The as const assertion makes the entire tuple/array readonly and immutable.
// myTuple.push(2); // Error: Property 'push' does not exist on type 'readonly [1, "susu", true]'.