let generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password === undefined) {
      return
  }
  passwordText.value = password;
}
// contruct values
const specialCharacters = ["!","@","#","$"];
const numerics = ['1','2','3','4','5','6','7','8','9','0'];
const lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
const uppercaseCharacaters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function userSelections(){
let numberOfCharacters = parseInt(prompt("How many Characters would you like your password to be? Please select a number between 8 and 128"));
 
if (Number.isNaN(numberOfCharacters)) {
    alert("You must enter a number.")
    return
}
if (numberOfCharacters < 8){
    alert("You must include at least 8 characters.")
    return

}
else if (numberOfCharacters >128) {
    alert("You may not slect more than 128 characters")
    return
}

let lowercaseCharacters = confirm("Would you like lowercase letters?")
let uppercaseCharacaters = confirm("Would you like uppercase letters?")
let specialCharacters = confirm("Would you like special characters?")
let numerics = confirm("Would you like numerics")

if (!lowercaseCharacters && !uppercaseCharacaters && !specialCharacters && !numerics) {
    alert("You must select atleast one charcater type.")
}

let optionObj = {
    length: numberOfCharacters,
    lowercase: lowercaseCharacters,
    uppercase: uppercaseCharacaters,
    specialChars: specialCharacters,
    numbers: numerics,
}
return optionObj
}

function generatePassword() {
    let selectedOpt = userSelections()

    if(selectedOpt === undefined) {
        return
    }

    let {length , lowercase, uppercase, specialChars, numbers} = selectedOpt
    let possibleCharacters = [];
    let generatePassword = [];

    if (lowercase){
        possibleCharacters = possibleCharacters.concat(lowercaseCharacters)
    }
    if (uppercase){
        possibleCharacters = possibleCharacters.concat(uppercaseCharacaters)
    }
    if (numbers){
        possibleCharacters = possibleCharacters.concat(numerics)
    }
    if (specialChars){
        possibleCharacters = possibleCharacters.concat(specialCharacters)
    }
    
    //loop to generate random password
    for (i= 0; i < length + 1; i++){
        let characterIndex = Math.floor(Math.random() * possibleCharacters.length)
        generatePassword += possibleCharacters[characterIndex]
    }
    return generatePassword
}

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);