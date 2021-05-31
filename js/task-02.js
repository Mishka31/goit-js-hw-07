const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.createElement("ul");

for (const txt of ingredients) {
  const li = document.createElement("li");
  li.textContent = txt;
  // console.log(li);
  ul.appendChild(li);
}
console.log(ul);
document.body.append(ul);
