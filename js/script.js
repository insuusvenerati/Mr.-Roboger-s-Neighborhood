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
  let output = [];

  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("1")) {
      output.push("Beep!");
    } else if (i.toString().includes("2")) {
      output.push("Boop!");
    } else if (i.toString().includes("3")) {
      output.push("Won't you be my neighbor?");
    } else {
      output.push(i);
    }
  }

  return output;
}
