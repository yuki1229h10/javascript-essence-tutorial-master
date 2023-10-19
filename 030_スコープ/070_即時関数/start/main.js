function a() {
  console.log('called');
}

a();


let c = (function (val) {
  console.log('You called.' + val);
  return 0;
})(100);

// console.log(c);

let b = function () {
  console.log('She called.');
}();



let d = (function () {

  console.log('He called.');

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called.');
  }
  function publicFn() {
    console.log('publicFn is called: ' + privateVal++);
  }

  return {
    publicVal,
    publicFn
  };
})()

d.publicFn();
d.publicFn();
d.publicFn();
