// Assignment Code

// Defining all the possible characters for the password and variables for length and criteria selected
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

//General Variables
var requireUpperCase;
var requireLowerCase;
var requireNumbers;
var requireSpecChar;

var passwordLength = 0;
//var numberCharacterTypes = 0;
var selectionTypeChar = [];
var countTrueSelections = 0;
let findTrueResponses;
let allIndexes = [];
let addCharacters = 0;
let password;
let passwordSelection;


// Defining the length of the password
let lengthSelection = function() {

  //User inputs length of password
  passwordLength = window.prompt('Introduce the length you require for your password between 8 and 128 characters');

  if (passwordLength < 8) {
    window.alert('Your password length selection is too short. Please select a length between 8 and 128 characters.');
    lengthSelection();
  }
  else if (passwordLength > 128) {
    window.alert('Your password length selection is too long. Please select a length between 8 and 128 characters.');
    lengthSelection();
  }
  else if (isNaN(passwordLength)) {
    window.alert('Please type only numbers and select a length between 8 and 128 characters.');
    lengthSelection();
  }
  else {
    //lengthSelection = passwordLength;
    console.log('Selected password length: ' + passwordLength);
  }
}

//Function to define parameters for the password
let typeCharacterSelection = function() {
  //Require upper case
  requireUpperCase = window.confirm('Do you require upper case letters?')
  if (requireUpperCase){
    //requireUpperCase = upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
    console.log('User requires upper case: ' + requireUpperCase);
    //numberCharacterTypes = numberCharacterTypes + 1;
  } else {
    console.log('User requires upper case: ' + requireUpperCase);
  }

  //Require lower case
  requireLowerCase = window.confirm('Do you require lower case letters?')
  if (requireLowerCase){
    //requireLowerCase = lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
    console.log('User requires lower case: ' + requireLowerCase);
    //numberCharacterTypes = numberCharacterTypes + 1;
  } else {
    console.log('User requires lower case: ' + requireLowerCase);
  }
      
  //Require numbers
  requireNumbers = window.confirm('Do you require numbers?')
  if (requireNumbers){
    //requireNumbers = numbers[Math.floor(Math.random()*(numbers.length))];
    console.log('User requires numbers: ' + requireNumbers);
    //numberCharacterTypes = numberCharacterTypes + 1;
  } else {
    console.log('User requires numbers: ' + requireNumbers);
  }

  //Require special characters
  requireSpecChar = window.confirm('Do you require special characters?')
  if (requireSpecChar){
    //requireSpecChar = specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
    console.log('User requires special characters: ' + requireSpecChar);
    //numberCharacterTypes = numberCharacterTypes + 1;
  } else {
    console.log('User requires special characters: ' + requireSpecChar);
  }
  
  selectionTypeChar = [requireUpperCase, requireLowerCase, requireNumbers, requireSpecChar];
  countTrueSelections = selectionTypeChar.filter(value => value === true).length;
  console.log(selectionTypeChar);
  console.log('Number of selected character types: ' + countTrueSelections);

  findTrueResponses = (element) => element === true;
  firstIndex = selectionTypeChar.findIndex(findTrueResponses) + 1;
  console.log(firstIndex);

  
  selectionTypeChar.forEach(function(value, index){
    if(value){
      allIndexes.push(index);
    }
  })
  console.log(allIndexes);
  //console.log('Number of character types selected: ' + numberCharacterTypes);



  if (countTrueSelections < 1){
    window.alert("You did not select any character type. Please select at least 1 character type.")
    typeCharacterSelection();
  }
}


//Function to generate the password
let generatePassword = function(){

  for (var i = 0; i < passwordLength; i++) {
    randomProbability = (Math.random());
    console.log(randomProbability);

    //Only one type of characters selected
    if (countTrueSelections === 1){
      if (requireUpperCase){
        password = password + upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
      }
      else if (requireLowerCase){
        password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
      }
      else if (requireNumbers) {
        password = password + numbers[Math.floor(Math.random()*(numbers.length))];
      }
      else if (requireSpecChar) {
        password = password + specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
      }
      console.log(password);
    }



    //Two types of characters selected

    // else if (countTrueSelections === 2) {
    //   for (var j = 0; j < countTrueSelections; j++){

    //   findTrueResponses = (element) => element === true;
    //   firstIndex = selectionTypeChar.findIndex(findTrueResponses) + 1;
    // }


    //   while (randomProbability < 1/countTrueSelections){
    //     if (requireUpperCase){
    //       password = password + upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
    //     }
    //     else if (requireLowerCase) {
    //       password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
    //     }
    //     else if (requireNumbers){
    //       password = password + numbers[Math.floor(Math.random()*(numbers.length))];
    //     }
    //   }
    //   while (randomProbability >= 1/countTrueSelections){
    //     if (requireLowerCase) {
    //       password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
    //     }
    //     else if (requireNumbers){
    //       password = password + numbers[Math.floor(Math.random()*(numbers.length))];
    //     }
    //     else if (requireSpecChar){
    //       password = password + specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
    //     }
    //   }
      
    //   if (requireUpperCase){

    //   }
    //   else if (requireLowerCase){
    //     lowerTwoSelected = 0.5;
    //   }
    //   else if (requireNumbers) {
    //     numbersTwoSelected = 0.5;
    //   }
    // }



    //Three types of characters selected












    //Four types of characters selected
    else if (countTrueSelections === 4) {
      //Selecting the type of character randomnly depending on the user's selected characters
      //For upper case it's between 0 and 0.25
      if (randomProbability < 0.25 && requireUpperCase){
        password = password + upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
      }
      //For lower case it's between 0.25 and 0.50
      else if (randomProbability >= 0.25 && randomProbability < 0.50 && requireLowerCase){
        password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
      }
      //For numbers it's between 0.50 and 0.75
      else if (randomProbability >= 0.50 && randomProbability < 0.75 && requireNumbers){
        password = password + numbers[Math.floor(Math.random()*(numbers.length))];
      }
      //For special characters it's between 0.75 and 0.99
      else if (randomProbability >= 0.75 && requireSpecChar){
        password = password + specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
      }
      console.log(password);
    }
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //Resetting variables
  passwordLength = 0;
  //numberCharacterTypes = 0;
  addCharacters = 0;
  password = '';
  passwordSelection = '';
  allIndexes = [];

  //Runnign the functions
  lengthSelection();              //WORKING
  typeCharacterSelection();       //WORKING

  var passwordSelection = generatePassword();                 //SOME BUGS
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordSelection;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);