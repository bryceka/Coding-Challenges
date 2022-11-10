//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript
//Taking in a string an finding out if it contains very letter of the alphabet at least once (called a pangram)
//Return true if the string meets these conditions or false if it does not

function isPangram(string){
  // Use an object to store the alphabet with each key's value set to false.
  // Convert the given string to an array
  // Check if each key(letter) in the alphabet object is included in the new array
  // If the current letter of the object is in included in the array, set its key value to true
  // Keep a count of how many unique letters have been included/set to true
  // If the count of unique letters is 26 than return true, else return false
  
  
  let alphabet = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false
  }
  
  let alphaCount = 0
  
  let arr = string.toLowerCase().split('')

  for (let prop in alphabet) {
    if (arr.includes(prop)){
      if (alphabet[prop] === false) alphaCount++
      alphabet[prop] = true
     }
  }
  return alphaCount === 26 ? true : false
  
}
