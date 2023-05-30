'use strict';

setInterval(() => {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const minute = `${now.getMinutes()}`.padStart(2, 0);
  const second = `${now.getSeconds()}`.padStart(2, 0);
  document.querySelector('.time').textContent = `${hour}:${minute}:${second}`;
}, 1000);
