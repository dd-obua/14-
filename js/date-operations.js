'use strict';

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (24 * 60 * 60 * 1000);

const days1 = calcDaysPassed(new Date(2020, 5, 15), new Date(2020, 5, 25));
console.log(days1);