function getPositiveTemperatures(temperatures) {
 let newTemp = temperatures.filter(function(temperature) {
  return temperature > 0;

  });
  return newTemp;
}

function getFreezingTemperatures(temperatures) {
  return temperatures.filter(function(temperature) {
    return temperature < 0;
  });
}

function getYears(years, searchYear) {
  return years.find(function(year) {
    return year === searchYear;
  });
}


function getOddYears(years) {
  return years.filter(function(year) {
    return year % 2 != 0;
  });
}

function isAppUsed(apps, app) {
  return apps.includes(app);
}


function getStringSizes(strings) {
  return strings.map(function(string) {
    return string.length;
  })
}
