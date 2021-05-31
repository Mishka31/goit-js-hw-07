const catigoreisEl = document.querySelectorAll("li.item");
console.log(`В списке ${catigoreisEl.length} категории.`);

for (let i = 0; i < catigoreisEl.length; i++) {
  const element = catigoreisEl[i];
  const firstItemEl = element;
  const firstItemH2El = firstItemEl.querySelector("h2");
  console.log(`Категория: ${firstItemH2El.textContent}`);
  const ulOfFirstItem = firstItemEl.querySelectorAll("li");
  console.log(`Количество элементов: ${ulOfFirstItem.length}`);
}
