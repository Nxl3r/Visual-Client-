const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let last = 0;

function loop(time) {
  const delta = time - last;
  last = time;

  if (delta < 1000 / CONFIG.fpsLimit) {
    requestAnimationFrame(loop);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (CONFIG.useLowGraphics) {
    ctx.imageSmoothingEnabled = false;
  }

  drawHUD(ctx);

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);