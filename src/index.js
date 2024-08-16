module.exports = function reverse (number) {
  const str = number.toString();

  // Reverse the string
  const reversedStr = str.split('').reverse().join('');

  // Convert the reversed string back to a number
  const reversedNumber = parseInt(reversedStr, 10);

  // Return the reversed number
  return reversedNumber;
}
