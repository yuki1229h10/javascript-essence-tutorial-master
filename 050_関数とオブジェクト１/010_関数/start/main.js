// const fn = function fn(a, b) {
//   console.log(a, b);
// }
function fn(a) {
  console.log(2);
}

fn(1);


function fn2(a, b = 1) {
  console.log(a, b);
}

let c = null;
fn2(1, undefined);


function fn3(...args) {
  console.log(args);
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
  return a;
}

// let d = null;
let d = fn3(1, undefined, 'test', true);
console.log(d);
