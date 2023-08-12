const inputElement = document.querySelector("input#name-input");
const spanOutputElement = document.querySelector("span#name-output");
const handleInput = () => {
    if (event.currentTarget.value === "") {
        spanOutputElement.textContent = "Anonymous";
    } else {
        spanOutputElement.textContent = event.currentTarget.value;
     }
};

inputElement.addEventListener("input", handleInput);