const textControllerEl = document.querySelector("#font-size-control");
const controlledTextEl = document.querySelector("#text");

textControllerEl.addEventListener("input", onRangeImput);

function onRangeImput() {
  //   console.log(textControllerEl.value);
  controlledTextEl.style.fontSize = `${textControllerEl.value * 0.5}px`;
}
