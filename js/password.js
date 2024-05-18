const passwordContainer = document.getElementById("password")
const button = document.getElementById("button")
const copy = document.getElementById("copy")
const length = 15;
const capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()+_/*><,.}{|!~:;";
const altogether = capLetter + lowCase + numbers + symbols;

button.addEventListener('click',) {
  let password = "";
  password += capLetter[Math.floor(math.random() * capLetter.length)]
  password += lowCase[Math.floor(math.random() * lowCase.length)]
  password += numbers[Math.floor(math.random() * numbers.length)]
  password += symbols[Math.floor(math.random() * symbols.length)]

  while (length > password.length) {
    password += altogether[Math.floor(math.random() * altogether.length)]

    passwordContainer.value = password;
  }
}






// function copy.addEventListener('click', _) {
//   passwordContainer.Selected(passwordContainer)
//   passwordContainer.clipboard.writeText(password)
// }

// button.addEventListener('mouseMove', button) {

//   let passwordContainer = password.value;
//   password.value = passwordContainer;
// };

console.log(button)
