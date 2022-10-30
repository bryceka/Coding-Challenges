//Find the integer in an array that appears an odd number of times, there will only be one
// https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

function findOdd(A) {
  
  let obj = []
  
  A.forEach( int =>
    obj[int] ? obj[int]++ : obj[int] = 1
  )
  
  for(let prop in obj){
    if(obj[prop] % 2 !== 0) return Number(prop)
  }
  
}
