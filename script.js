// script.js
function updateTime() {
  const now = new Date();

  const day = now.toLocaleString('en-GB', { weekday: 'long' });
  const timeString = now.toLocaleString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true });
  const [time, period] = timeString.split(' ');
  const date = now.toLocaleString('en-GB', { day: 'numeric', month: 'short' });

  document.querySelector('.day').textContent = day;
  document.querySelector('.time').textContent = time;
  document.querySelector('.ampm').textContent = period.toUpperCase();
  document.querySelector('.date').textContent = date;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call
