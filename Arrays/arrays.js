function getEmptyArray() {
  return [];
}

function getNumberOfElements(elements) {
  return elements.length;
}

function useCalculator(apps) {
  apps.push("Calculator");
  return apps;
}

function useApp(apps, app) {
  apps.push(app);
  return apps;
}

function loopThroughElements(elements) {
  elements.forEach(function(element) {
    console.log(element);
  });
}

function sumGrades(grades) {
  let sum = 0;
  grades.forEach(function(grade) {
    sum += grade;
  });
  return sum;
}

function sumPositiveNumbers(numbers) {
  let sum = 0;

  numbers.forEach(function(number) {
    if (number >= 0) {
      sum += number;
    }
  });

  return sum;
}

function sumOddNumbers(numbers) {
  let sum = 0;

  numbers.forEach(function(number) {
    if (number % 2 != 0) {
      sum += number;
    }
  });

  return sum;
}


function getDropdown(countries) {
  let html = `<option value="">Please select</option>`;
  countries.forEach(function (country) {
    html += `<option value="${country.toLowerCase()}">${country}</option>`;
  });
  return html;
}
