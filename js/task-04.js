let counterValue = 0;
const counterSpan = document.querySelector("span#value");
const buttonDecrement = document.querySelector("div#counter button[data-action='decrement']");
const buttonIncrement = document.querySelector("div#counter button[data-action='increment']");

const handleClickDecrement = () => {
    counterValue -= 1;
    counterSpan.textContent = counterValue;
};

const handleClickIncrement = () => {
    counterValue += 1;
    counterSpan.textContent = counterValue;
};

buttonDecrement.addEventListener("click", handleClickDecrement);
buttonIncrement.addEventListener("click", handleClickIncrement);