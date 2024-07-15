const multiplyingUser = parseInt(
  prompt(`que tabla de multiplicar quieres ver?`)
);

function multiplicationTable(multiplying, maxMultiplier = 10) {
  const resultMultiplication = [];
  for (let i = 1; i <= maxMultiplier; i++) {
    resultMultiplication.push(multiplying * i);
  }
  return resultMultiplication;
}

function showMultiplicationTable(table, multiplying) {
  document.write(`<table border>`);
  document.write(`<tr>
                          <th> Multiplicación 🧮</th>
                          <th> Resultados 📃</th>
                      </tr>`);
  for (let i = 0; i < table.length; i++) {
    document.write(`<tr>
                              <td>${multiplying} X ${i + 1}</td>
                              <td>${table[i]}</td>
                          </tr>`);
  }
  document.write(`</table>`);
}

const table = multiplicationTable(multiplyingUser);

showMultiplicationTable(table, multiplyingUser);
