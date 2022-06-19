//Count number of divisors for number n
//https://www.codewars.com/kata/542c0f198e077084c0000c2e/javascript

function getDivisorsCnt(n) {
    divisors = []
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisors.push(i)
        }
    }
    return divisors.length
}
