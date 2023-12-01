const btnRules = document.querySelector(".rulesButton");
const btnClose = document.querySelector(".close-btn");
const Rules = document.querySelector(".rules");

// Show/Hide Rules
btnRules.addEventListener("click", () => {
  Rules.classList.toggle("show-rules");
});
btnClose.addEventListener("click", () => {
  Rules.classList.toggle("show-rules");
});
