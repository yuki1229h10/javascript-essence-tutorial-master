/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 *
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person = {
    hello: function () {
        console.log('hello Tom');
    }
}
setTimeout(person.hello, 1000);

/**
 * correct answer
 */
const personAnswer = {
    hello: function () {
        return 'hello Tom';
    }
}
setTimeout(() => {
    const hello = personAnswer.hello();
    console.log(hello);
}, 1000);


/**
 * 問題２：
 * setTimeoutの実行から１秒後にブラウザの
 * ダイアログに'hello Tom'と表示されるように
 * 実装してみましょう。
 *
 * ※必ずperson.helloメソッドは解答内で使用してください。
 * ※alertは第一引数に渡した文字列を画面のダイアログに表
 * 示する関数です。
 */
const person2 = {
    hello: function () {
        alert('hello Tom');
    }
}
setTimeout(person2.hello, 1000);

/**
 * correct answer
 */
const personAnswer2 = {
    hello: function () {
        return 'hello Tom';
    }
}
setTimeout(() => {
    const hello = personAnswer2.hello();
    alert(hello);
}, 1000);

/**
 * 問題３：
 * objにgreetingというメソッドを実装しました。
 * これをsetTimeoutで１秒後に表示するようなafter1sの
 * 関数にコールバックとして渡しました。
 * その後objに格納したgreeting関数を別の関数で
 * 上書きしました。
 * この時、１秒後にコンソールに出力されるのは
 * 'hello'または'hey'のどちらでしょうか？
 */
const obj = {};
obj.greeting = function () {
    console.log('hello');
}

function after1s(callack) {
    setTimeout(callack, 1000);
}

// この時点で実行します。
// after1s(obj.greeting);

// この後でgreetingを書き換えます。
obj.greeting = function () {
    console.log('hey');
}

// helloがheyよりも先に宣言されているため、helloが1秒後に呼び出される


/**
 * correct answer
 */
// 別物の関数がセットされているため

let obj1 = {
    prop: 10
}

let obj2 = obj1; // 同じ参照
obj1 = {};
console.log(obj2);

/**
 * 問題４：
 * 以下のcalcFactoryを修正して、計算式を
 * コンソール(console.log)に表示するか、
 * ダイアログ(alert)に出力するかを
 * 使い分けできるようにしてください。
 *
 * ※コールバック関数を用いて実装してください。
 */
function calcFactory(val, showAlert) {
    return {
        plus: function (target) {
            const newVal = val + target;
            console.log(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function (target) {
            const newVal = val - target;
            console.log(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function (target) {
            const newVal = val * target;
            console.log(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function (target) {
            const newVal = val / target;
            console.log(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    };
}


// const calc = calcFactory(10);
// calc.plus(5, showAlert());
// calc.minus(3, showAlert());
// calc.multiply(3, showAlert());
// calc.divide(2, showAlert());




// function greet(name, callback) {
//     console.log('Hi ' + ' ' + name);
//     callback();
// }

// function callMe() {
//     console.log('I am callback function');
// }

// greet('DIO', callMe);


/**
 * correct answer
 */
function calcFactory(val, callback) {
    return {
        plus: function (target) {
            const newVal = val + target;
            callback(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function (target) {
            const newVal = val - target;
            callback(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function (target) {
            const newVal = val * target;
            callback(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function (target) {
            const newVal = val / target;
            callback(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    };
}


const calc = calcFactory(10, alert);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);
