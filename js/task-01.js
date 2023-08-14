const categories = document.querySelectorAll("li.item");
console.log("Number of categories: ",categories.length);

categories.forEach(cat => {
    console.log(`Category: ${cat.firstElementChild.textContent}`);
    console.log(`Elements: ${cat.lastElementChild.children.length}`);
});