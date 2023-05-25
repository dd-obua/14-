'use strict';

console.log('Maximum num:', 2 ** 53 - 1);
console.log('Maximum safe integer:', Number.MAX_SAFE_INTEGER);

console.log(117890986523294701283740185689032834820623461928364n);
console.log(BigInt(86856430298745));

// Make computation Make computations using big ints
console.log(10000000n + 10000000n);
console.log(10000000n * 10000000n);
const huge = 49378075689405286352838456028n;
const num = 23;
console.log(huge * BigInt(num));
console.log();

// Exepceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);
console.log(typeof 20n);
