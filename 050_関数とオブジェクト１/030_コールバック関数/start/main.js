function hello(name) {
  console.log('hello' + name);
}

function bye() {
  console.log('bye');
}

function fn(cb) {
  cb();
}

fn(hello);
fn(bye);
fn(function (name) {
  console.log('hello' + name);
});

setTimeout(hello, 2000);


let num = 1;

function cb(callback) {
  let num = 3;
  callback();
}

const a = function () {
  console.log(num);
}

cb(a);
