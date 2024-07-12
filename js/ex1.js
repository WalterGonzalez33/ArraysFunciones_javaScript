const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

document.write(`<h1>Lista de Meses</h1>
    <ul>`);
for (let i = 0; i < months.length; i++) {
  document.write(`<li>${months[i]}</li>`);
}
document.write(`</ul>`);
