function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const bodyElement = document.querySelector('body');
const spanText = document.querySelector('.color')

button.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
  bodyElement.style = `background-color: ${currentColor}`;
  spanText.textContent = currentColor;
});
