const catigoreisEl = document.querySelectorAll(".item");
console.log(`В списке ${catigoreisEl.length} категории.`);

catigoreisEl.forEach((e) => {
  console.log(`Категория: ${e.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${e.lastElementChild.children.length}`);
});
