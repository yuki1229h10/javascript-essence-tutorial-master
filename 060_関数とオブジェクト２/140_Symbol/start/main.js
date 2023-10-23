const s = Symbol('hello');
const s2 = Symbol('hello');
console.log(typeof s);

const str = new String('Tom');
console.log(str);

// プロトタイプ汚染になるため、非推奨
// 既存で動いているコードを破壊しないために生み出された。JS開発者側の機能。
String.prototype[s] = function () {
  return 'hello ' + this;
}

const tom = 'Tom';
console.log(tom[s]());
