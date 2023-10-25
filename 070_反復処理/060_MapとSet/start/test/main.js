// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


/**
 * ex1
 */
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set(1, 'hi');

console.log(map1.get(1));

map1.set('a', 97);
console.log(map1.get('a'));
console.log(map1.size);

map1.delete('b');
console.log(map1.size);


/**
 * ex2
 */
const contacts = new Map();
contacts.set("DIO", { hobby: "study", job: "?" });
contacts.has("DIO");
contacts.get("JOJO");


/**
 * ex3
 */
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () { };
