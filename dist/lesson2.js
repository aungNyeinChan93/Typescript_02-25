"use strict";
// array in Typescript 😊
let movies;
movies = ['Dark', 'Jigar', 'newtopia', 'three body problem', 'stranger thing'];
// movies = movies.map(m => m = 'this is assign  new movie name') // can not reasign bcz of const
let myMovies = [];
const movieName = (movies) => {
    myMovies.push(...movies.map(movie => `My movies:  ${movie}`));
};
movieName === null || movieName === void 0 ? void 0 : movieName([...movies]); // clone the movies object bcz of origin obj is mutable
console.log(myMovies);
console.log(movies);
// object
let car = {
    name: 'BMW',
    model: 2022,
    make: 'Germarny'
};
let carNmae = car.name; //type : string
let cars = [['BMW'], 2022, 'Germarny', { name: 'mgmg' }];
let carNmae2 = cars[0]; // type : string | number | string[] | {name:'mgmg'}
console.log(typeof carNmae, typeof carNmae2, '😁😁😁');
// Obj {}
// let game: { name: string, year: number | string } ; //this approach is not working for later assing process ❌❌❌
let game = { name: '', year: "" }; // ✅✅✅
game.year = 2011;
