const keys = {
  w: false,
  a: false,
  s: false,
  d: false
};

document.addEventListener("keydown", (e) => {
  if (keys[e.key] !== undefined) keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  if (keys[e.key] !== undefined) keys[e.key] = false;
});

function drawHUD(ctx) {
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";

  ctx.fillText("CPS: " + window.mods.cps, 20, 40);
  ctx.fillText("FOV: " + window.mods.fov, 20, 60);
  ctx.fillText("Sprint: " + (window.mods.sprint ? "ON" : "OFF"), 20, 80);

  // Keystrokes box
  ctx.strokeStyle = "white";
  ctx.strokeRect(20, 100, 100, 80);

  ctx.fillText(keys.w ? "W" : "", 60, 120);
  ctx.fillText(keys.a ? "A" : "", 30, 150);
  ctx.fillText(keys.s ? "S" : "", 60, 150);
  ctx.fillText(keys.d ? "D" : "", 90, 150);
}