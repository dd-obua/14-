'use strict';

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(2, 3, 53, 5, 29, 2, 14));
console.log(Math.min(2, 3, '53', 5, 29, 2, 14));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
console.log(getRandomInt(1, 5));
console.log();

// Round numbers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(24.3));
console.log(Math.ceil(24.9));
