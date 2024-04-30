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
    console.log('The number must be between 1 and 100');
    return;
  }

  createBoxes(amount);

  numberInput.value = '';
});

function createBoxes(amount) {
  placeForBoxes.innerHTML = "";
  let size = 30;
  const boxesArray = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    size += 10;
    box.style.backgroundColor = getRandomHexColor();
    
    boxesArray[i] = box.outerHTML;
  }

  placeForBoxes.innerHTML = boxesArray.join('');

}

destroyButton.addEventListener("click", () => {
  placeForBoxes.innerHTML = "";
  numberInput.value = '';
});
