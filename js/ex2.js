const cities = [];
const secondCity = "Barcelona";
const cityEnd = "Paris";

do {
  const city = prompt(`ingrese una ciudad: `);
  cities.push(city);
} while (confirm(`quieres ingresar otra ciudad?`));

function showData(cities, secondCity = "Barcelona", cityEnd = "Paris") {
  if (cities.length === 0 || cities[0] === null) {
    document.write(`cities list is empty`);
    return;
  }

  document.write(
    `<h5>El arreglo de ciudades tiene ${cities.length} elementos</h5>`
  );
  document.write(`<ul>`);
  document.write(`<li>Elemento en 1er posición: ${cities[0]}</li>`);
  if (cities.length > 3) {
    document.write(`<li>Elemento en 3er posición: ${cities[2]}</li>`);
  }
  document.write(
    `<li>Elemento en ultima posición: ${cities[cities.length - 1]}</li>`
  );
  document.write(`<br>`);
  document.write(`<li>Elemento añadido en ultima posición: ${cityEnd}</li>`);
  document.write(`</ul>`);
  document.write(`<br>`);
  cities.splice(1, 0, secondCity);
  cities.push(cityEnd);
  document.write(`<h1>Arreglo de ciudades</h1>
        <ul>`);
  for (let i = 0; i < cities.length; i++) {
    document.write(`<li>Elemento: ${cities[i]}</li>`);
  }
  document.write(`</ul>`);
}

showData(cities, secondCity, cityEnd);
