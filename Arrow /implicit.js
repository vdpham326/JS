const triple = value => value * 3;

const multiply = (a, b) => a * b;

const getpositiveTemperatures = temperatures => {
  return temperatures.filter(temp => {
    return temp > 0;
  });
}

const getFreezingTemperatures = temperatures => {
  return temperatures.filter(temp => temp < 0);
}

const getYear = (years, SearchYear) => {
  return years.find(year => year === searchYear);
}


const getStringSizes = strings => {
  return strings.map(string => string.length);
}

const getNumberOfGrades = grades => grades.length;

const getSumGrades = grades => {
  let sum = 0;
  grades.forEach(grade => sum += grade)
  return sum;
}

const getAverageValue = grades => getSumGrades(grades) / grades.length;

const getPassingGrades = grades => {
  return grades.filter(grade => grade >= 10);
}

const getFailingGrades = grades => {
  return grades.filter(grade => grade <= 9);
}

const getRaisedGrades = grades => {
  return grades.map(grade => {
    if (grade + 1 > 20) {
      return 20;
    }
    return grade + 1;
  });
}
