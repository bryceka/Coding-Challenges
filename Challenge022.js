//https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript
//Title case a string by capitalizing the first letter of each word while the given minor words will be lowercase
//First word will always be capitalized and casing of minorWords is irrelevant

// add minor words to an object
// iterate through words of title string if iteration does not exist in object, capitalize
// first index to uppercase
// return new title string

function titleCase(title, minorWords) {


    if (!minorWords && !title) return title

    //fill object of minor words for reference to reduce time complexity storing as
    //lowercase to avoid casing complications
    let obj = []
    if (minorWords) {
        minorWords.split(' ').forEach(x => obj[x.toLowerCase()] = x.toLowerCase())
    }

    let splitTitle = title.split(' ')

    //if a title word is in the minorWords object (obj), then it is left alone, otherwise 
    //first letter is capitalized
    splitTitle = splitTitle.map(x => {
        let y = x.toLowerCase()
        if (!obj[y]) return x[0].toUpperCase() + y.slice(1)
        if (obj[y]) return y
    })

    //Capitalizes first letter regardless of minorWords
    splitTitle[0] = splitTitle[0][0].toUpperCase() + splitTitle[0].slice(1)


    return splitTitle.join(' ')
}
