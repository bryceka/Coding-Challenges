  //https://www.codewars.com/kata/62c93765cef6f10030dfa92b/javascript

  //Take in starting shelf and ending shelf
  //Return minimum steps required from start to finish
  //Cat can go up either 1 or 3 steps at a time
  
  //console.log(solution(1,5)) -> 2
  //console.log(solution(1,8)) -> 3
  
  //Calculate difference between start and finish
  //Modulus the difference by 3 to find remainder(extra steps)
  //divide (difference - remainder) by 3 if modulus gives remainder, then add on remainder
  //Else divide difference by 3
  
  //add in options for 0 or 2 steps
  

function solution(start, finish) 
{
  let minSteps = 0
  let diff = finish - start
  
  if(diff % 3 === 1){
    minSteps += (diff - 1)/3
    minSteps += 1
  } else if(diff === 2){
    return 2
  } else if(diff === 0){
    return 0
  } else if (diff % 3 === 2){
    minSteps += (diff - 2)/3
    minSteps += 2
  } else {
    minSteps += diff/3
  }
  
  return Math.ceil(minSteps)
}
