/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 *
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 *
 */
// function hello(name) {
//   console.log('hello ' + name);
// }

/**
 * 実行文は以下の通りです。
 */
// setTimeout(hello('Tom'), 1000);


/**
 * correct answer
 */
// setTimeoutは、第一引数に関数を取るため
function hello(name) {
  return function () {
    console.log('hello ' + name);
  }
}

setTimeout(hello('Tom'), 1000);
