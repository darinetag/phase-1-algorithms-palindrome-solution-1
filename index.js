 function reverseString(word) {
  //create an array from the input string
  //reverse the array
  //create a string from the reversed array
  //return the reversed string
    return word.split("").reverse().join("");

}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}



/* 
  reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
*/

/*
 the fuction isPalindrome returns either true or false. When the input string is a palindrom it returna true else it returns false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
