window.name = 'John';

const person = {
    name: 'Tom',
    hello: function () {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

fn(person.hello);

fn(helloTom);


function a() {
    console.log('hello ' + this.name);
}

const b = a.bind({ name: 'Tim' });
b();


function c(name) {
    console.log('hello ' + name);
}

const d = c.bind(null, 'Tim');
d('Joseph');
