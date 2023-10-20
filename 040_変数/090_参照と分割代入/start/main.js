const a = {
  prop: 0
}

let { prop } = a;

prop = 1;

console.log(a, prop);


function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(obj, prop);
}

fn(a);

const c = {
  prop1: {
    prop2: 0
  }
}

let { prop1 } = c;

prop1.prop2 = 1;

console.log(c, prop1);




const d = {
  prop1: {
    prop2: 0
  }
}
const { prop1: { prop2 } } = c;
const propEx = { prop2: 1 };
console.log(d, propEx);
