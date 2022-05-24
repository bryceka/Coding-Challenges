//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript

function filter_list(l) {
  
  //Determine if index is int or str
  //filter out str
  return l.filter(index => (typeof index == 'number'))
    
}
