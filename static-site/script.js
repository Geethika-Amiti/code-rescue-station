// Code Rain Effect
(function () {
  const container = document.getElementById('code-rain');
  if (!container) return;

  const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>/\\|=+-*&^%$#@!";
  const columns = 40;

  for (let i = 0; i < columns; i++) {
    let line = '';
    for (let j = 0; j < 60; j++) {
      line += chars[Math.floor(Math.random() * chars.length)];
    }
    const el = document.createElement('div');
    el.className = 'code-rain-col';
    el.style.left = (i * 2.5) + '%';
    el.style.animationDelay = (-Math.random() * 20) + 's';
    el.style.animationDuration = (15 + Math.random() * 10) + 's';
    el.innerHTML = line + '<br>' + line;
    container.appendChild(el);
  }
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
