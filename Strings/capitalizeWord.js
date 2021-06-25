
function capitalize(word) {
  word = word.toLowerCase();
  const firstLetter = word[0].toUpperCase();

  return firstLetter + word.substring(1);
  //another solution
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

console.log(capitalize("ALEX"));
console.log(capitalize("chARLie"));
