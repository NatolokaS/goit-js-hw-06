const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = [];

const element = document.querySelector("#ingredients");
ingredients.forEach(ingredient => {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientElement.className = 'item';
  ingredientsArray.push(ingredientElement);
});
  element.append(...ingredientsArray);