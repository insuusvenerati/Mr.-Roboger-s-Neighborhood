document.getElementById("number-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const number = document.getElementById("number").value;
  const outputEl = document.getElementById("output");
  const output = numberSubstitution(number);
  outputEl.innerHTML = output.join(", ");
  outputEl.classList.add("show");
});

function numberSubstitution(number) {
  if (number === 0) return [0];
}
