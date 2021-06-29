function getVotersCount(ages) {
  let sum = 0;
  ages.forEach(function(age) {
    if (age > 17) {
      sum++;
    }
  });
  return sum;

}

// return ages.filter(function(age) {
  return age >= 18;
}).length
