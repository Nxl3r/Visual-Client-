// ===== PvP MODS SYSTEM =====

window.mods = {
  sprint: false,
  autoSprint: true,
  fov: 90,
  cps: 0,
  clicks: 0
};

// ===== SPRINT TOGGLE (R) =====
document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    window.mods.sprint = !window.mods.sprint;
    console.log("Sprint:", window.mods.sprint);
  }

  // FOV toggle (F)
  if (e.key === "f") {
    window.mods.fov = window.mods.fov === 90 ? 110 : 90;
    console.log("FOV:", window.mods.fov);
  }
});

// ===== CPS COUNTER =====
document.addEventListener("mousedown", () => {
  window.mods.clicks++;
});

setInterval(() => {
  window.mods.cps = window.mods.clicks;
  window.mods.clicks = 0;
}, 1000);

// ===== AUTO SPRINT LOGIC =====
function updateMovement(player) {
  if (window.mods.autoSprint) {
    player.sprinting = true;
  }
}