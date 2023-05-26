'use strict';

const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};

const num = 8403492.23;
console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  'Browser:',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
