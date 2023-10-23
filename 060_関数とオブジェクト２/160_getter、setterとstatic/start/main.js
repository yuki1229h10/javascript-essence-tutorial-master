function Person1(name, age) {
	this._age = age;
	this._age = age;
}

Person1.hello() = function () {
	console.log('hello');
}
Person1.hello();

Object.defineProperty(Person.prototype, 'name', {
	get: function () {
		console.log('hello');
		return this._name;
	},
	set: function (val) {
		this._name = val;
	}
});

const p1 = new Person1('Bob', 23);
console.log(p1.name);

p1.name = 'Tom';
console.log(p1.name);
console.log(p1.name);
console.log(p1.name);
console.log(p1.name);


class Person2 {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		console.log('hello');
		return this._name;
	}
	set name(val) {
		this._name = val;
	}

	static hello() {
		console.log('hello')
	}
}

const p2 = new Person2('Bob', 23);

person2.hello()
