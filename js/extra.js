const initialBalance = 1000;
const maxDeposit = 100000;
const accountMovements = [];
let balance = initialBalance;

// función para ver el saldo actual de la cuenta
function checkBalance() {
  accountMovements.push(`Consulta de saldo: \$${balance},00`);
  alert(`💳 TU SALDO ACTUAL ES: $${balance},00 💳`);
}

// función para mostrar los últimos movimientos de la cuenta
function showAccountMovements() {
  let messageAccountMovements = "";
  let maxMessageMovements = 0;

  for (let i = accountMovements.length; i > 0; i--) {
    messageAccountMovements += `--> ${accountMovements[i - 1]}\n`;
    if (maxMessageMovements === 6) {
      messageAccountMovements += `...\n`;
      break;
    }
    maxMessageMovements++;
  }

  alert(`📊 ÚLTIMOS MOVIMIENTOS DE LA CUENTA 📊\n\n` + messageAccountMovements);
}

// función para depositar
function moneyDeposit() {
  let checkDeposit = null;
  let deposit = 0;

  do {
    const depositUser = prompt(
      "💵 INGRESE EL MONTO A DEPOSITAR 💵\n\n" +
        "(Si quieres volver atrás, ingrese 'SALIR')"
    );

    if (depositUser === null || depositUser === "") {
      alert(`ingrese un monto por favor`);
      continue;
    }
    if (depositUser.toLowerCase() === "salir") {
      checkDeposit = false;
      break;
    }

    if (parseFloat(depositUser) > maxDeposit) {
      alert(`Ingrese un monto menor para que no se entere el AFIP 😉`);
      continue;
    }

    checkDeposit = checkIngreseUser(depositUser);
    deposit = parseFloat(depositUser);
  } while (!checkDeposit);

  if (checkDeposit) {
    balance += deposit;
    accountMovements.push(`Depósito: +\$${deposit},00`);
    alert(`💰 ¡DEPÓSITO CONCRETADO CON ÉXITO! 💰`);
  }
}

// función para hacer un retiro
function moneyExtraction() {
  let checkExtraction = null;
  let extraction = 0;

  do {
    const extractionUser = prompt(
      "💵 INGRESE EL MONTO A EXTRAER 💵\n\n" +
        "(Si quieres volver atrás, ingrese 'SALIR')"
    );

    if (extractionUser === null || extractionUser === "") {
      alert(`ingrese un monto por favor`);
      continue;
    }
    if (extractionUser.toLowerCase() === "salir") {
      checkExtraction = false;
      break;
    }

    if (parseFloat(extractionUser) > balance) {
      alert(
        "⚠️ ¡SALDO INSUFICIENTE! ⚠️\n\n" +
          "No tienes suficientes fondos para realizar esta operación."
      );
      continue;
    }

    checkExtraction = checkIngreseUser(extractionUser);
    extraction = parseFloat(extractionUser);
  } while (!checkExtraction);

  if (checkExtraction) {
    balance -= extraction;
    accountMovements.push(`Retiro: -\$${extraction},00`);
    alert(`💰 ¡EXTRACCIÓN CONCRETADO CON ÉXITO! 💰`);
  }
}

// verifica que el monto ingresado por el usuario sea correcto
function checkIngreseUser(amount) {
  amount = parseFloat(amount);

  if (Number.isNaN(amount)) {
    alert(`ingrese unicamente números por favor!!`);
    return false;
  }
  if (amount <= 0) {
    alert(`no puedes ingresar un monto menor o igual que 0`);
    return false;
  }

  return true;
}

// función que muestra las opciones para el usuario
function bankInterface() {
  let activeInterface = true;
  alert(`🌟======= BIENVENID@ A TU BANCO FAVORITO!! =======🌟`);

  do {
    const optionUser = parseInt(
      prompt(
        "======== MENU ========\n\n" +
          "1️⃣ Ver saldo de la cuenta\n" +
          "2️⃣ Ingresar dinero\n" +
          "3️⃣ Retirar dinero\n" +
          "4️⃣ Ver últimos movimientos\n" +
          "5️⃣ Salir\n\n" +
          "======================="
      )
    );

    if (Number.isNaN(optionUser)) {
      alert(`SOLO SE PERMITEN NÚMEROS (si quieres salir ingrese el numero 5)`);
      continue;
    }

    switch (optionUser) {
      case 1:
        checkBalance();
        break;
      case 2:
        moneyDeposit();
        break;
      case 3:
        moneyExtraction();
        break;
      case 4:
        showAccountMovements();
        break;
      case 5:
        activeInterface = false;
        break;
      default:
        alert(`opción incorrecta, ingrese un opción valida`);
        break;
    }
  } while (activeInterface);

  alert(
    "🙏 GRACIAS POR USAR NUESTRO SERVICIO 🙏\n\n" + "🌟 ¡Vuelve pronto! 🌟"
  );
}

bankInterface();
