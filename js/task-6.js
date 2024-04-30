function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector("#controls input");

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const placeForBoxes = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = numberInput.value;
  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
});

function createBoxes(amount) {
  placeForBoxes.innerHTML = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    size += 10;
    box.style.backgroundColor = getRandomHexColor();
    box.style.opacity = 0;
    box.style.transition = 'opacity 1s ease'
    setTimeout(() => {
      placeForBoxes.append(box);
      setTimeout(() => {
        box.style.opacity = 1;
      }, 60);
    }, i * 90);
  }
}

destroyButton.addEventListener("click", () => {
  placeForBoxes.innerHTML = "";
});
