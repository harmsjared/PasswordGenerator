// declaring my variables
var length,charType,numbers,lowerCases,upperCases,special

// declaring my constant
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword);

// Write password to the #password input
 function writePassword() {
    length = parseInt(prompt("How many characters will your password be? Enter a number between 8 and 128"));
        if (length >= 8 && length <= 128) {
            //ask for character type
            // prompts - selecting which type of characters to include
            numbers = confirm("Do you want numbers in your password?");
  
            lowerCases = confirm("Do you want lowercases in your password?");
          
            upperCases = confirm("Do you want uppercases in your password?");
          
            special = confirm("Do you want special characters in your password?");
        }
        else {alert("Please enter an integer between 8 and 128.")};


   var password = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = '';
  if(lowerCases) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  } 
  if(upperCases) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  if(numbers) {
    charSet += "0123456789";
  } 
  if(special) {
    charSet += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  // alerts the user to select atleast 1 character set from above
  else {alert("Please select no less than 1 type of character set.")}

  console.log(charSet);
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(retVal);
  return retVal;
}