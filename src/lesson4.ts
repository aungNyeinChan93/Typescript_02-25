// tuple

let myTuple: [string | number, number, boolean, null];

myTuple = ['jkjl', 11, true, null]
console.log(myTuple[0] = 12);

const myTuple2: readonly [string, number] = ['my score', 100];
const [score, mark] = myTuple2
console.log(`${myTuple2[0]} is ${myTuple2[1]} !`);
console.log(`${score} is ${mark} !`);


// function 
const getPosition = (): [number, number, number] => {
    let x = 20;
    let y = 10;
    let z = 0.4
    return [x, y, z]
}

const [x, ...y] = getPosition?.()
console.log(x, y);

// array destructuring
const useData: [string, any[]] = ['position', y]
const [type, point] = useData

console.log(type, point);


// 
const useState = (): [string, any[]] => {
    let name = 'Secrect code number';
    let data = [1, 2, 3, 4, 5, 5, 7, 8];
    return [name, data];
}
const [state, data] = useState();
console.log(`My Code name is ${state} .Data is ${data.reduce((a, c) => a + c, 0)}`);


// name tuple as like associated array in php
const customer: [name: string | undefined, age?: number, isActive?: boolean] = ['aung', 22];

console.log(customer, customer[0]);




