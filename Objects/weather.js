function getCountry(data) {
  return data.location.country;
}

function getIcon(data) {
  return data.current.weather_icons[0];
}

function getTemperature(data) {
  return data.current.temperature;
}
