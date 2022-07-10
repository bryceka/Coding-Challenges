//Is the number given a perfect square 
//ie. is the square root  of the number an integer
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function(n){
  return (Math.sqrt(n)) % 1 == 0
}
