const person = {
    name: 'Tom',
    hello: function () {
        console.log('Hello ' + this.name);
    }
}
person.hello();


let myObject = {
    value: 10,
    show: function () {
        console.log(this.value);
    }
}
myObject.show();

let show = function () {
    let value = 10;
    console.log(value);
};
show();
