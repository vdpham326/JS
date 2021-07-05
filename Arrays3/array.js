const renderTableRows = rows => {
  return rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("");
}

const getDropDown = countries => {
  return `<option value="">Please select</option>
        ${countries.map(country => `<option value="${country.toLowerCase()}">${country}</option>`).join("")}`;

};

const shouldAdjustGrades = grades => {
  return grades.some(grade => grade < 10);
}

const shouldCancelExam = grades => {
  return grades.every(grade => grade >= 18);
}


const resetApps = apps => {
  return apps.length = 0;
}

const removeFirstApp = apps => {
  apps.splice(0, 1);
  return apps;
}

const removeSecondApp = apps => {
  apps.splice(1, 1);
  return apps;
};
