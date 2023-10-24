/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
 */
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
console.log(iterator.next().value);
