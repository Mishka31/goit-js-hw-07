const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("#ingredients");

const createProductsItem = (i) => {
  const liEl = document.createElement("li");
  liEl.textContent = i;

  return liEl;
};

const createIngredientsList = ingredients.map(createProductsItem);
ul.append(...createIngredientsList);
