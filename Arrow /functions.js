function sum(a = 0, b = 0) {
  return a + b;
}

const triple = value => {
  return value * 3;
}

const sum = (a = 0, b = 0) => {
  return a + b;
}

const sumGrades = grades => {
  let sum = 0;
  grades.forEach(grade => {
    sum += grade;
  });
  return sum;
}


const getPositiveTemperatures = (temperatures) => {
  return temperatures.filter(temp => {
    if (temp > 0) {
      return temp;
    }
  })
}
