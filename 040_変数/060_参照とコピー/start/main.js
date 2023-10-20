const prim = 'hello';
const obj = { 0: 'hello' };
console.log(prim[0], obj[0]);

prim[0] = 'g';
obj[0] = 'g';
console.log(prim[0], obj[0]);


let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b);

let c = {
  prop: 'hello'
}
let d = c;
// d = 'bye';
d = {};
console.log(c, d);
