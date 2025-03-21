// type

// type array
type Color = readonly [string, string, { opacity: string }]
const red: Color = ['red-100', 'red-200', { opacity: '100' }]
const green: Color = ['green-100', 'green-200', { opacity: '80' }]
console.log(red);

// Union type
type Direction = ('up' | 'down' | 'foward' | 'back')[];
const direction: Direction = ['up', 'back', 'foward', 'up']
console.log(direction);

// type Object
type Post = {
    id: number,
    title: string,
    color: Color
}
const newPost1: Post = { id: 1, title: 'new post one', color: red }
const newPost12: Post = { id: 2, title: 'new post two', color: green }
console.log(newPost1);

// type use in function 
type typeTuple = [string, Post[], string[]]
const posts = (posts: Post[]): typeTuple => {
    return ['post ', posts.map(post => post), posts.map(p => p.color[2].opacity)]
}
const [info, myPosts, opacitys] = posts([newPost1, newPost12]);
console.log(info);
console.log(myPosts);
console.log(opacitys);

// 
type Id = number | string
let myId: Id = '1';
console.log(typeof myId === 'string');  //true

const checkId = (id: Id): Id => {
    // return typeof id === 'string' ? parseInt(id) : id + "";
    return typeof id === 'string' ? Number(id) : id.toString();
};
let res = checkId('2');
console.log(typeof res); //number :1









