//Convert DNA strings to RNA strings
//https://www.codewars.com/kata/5556282156230d0e5e000089/javascript

function DNAtoRNA(dna) {
  let rna = ''
  for( let i = 0; i < dna.length; i++){
    if (dna[i] == 'T'){
      rna += 'U'
    } else {
      rna += dna[i]
    }
  }
  return rna
}
