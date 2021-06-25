function getNumberOfChars(name) {
  return name.length;
}

function getFirstChar(name) {
  return name[0];
}

function getLastChar(name) {
  return name[name.length - 1];
}

function getLower(name) {
  return name.toLowerCase();
}

function getUpper(name) {
  return name.toUpperCase();
}

function getCapitalized(name) {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
}
