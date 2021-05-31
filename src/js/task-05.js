const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("h1 > #name-output"),
};
// console.log(refs.inputEl);
// console.log(refs.spanEl);
// console.log(refs.h1El);

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);

// function onInputFocus() {
//   console.log("Нашал фокус");
// }

// function onInputBlur() {
//   console.log("Размыл фокус");
// }

refs.input.addEventListener("input", onInputChange);

function onInputChange(params) {
  if (params.currentTarget.value === "") {
    return (refs.span.textContent = "незнакомец");
  }
  refs.span.textContent = params.currentTarget.value;
}
