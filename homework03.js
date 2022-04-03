const generateBtn = document.querySelector("#generate");

const randomLowercase = () => {
  const lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  return lowercase[Math.floor(Math.random() * lowercase.length)];
};

const randomUppercase = () => {
  const uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
};

const randomNumber = () => {
  const number = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
  return number[Math.floor(Math.random() * number.length)];
};

const randomSpecial = () => {
  const special = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "?", "|", "\\", "/", "~", "`", ";", ":", "'", "\"", ",", "<", ".", ">", " " ];

  return special[Math.floor(Math.random() * special.length)];
};

let generateBtn = document.querySelector("#generate");

function generatepassword() {
  let password = "";
  let length = prompt("How long do you want your password to be? (8-128)");
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  let lowercase = confirm("Do you want lowercase letters?");
  let uppercase = confirm("Do you want uppercase letters?");
  let number = confirm("Do you want numbers?");
  let special = confirm("Do you want special characters?");
  if (lowercase === false && uppercase === false && number === false && special === false) {
    alert("You must choose at least one character type");
    return;
  }
  for (let i = 0; i < length; i++) {
    if (lowercase) {
      password += randomLowercase();
    }
    if (uppercase) {
      password += randomUppercase();
    }
    if (number) {
      password += randomNumber();
    }
    if (special) {
      password += randomSpecial();
    }
  }
  for (I = 0; I < password.length; I++) {
    password[I] = password[Math.floor(Math.random() * password.length)];
  }
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyPassword() {
  let passwordText = document.querySelector("#password");
  passwordText.select();
  passwordText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard");
}

function generateselection() {
  generateBtn.addEventListener("click", writePassword);
  generateBtn.addEventListener("click", copyPassword);
}

generateBtn.addEventListener("click", generatepassword);
