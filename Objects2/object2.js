const getCourseDetail = (course, detail) => {
  return `The course ${detail} is ${course[detail]}`;
}

const getCountProperties = course => {
  return Object.keys(course).length;
}

const getUpperCasedProperties = course => {
  return Object.keys(course).map(key => key.toUpperCase());
}

const logValues = course => {
  Object.keys(course).forEach(key => {
    console.log(course[key]);
  })
}
