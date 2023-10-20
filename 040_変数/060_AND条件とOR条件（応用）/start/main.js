function hello(name = 'DIO') {
  // if (!name) {
  //   name = 'DIO';
  // }
  // name = name || 'DIO';
  console.log('Hello ' + name);
}

hello();

let name;

name && hello(name);
