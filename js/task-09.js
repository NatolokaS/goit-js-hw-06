const bodyElement = document.querySelector("body");
const buttonElement = document.querySelector("button.change-color");
const spanElement = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonHandler = () => {
  bodyElement.style.backgroundColor = getRandomHexColor();
};

buttonElement.addEventListener("click", buttonHandler);



