'use strict';

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ingred1, ingred2) =>
    console.log(`Here is your pizza with ${ingred1} and ${ingred2}!`),
  2000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

setInterval(() => {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
