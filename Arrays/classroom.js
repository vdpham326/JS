function getNumberOfGrades(grades) {
  return grades.length;
}

function getSumGrades(grades) {
  let sum = 0;
  grades.forEach(function(grade) {
    sum += grade;
  })
  return sum;
}

function getAverageValue(grades) {
  let sum = getSumGrades(grades);
  return sum / grades.length;
}
function getPassingGrades(grades) {
  return grades.filter(function(grade) {
    return grade >= 10;
  })
}

function getFailingGrades(grades) {
  return grades.filter(function(grade){
    return grade <= 9;
  })
}

function getRaisedGrades(grade) {
  return grades.map(function(grade) {
    if (grade + 1 > 20) {
      return 20;
    }
    return grade + 1;
  })
}
