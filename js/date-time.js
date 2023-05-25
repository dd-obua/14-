'use strict';

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('2023-05-25T12:53:09.247Z'));
console.log(new Date('August 21, 2010'));
console.log(new Date('2019-11-18T21:31:17.178Z'));
console.log(new Date(2013, 11, 15, 16, 55, 30));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
console.log();

const future = new Date(2025, 11, 15, 16, 55, 43);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth() + 1);
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(Date.now());
