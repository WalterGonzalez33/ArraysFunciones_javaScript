function rollDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function handlerAverageDices(
  turnsDices,
  funRollDice,
  cantDices = 1,
  maxNumberDice = 6,
  minNumberDice = 1
) {
  maxNumberDice += 1;
  const minPossibleResult = minNumberDice * cantDices;
  let resultDices = [];
  for (let i = 0; i <= (maxNumberDice - 1) * cantDices; i++) {
    resultDices.push(0);
  }

  for (let i = 0; i < turnsDices; i++) {
    let resultDicesThisRound = 0;
    for (let j = 0; j < cantDices; j++) {
      resultDicesThisRound += funRollDice(minNumberDice, maxNumberDice);
    }
    resultDices[resultDicesThisRound]++;
  }

  return [minPossibleResult, resultDices];
}

function showTableDices(
  handlerAverageDices,
  turnsDices = 1,
  cantDices = 1,
  maxNumberDice = 6,
  minNumberDice = 1
) {
  const [minResultPossible, resultDices] = handlerAverageDices(
    turnsDices,
    rollDice,
    cantDices,
    maxNumberDice,
    minNumberDice
  );

  document.write(`<table border>`);
  document.write(`<tr>
                        <th> Suma 🎲🎲</th>
                        <th> Apariciones 📃</th>
                    </tr>`);
  for (let i = minResultPossible; i < resultDices.length; i++) {
    document.write(`<tr>
                            <td>${i}</td>
                            <td>${resultDices[i]}</td>
                        </tr>`);
  }
  document.write(`</table>`);
}

showTableDices(handlerAverageDices, 50, 2);
showTableDices(handlerAverageDices, 50);
