// interfaces

interface Dog {
    name: string,
    age: number,
    color?: string | undefined
}

interface Eat {
    eat: () => void,
}

interface Cat extends Eat, Dog {
    meow(): void,
}

// usage of Dog interface and Eat by & 
"🐕"
const mike: Dog & Eat = {
    name: 'mike',
    age: 3,
    eat(): void {
        console.log(`${this.name} is eating!`);
    }
}
mike.eat?.();

// usage of cat interface by extends
"🐈"
const kitty: Cat = {
    name: 'kitty',
    age: 2,
    color: 'yellow',
    eat(): void {
        console.log(`${this.name} is eating!`);
    },
    meow(): void {
        console.log(`${this.name} is meow!`);
    }
}
console.log(kitty);
kitty.eat();
kitty.meow?.();

// login with interface
interface Login {
    readonly email: string,
    readonly password: number,
}

const jonnyLogin: Login = {
    email: 'jonny@123',
    password: 123123123
}
const susuLogn: Login = {
    email: 'susu@123',
    password: 123123123
}

const loginProcess = (user: Login): [string, number] => {
    // user.email && user.password is correct 
    return [`${user.email} and ${user.password}  are correct. You have login success!`, 12312332123]
};

const [message, token] = loginProcess?.(jonnyLogin)
console.log(message);
console.log(token);

// return obj
const tester = (name: string, age: number) => {
    let userName = name;
    let userAge = age;
    return { userName, userAge }
}
const { userName: nickName, userAge } = tester('koko', 33);
console.log(nickName, userAge);

// array
const authUser: Login[] = [];
authUser.push(jonnyLogin)
authUser.push(susuLogn)

authUser.forEach(user => console.log(user.email)); //log email 

const userList = (users: Login[]): [string, string[]] => {
    let message = 'Auth users email ';
    let emails = users.map(user => user.email);
    return [message, emails]
}
const [mess, emails] = userList(authUser)
console.log(`${mess} : ${emails}`);








