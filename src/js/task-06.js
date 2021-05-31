const refs = {
  input: document.querySelector("#validation-input"),
  length: document.querySelector('[data-length="6"]'),
};

refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("blur", onInputBlur);
window.addEventListener("keydown", onEscButton);

function onInputBlur() {
  if (event.currentTarget.value.length === Number(refs.length.dataset.length)) {
    event.currentTarget.classList.add("valid");
    return event.currentTarget;
  } else if (event.currentTarget.value.length === 0) {
    return event.currentTarget.classList.remove("invalid");
  }
  return event.currentTarget.classList.add("invalid");
}
function onInputFocus() {
  event.currentTarget.classList.remove("invalid");
  event.currentTarget.classList.remove("valid");
}
