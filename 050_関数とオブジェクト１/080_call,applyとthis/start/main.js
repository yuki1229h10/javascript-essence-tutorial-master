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
