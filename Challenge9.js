//Reverse a string
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/javascript

function solution(str){
    let newStr =''
    for (let i = str.length-1; i >= 0; i--){
      newStr += str[i]
    }
    return newStr
}
