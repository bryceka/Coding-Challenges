//Reverse each word in the string
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript

function reverseWords(str) {
  //Splits the sentence by spaces giving an array of the words
  //Then splits each word and reverses the word, then joins the word back together
  //Then joins all words back together with spaces and returns the result
  
  return str.split(' ').map(index => index.split('').reverse().join('')).join(' ')
}
