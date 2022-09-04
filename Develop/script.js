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
var selectionTypeChar = [];
let allIndexes = [];
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
    console.log('Selected password length: ' + passwordLength);
  }
}

//Function to define parameters for the password
let typeCharacterSelection = function() {
  //Require upper case
  requireUpperCase = window.confirm('Do you require upper case letters?')
  if (requireUpperCase){
    console.log('User requires upper case: ' + requireUpperCase);
  } else {
    console.log('User requires upper case: ' + requireUpperCase);
  }

  //Require lower case
  requireLowerCase = window.confirm('Do you require lower case letters?')
  if (requireLowerCase){
    console.log('User requires lower case: ' + requireLowerCase);
  } else {
    console.log('User requires lower case: ' + requireLowerCase);
  }
      
  //Require numbers
  requireNumbers = window.confirm('Do you require numbers?')
  if (requireNumbers){
    console.log('User requires numbers: ' + requireNumbers);
  } else {
    console.log('User requires numbers: ' + requireNumbers);
  }

  //Require special characters
  requireSpecChar = window.confirm('Do you require special characters?')
  if (requireSpecChar){
    console.log('User requires special characters: ' + requireSpecChar);
  } else {
    console.log('User requires special characters: ' + requireSpecChar);
  }
  
  //Making array of booleans
  selectionTypeChar = [requireUpperCase, requireLowerCase, requireNumbers, requireSpecChar];
  console.log(selectionTypeChar);

  selectionTypeChar.forEach(function(value, index){
    if(value){
      allIndexes.push(index);
    }
  })
  console.log(allIndexes);
  console.log('Number of type of characters selected: ' + allIndexes.length);

  if (allIndexes.length < 1){
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
    if (allIndexes.length === 1){
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
    else if (allIndexes.length === 2) {
      if (randomProbability < 0.50) {
        if(allIndexes[0] === 0){
          password = password + upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
        }
        else if(allIndexes[0] === 1){
          password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
        }
        else if(allIndexes[0] === 2){
          password = password + numbers[Math.floor(Math.random()*(numbers.length))];
        }
        else if(allIndexes[0] === 3){
          password = password + specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
        }
        console.log(allIndexes[0]);
      }
      else if (randomProbability >= 0.50) {
        if(allIndexes[1] === 0){
          password = password + upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
        }
        else if(allIndexes[1] === 1){
          password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
        }
        else if(allIndexes[1] === 2){
          password = password + numbers[Math.floor(Math.random()*(numbers.length))];
        }
        else if(allIndexes[1] === 3){
          password = password + specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
        }
        console.log(allIndexes[1]);
      }
      console.log(password);
    }

    //Three types of characters selected
    else if (allIndexes.length === 3) {
      if (randomProbability < 1/3) {
        if(allIndexes[0] === 0){
          password = password + upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
        }
        else if(allIndexes[0] === 1){
          password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
        }
        else if(allIndexes[0] === 2){
          password = password + numbers[Math.floor(Math.random()*(numbers.length))];
        }
        else if(allIndexes[0] === 3){
          password = password + specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
        }
        console.log(allIndexes[0]);
      }
      else if (randomProbability >= 1/3 && randomProbability < 2/3) {
        if(allIndexes[1] === 0){
          password = password + upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
        }
        else if(allIndexes[1] === 1){
          password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
        }
        else if(allIndexes[1] === 2){
          password = password + numbers[Math.floor(Math.random()*(numbers.length))];
        }
        else if(allIndexes[1] === 3){
          password = password + specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
        }
        console.log(allIndexes[1]);
      }
      else if (randomProbability >= 2/3) {
        if(allIndexes[2] === 0){
          password = password + upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
        }
        else if(allIndexes[2] === 1){
          password = password + lowerCaseLetters[Math.floor(Math.random()*(lowerCaseLetters.length))];
        }
        else if(allIndexes[2] === 2){
          password = password + numbers[Math.floor(Math.random()*(numbers.length))];
        }
        else if(allIndexes[2] === 3){
          password = password + specialCharacters[Math.floor(Math.random()*(specialCharacters.length))];
        }
        console.log(allIndexes[2]);
      }
      console.log(password);
    }

    //Four types of characters selected
    else if (allIndexes.length === 4) {
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
  password = '';
  allIndexes = [];
  passwordSelection = '';

  //Runnign the functions
  lengthSelection();
  typeCharacterSelection();

  var passwordSelection = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordSelection;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);