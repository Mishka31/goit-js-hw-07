const refs = {
  input: document.querySelector("#validation-input"),
  length: document.querySelector('[data-length="6"]'),
};
// refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (event.currentTarget.value.length === Number(refs.length.dataset.length)) {
    event.currentTarget.classList.add("valid");

    if (refs.length.classList.contains("invalid")) {
      refs.length.classList.remove("invalid");
    }
  }
  if (event.currentTarget.value.length !== Number(refs.length.dataset.length)) {
    event.currentTarget.classList.add("invalid");
    if (refs.length.classList.contains("valid")) {
      refs.length.classList.remove("valid");
    }
    if (event.currentTarget.value.length === 0) {
      event.currentTarget.classList.remove("invalid");
      event.currentTarget.classList.remove("valid");
    }
  }
}
