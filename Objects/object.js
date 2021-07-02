function getProductDetail() {
  const toy = {
    id: 123,
    title: "Barbie",
    inStock: true
  };
  return toy;
}

function getWeather(city) {
  return `It's currently ${city.value} degrees in ${city.name}`;
}

function incrementAge(person) {
  person.age += 1;
  return person;
}


function renderTableRow(details) {
  return `<tr>
        <td>${details.title}</td>
        <td>${details.value}g</td>
    </tr>`
}
