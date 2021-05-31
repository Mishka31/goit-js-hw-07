const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const refs = {
  spanEl: document.querySelector("#value"),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
};

console.log(refs.increment);
refs.increment.addEventListener("click", onButtonIncrement);
refs.decrement.addEventListener("click", onButtonDecrement);

function onButtonIncrement() {
  counterValue.increment();
  refs.spanEl.textContent = counterValue.value;
}

function onButtonDecrement(event) {
  counterValue.decrement();
  refs.spanEl.textContent = counterValue.value;
}
