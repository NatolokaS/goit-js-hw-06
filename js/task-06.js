const inputElement = document.querySelector("#validation-input");
const lengthValidationHandler = (event) => {
    if (inputElement.value.length != Number(inputElement.getAttribute('data-length'))) {
        inputElement.setAttribute("class","invalid");
    }
    if (inputElement.value.length === Number(inputElement.getAttribute('data-length'))) { 
        inputElement.setAttribute("class","valid");
    }
};
inputElement.addEventListener("blur", lengthValidationHandler);