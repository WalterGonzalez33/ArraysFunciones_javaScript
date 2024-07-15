function whatLettersIs(phrase) {
  let upperCaseOrLowerCase = "";
  let lettersLowerCase = 0;
  let lettersUpperCase = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      continue;
    }
    if (phrase[i] === phrase[i].toLowerCase()) {
      upperCaseOrLowerCase = "todas las letras son minúsculas";
      lettersLowerCase++;
      continue;
    }
    if (phrase[i] === phrase[i].toUpperCase()) {
      upperCaseOrLowerCase = "todas las letras son mayúsculas";
      lettersUpperCase++;
      continue;
    }
  }

  if (lettersLowerCase > 0 && lettersUpperCase > 0) {
    upperCaseOrLowerCase = `el texto tiene mayúsculas y minúsculas`;
  }

  return upperCaseOrLowerCase;
}

document.write(whatLettersIs("texto De prueba"));
