// let a = (1 + 2) * 3;
let a = 0;
console.log(a);

let b;
// let b;
// a = b = 1;

a = (b = a) + 1;
console.log(a, b);

function fn() {
  let a = 0;
  return a++;
}
console.log(!(fn() * 5));
