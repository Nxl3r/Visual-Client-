document.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    toggleMenu();
  }
});

function toggleMenu() {
  let menu = document.getElementById("modmenu");

  if (!menu) {
    menu = document.createElement("div");
    menu.id = "modmenu";

    menu.style = `
      position:absolute;
      right:20px;
      top:20px;
      width:200px;
      background:rgba(0,0,0,0.8);
      color:white;
      padding:10px;
      border-radius:10px;
      font-family:Arial;
    `;

    menu.innerHTML = `
      <h3>PvP Mods</h3>
      <label><input type="checkbox"> Auto Sprint</label><br>
      <label><input type="checkbox"> Sprint Toggle</label><br>
      <label>FOV</label>
      <input type="range" min="70" max="120">
    `;

    document.body.appendChild(menu);
  } else {
    menu.remove();
  }
}