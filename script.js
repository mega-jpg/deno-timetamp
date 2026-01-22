function pad(n){ return String(n).padStart(2, '0'); }

function formatDate(date) {
  const d = pad(date.getDate());
  const m = pad(date.getMonth() + 1);
  const y = date.getFullYear();
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  return `${d}/${m}/${y}\n${hh}:${mm}:${ss}`;
}

const el = document.getElementById('timestamp');

function update() {
  const now = new Date();
  el.textContent = formatDate(now);
}

update();
setInterval(update, 1000);