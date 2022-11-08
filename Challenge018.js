//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript

//Taking in an array of strings and k the number of strings to combine
//Return the combined k strings that have the greatest length

function longestConsec(strarr, k) {
    // Take the first k indexes in the array and add their length together
    // Take the second k indexes and add their length together
    // Do this until end of array is reached
    // Return only the first combined strings with the max length
  
    // Account for k of 0 and under
  
  let maxSubStr = ''
  let maxLength = 0
  
  if(k <= 0) return maxSubStr
  
  for (let i = 0; i + k <= strarr.length; i++){
    let substr = strarr.slice(i , i + k).join('')
    if (substr.length > maxLength){
      maxLength = substr.length
      maxSubStr = substr
    }
  }
  return maxSubStr
}
  
  
