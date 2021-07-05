const sum = grades.reduce((total, current) => {
    return total + current;
  }, 0);

const sumNumbers = numbers => {
  return numbers.reduce((total, current) => {
    return total + current;
  }, 0);
}


const multiplyNumbers = numbers => {
  return numbers.reduce((total, current) => {
    return total * current;
  }, 1)
}
