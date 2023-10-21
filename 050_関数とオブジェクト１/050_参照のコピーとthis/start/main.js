window.name = 'DIO';

const person = {
    name: 'Tom',
    hello: function (name) {
        console.log('Hello ' + this.name);
    }
}
const ref = person.hello;
ref();
