'use strict';

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ingred1, ingred2) =>
    console.log(`Here is your ${ingred1} and ${ingred2} pizza.`),
  3000,
  ...ingredients
);
console.log('Waiting ...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
