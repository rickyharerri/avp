(() => {
  const BASE_WIDTH = 1440;
  const stage = document.getElementById('stage');
  const site = document.getElementById('site');

  function fitCanvas() {
    const scale = Math.min(window.innerWidth / BASE_WIDTH, 1);
    site.style.transform = `scale(${scale})`;
    stage.style.width = `${BASE_WIDTH * scale}px`;
    stage.style.height = `${site.offsetHeight * scale}px`;
  }

  window.addEventListener('resize', fitCanvas, { passive: true });
  window.addEventListener('load', fitCanvas);
  fitCanvas();

  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
  });
})();
