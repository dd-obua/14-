'use strict';

const num = 8403492.23;
console.log('US:', new Intl.NumberFormat('en-US').format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE').format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY').format(num));
console.log(
  'Browser:',
  new Intl.NumberFormat(navigator.language).format(num)
);
