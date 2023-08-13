const bodyElement = document.querySelector("body");
const buttonElement = document.querySelector("button.change-color");
const spanElement = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonHandler = () => {
  const color =getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  spanElement.textContent = color;
};

buttonElement.addEventListener("click", buttonHandler);



