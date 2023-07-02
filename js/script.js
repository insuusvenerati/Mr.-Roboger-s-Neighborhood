document.getElementById("number-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const number = document.getElementById("number").value;
  const output = numberSubstitution(number);
  document.getElementById("output").innerHTML = output.join(", ");
});

/**
 *
 * @param {string} number
 * @returns
 */
function numberSubstitution(number) {
  const output = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      output.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      output.push("Boop!");
    } else if (i.toString().includes("1")) {
      output.push("Beep!");
    } else {
      output.push(i);
    }
  }
  return output;
}
