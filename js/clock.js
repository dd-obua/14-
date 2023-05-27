'use strict';

setInterval(() => {
  const now = new Date();
  const hour = `${now.getHours()}`.padEnd(2, '0');
  const mins = `${now.getMinutes()}`.padEnd(2, '0');
  const secs = `${now.getSeconds()}`.padEnd(2, '0');
  const day = `${now.getDay()}`;

  let today;

  if (day === 1) today = 'Monday';
  else if (day === 2) today = 'Tuesday';
  else if (day === 3) today = 'Wednesday';
  else if (day === 4) today = 'Thursday';
  else if (day === 5) today = 'Friday';
  else if (day === 6) today = 'Saturday';
  else today = 'Saturday';

  document.querySelector(
    '.time'
  ).textContent = `${today} ${hour}:${mins}:${secs}`;
}, 1000);
