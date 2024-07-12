function numberIsEven(number) {
  if (number % 2 === 0) {
    return `el numero es par`;
  } else {
    return `el numero no es par`;
  }
}

document.write(numberIsEven(8));
