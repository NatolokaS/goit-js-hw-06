const inputElement = document.querySelector("#font-size-control");
const spanTextElement = document.querySelector("#text");

inputElement.textContent = inputElement.value;

inputElement.addEventListener("input", (event) => {
    spanTextElement.style.setProperty("font-size", inputElement.value+'px');
});