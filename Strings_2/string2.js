const getEmail = email => email.trim();

const getMessage = message => {
  if (message.endsWith(".")) {
    return message;
  }
  return message + ".";
}


const getUnit = text => {
  if (text.includes("Celsius")) {
    return "°C";
  } else if (text.includes("Fahrenheit")) {
    return "°F";
  }
  return "N/A";

}

const getSlug = name => {
  // start by lower casing the string
  let result = name.toLowerCase();
  // then get the first 15 characters
  result = result.substring(0, 15);
  // convert all the space characters to dashes
  result = result.replaceAll(" ", "-");
  // return result
  return result;

  //alternative solution
  return name.toLowerCase().replaceAll(" ", "-").substring(0, 15);

}

const getCountTodos = todos => {
  let arrTodos = todos.split(",");
  return arrTodos.length;

  //alternative solutions
  return todos.split(",").length;

}
