// function 

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(12, 12));

// function generic
function logger<T>(message: T): void {
    console.log(`Log : ${message}`);
}
logger<string>?.('aung')
logger<number>?.(31)
logger<boolean>(true)

// 
const totalNumber = (numbers: number[]): number => {
    return numbers.reduce((a, c) => a + c, 0)
}
let totalRes = totalNumber([1, 2, 3, 4])
console.log(totalRes);


// 
type User = {
    name: string,
    age: number,
}

const anc: User = {
    name: 'anc',
    age: 28
}

const about = (user: User): void => {
    console.log(`My name is ${user.name} . I'm ${user.age} years old!`);
}
about?.(anc);

