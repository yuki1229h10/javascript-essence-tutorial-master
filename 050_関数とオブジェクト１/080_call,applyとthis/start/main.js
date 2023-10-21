function a() {
    console.log('hello ' + this.name);
}

const tim = { name: 'Tim' };
const b = a.bind(tim);

b();

a.apply(tim, ['Tim', 'Bob']);
a.call(tim, 'Tim', 'Bob');

const arry = [1, 2, 3, 4, 5];
Math.max(1, 2);


const result = Math.max(...arry);
console.log(result);



function test() {
    console.log('test');
}

test();
test.call();
test.apply();


function test2() {
    console.log(this);
}

test();
test.call();
test.apply();


let user = { name: 'DIO' };

function greeting(message) {
    return `${message}, ${this.name}`;
}

const call = greeting.call(user, 'Hello');
console.log(call);

const apply = greeting.apply(user, ['Nice to meet you']);
console.log(apply);
