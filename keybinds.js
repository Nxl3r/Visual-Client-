document.addEventListener("keydown", (e) => {

  if (e.key === "q") {
    console.log("Drop stack (64)");
  }

  if (e.key === "Shift") {
    window.shiftEquip = true;
  }

});

document.addEventListener("keyup", (e) => {
  if (e.key === "Shift") {
    window.shiftEquip = false;
  }
});