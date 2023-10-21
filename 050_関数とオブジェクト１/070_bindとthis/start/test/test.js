/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
 */
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX);



/**
 * https://qiita.com/saka212/items/6cf7015f3a4b76a93a12
 */
let fn = function () {
  console.log(this);
};

fn();
