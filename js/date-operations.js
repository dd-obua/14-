'use strict';

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (24 * 60 * 60 * 1000);
