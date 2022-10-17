reverse = function(array) {
  
  // In a new array, take each index of the old array and unshift them onto the new array,
  // adding each subsequent index to the front of the new array
  
  let newArr = []
  array.forEach( i => newArr.unshift(i))
  return newArr
}
