// Return an array containing the same strings, ordered from shortest to longest

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
};
