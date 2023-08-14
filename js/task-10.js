const inputElement = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const rootDiv = document.querySelector("div#boxes");
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputHandler = () => {
  inputElement.value = amount;
};

function createBoxes(amount) {
  const divArray = []
	for (let i = 0; i < amount; i++) {
	const divElement = document.createElement('div')
		divElement.style.height = `${30 + 10 * i}px`
		divElement.style.width = `${30 + 10 * i}px`
		divElement.style.background = getRandomHexColor()
		divArray.push(divElement)
	}
	return divArray
}

const buttonCreateHandler = () => {
  let boxesToAdd = createBoxes(inputElement.value);
  rootDiv.append(...boxesToAdd);
};

const buttonDestroyHandler = () => {
  rootDiv.innerHTML = ''
};

buttonCreate.addEventListener("click", buttonCreateHandler);
buttonDestroy.addEventListener("click", buttonDestroyHandler);




  






