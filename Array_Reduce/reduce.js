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

const getLocationString = location => {
  return const[lat, lng] = location;

}

const getFullName = user => {
  const [first, last] = user;
  return `${first ${last}`;
}

const getApps = (apps1, apps2) => {

}
