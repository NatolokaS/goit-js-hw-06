const element = document.querySelector("ul#categories");

const categories = element.querySelectorAll("li.item");
const categoriesArray = Array.from(categories);
console.log("Number of categories: ",categoriesArray.length);

categories.forEach(cat => {
    const category = cat.querySelector("h2");
    console.log("Category: ",category.textContent);
    
    const categoryElementsList = cat.querySelectorAll("ul li");
    const categoryElementsArray = Array.from(categoryElementsList);
    console.log("Elements: ", categoryElementsArray.length);
});
