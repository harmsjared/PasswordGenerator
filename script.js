// Assignment Code
//  var generateBtn = document.querySelector("#generate");

 // Add event listener to generate button
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword);

// Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }

 // after clicking "generate password", you will be prompted with:
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be between 8 and 128.");
        
    var numbers = confirm("Do you want numbers in your password?");
  
    var lowerCases = confirm("Do you want lowercases in your password?");
  
    var upperCases = confirm("Do you want uppercases in your password?");
  
    var special = confirm("Do you want special characters in your password?");
  
    // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount = 8;

    // maximum count could be declared here but its output is never read, it would look like
    var maximumCount = 128;
  
  
    // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  
    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";
  
  
    // Generator functions**
    var functionArray = {
      getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      },
  
      getLowerCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      },
  
      getUpperCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      },
  
      getSpecialCharacters: function() {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      }
  
  };
  
    // Checks to make sure user selected ok for all and uses empty minimums from above
  
    if (numbers === true) {
      minimumNumbers = functionArray.getNumbers();
      minimumCount++;
  
    }
  
    if (lowerCases === true) {
      minimumLowerCases = functionArray.getLowerCases();
      minimumCount++;
  
    }
  
    if (upperCases === true) {
      minimumUpperCases = functionArray.getUpperCases();
      minimumCount++;
  
    }
  
    if (special === true) {
      minimumSpecialCharacters = functionArray.getSpecialCharacters();
      minimumCount++;
  
    }
  
    // empty string variable for the for loop below
    var randomPasswordGenerated = "";
  
    // loop getting random characters
    for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
      var randomNumberPicked = Math.floor(Math.random() * 8);
  
      randomPasswordGenerated += randomNumberPicked;
  
    }
  
    // to make sure characters are added to the password
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;
  
  
    return randomPasswordGenerated;
  
  }


// // generate random password
// function generate() {

//     // set password length/complexity
//     let complexity = document.getElementById(" ")

//     //possible password values
//     let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

//     let password = "";

//     //create for loop to choose password characters
//     for(var i = 0; i <= complexity; i++){
//         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//     }

//     // add password to textbox/display area
//     document.getElementById(" ").value = password;
// }