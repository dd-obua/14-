'use strict';

console.log(23 === 23.0);

// Show JS calculation errors
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Convert to number
console.log(Number('12'));
console.log(+'12');

// Parse string to number
console.log(Number.parseInt('15px', 10));
console.log(Number.parseInt('e23', 10));
console.log(Number.parseFloat('3.5rem', 10));

// Check if a something is not a number using NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
