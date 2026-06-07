window.mods = {
  sprint: false,
  autoSprint: true,
  fov: 90,
  cps: 0,
  clicks: 0
};

document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    window.mods.sprint = !window.mods.sprint;
  }

  if (e.key === "f") {
    window.mods.fov = window.mods.fov === 90 ? 110 : 90;
  }
});

document.addEventListener("mousedown", () => {
  window.mods.clicks++;
});

setInterval(() => {
  window.mods.cps = window.mods.clicks;
  window.mods.clicks = 0;
}, 1000);