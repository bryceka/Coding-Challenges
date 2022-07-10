//Write function heron which calculates the area of a triangle with sides a, b, and c
//https://www.codewars.com/kata/57aa218e72292d98d500240f/javascript

function heron(a, b, c) {
  //calculate s
  let s = (a + b + c) / 2
  
  //heron's formula
  return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
