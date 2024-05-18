const passwordContainer = document.getElementById("password")
const button = document.getElementById("button")
const copy = document.getElementById("copy")
const length = 15;
const capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()+_/><,.}{|!";
const altogether = capLetter + lowCase + numbers + symbols;


function generatePassword() {
  let password = ' ';

  while (length > password.length) {
    password += altogether[Math.floor(Math.random() * (altogether.length - 1))]

    passwordContainer.value = password;
  }
}

function main(event) {
  // event.preventDefault();
  button.addEventListener('click', generatePassword);

}


function changeColor() {
  button.classList.add('hover')
  console.log(
    'Hello'
  )
}
function changeBack() {
  button.classList.remove('hover')
  console.log(
    'Hello'
  )
}
function scale() {
  button.classList.add('hover')

}


button.addEventListener('mouseenter', changeColor);
button.addEventListener('mouseleave', changeBack);
button.addEventListener('click', scale);



main();





// function copy.addEventListener('click', _) {
//   passwordContainer.Selected(passwordContainer)
//   passwordContainer.clipboard.writeText(password)
// }

// button.addEventListener('mouseMove', button) {

//   let passwordContainer = password.value;
//   password.value = passwordContainer;
// };

console.log(button)
