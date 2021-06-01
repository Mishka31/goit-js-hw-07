const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("h1 > #name-output"),
};
refs.input.addEventListener("input", onInputChange);

function onInputChange(params) {
  if (params.currentTarget.value === "") {
    return;
  }
  refs.span.textContent = params.currentTarget.value;
}
