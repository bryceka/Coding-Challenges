//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and 
//moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population
//greater or equal to p = 1200 inhabitants?

//Parameters:  p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

//the function nb_year should return n number of entire years needed to get a population greater or equal to p.

//https://www.codewars.com/kata/563b662a59afc2b5120000c6/javascript

function nbYear(p0, percent, aug, p) {
    let pop = p0
    let i = 0
    while(pop < p){
      pop += (pop * (percent/100)) + aug
      i++
    }
    return i
}