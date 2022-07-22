// Assignment Code
var generateBtn = document.querySelector("#generate");

//Math.random()
// Defining all the possible characters for the password and variables for length and criteria selected
var upLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var lengthPassword = 0;
var upLetterSelection = undefined;
var lowLetterSelection = undefined;
var numbersSelection = undefined;
var specialCharSelection = undefined;
var criteriaSelection = [];

// Defining the length of the password
function lengthSelection() {
//  lengthPassword = parseInt(prompt("Please select a length between 8 and 128 characters"));
  lengthPassword = prompt("Please select a length between 8 and 128 characters");
  if (lengthPassword < 8 || lengthPassword > 128){
    alert("The length has to be between 8 and 128 characters");
    return false;
  }
  else if (isNaN(lengthPassword)) {
    alert("Select only numbers between 8 and 128.")
    return false;
  }
  return lengthPassword;
}

// Defining if the user requires upper cases, lower cases, numbers and/or special characters 
function upLetterCriteria() {
  upLetterSelection = confirm("Do you require upper case letters?");{
    //criteriaSelection = criteriaSelection.append(upLetter); not working
    //criteriaSelection = criteriaSelection.push(upLetter); not working
    criteriaSelection = criteriaSelection.concat(upLetter);
  }
  return true; 
}

function lowLetterCriteria() {
  if (lowLetterSelection = confirm("Do you require lower case letters?")){
    criteriaSelection = criteriaSelection.concat(lowLetter);
  }
  return true;
}

function numbersCriteria() {
  if (numbersSelection = confirm("Do you require numbers?")){
    criteriaSelection = criteriaSelection.concat(numbers);
  }
  return true;
}

function specialCharCriteria() {
  if (specialCharSelection = confirm("Do you require special characters?")){
    criteriaSelection = criteriaSelection.concat(specialChar);
  }
  return true;
}









// function promptQuestions(){
//    var upLetterRequired(){
//      if (confirm(upLetterRequired)){
//        criteriaSelected = criteriaSelected.concat(upLetter);
//      }
//    }

// var lowLetterRequired = prompt ("Do you require lower case letters?")
// var numbersRequired = prompt ("Do you require numbers?")
// var specialCharRequired = prompt ("Do you require special characters?")

//var upLetterRequired = prompt ("Do you require upper case letters?")
//var lowLetterRequired = prompt ("Do you require lower case letters?")
//var numbersRequired = prompt ("Do you require numbers?")
//var specialCharRequired = prompt ("Do you require special characters?")

//fucntion shuffle(){
//  for (var i=length-1; i>0; i--){
//    var r = Math.floor(Math.random()*(i + 1));
//  }
//}



function generatePassword() {

}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
