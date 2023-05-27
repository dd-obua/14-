'use strict';

setTimeout(
  (ingred1, ingred2) =>
    console.log(`Here is your ${ingred1} and ${ingred2} pizza.`),
  3000,
  'olives',
  'spinach'
);
console.log('Waiting ...');
