document.addEventListener("keydown", (e) => {

  // SHIFT + CLICK ARMOR EQUIP (simulation)
  if (e.key === "Shift") {
    window.shiftEquip = true;
  }

  // DROP FULL STACK KEY (Q)
  if (e.key === "q") {
    dropStack();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Shift") {
    window.shiftEquip = false;
  }
});

// Example: fast stack drop logic
function dropStack() {
  console.log("Dropping full 64 stack...");
  // connect this to your inventory system
}