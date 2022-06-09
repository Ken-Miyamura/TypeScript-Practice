import World from './world';

const root = document.getElementById('root');
const world = new World('Hello World');
world.sayHello(root);

let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
}
let d = c.banana * 4;

console.log(d); // 24


const c2 = 'pineapple'; // 'pineapple'
let d2 = [true, true]; // boolean[]
let e = {type: "apple"}; // {type: string}
let f = [1, false]; // (number | boolean)[]
const g = [1]; // number[]
let h = null; // any