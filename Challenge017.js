//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript
//Take in Array of names of likes
//return string with Who liked it with a number as placeholder for names length beyond 4

function likes(names) {
  
  //start with return with array length of 0, then 1, then, 2, then 3, then 4+
  //Use template literal for each return
  
  if (names.length === 0){
    return 'no one likes this'
  } else if(names.length === 1){
    return `${names[0]} likes this`
  } else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  
}



console.log(likes([]), 'no one likes this')
console.log(likes(['Max', 'John', 'Mark']), "Max, John and Mark like this")
console.log(likes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this")
