document.getElementById("drink").addEventListener("change", function () {
  const drink = this.value;
  const drinkMessage = `Ви вибрали: ${drink}`;
  document.getElementById("drinkMessage").textContent = drinkMessage;
});

document.getElementById("dayButton").addEventListener("click", function () {
  const day = document.getElementById("dayInput").value.trim().toLowerCase();
  let dayMessage = "";

  switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п’ятниця":
      dayMessage = `${
        day.charAt(0).toUpperCase() + day.slice(1)
      } - робочий день.`;
      break;
    case "субота":
    case "неділя":
      dayMessage = `${
        day.charAt(0).toUpperCase() + day.slice(1)
      } - вихідний день.`;
      break;
    default:
      dayMessage = "Невірний день тижня.";
      break;
  }

  document.getElementById("dayMessage").textContent = dayMessage;
});

document.getElementById("seasonButton").addEventListener("click", function () {
  const month = parseInt(document.getElementById("monthInput").value);
  let seasonMessage = "";

  switch (month) {
    case 3:
    case 4:
    case 5:
      seasonMessage = "Це весна.";
      break;
    case 6:
    case 7:
    case 8:
      seasonMessage = "Це літо.";
      break;
    case 9:
    case 10:
    case 11:
      seasonMessage = "Це осінь.";
      break;
    case 12:
    case 1:
    case 2:
      seasonMessage = "Це зима.";
      break;
    default:
      seasonMessage = "Невірний номер місяця.";
      break;
  }

  document.getElementById("seasonMessage").textContent = seasonMessage;
});

document.getElementById("daysButton").addEventListener("click", function () {
  const month = parseInt(document.getElementById("daysInput").value);
  let daysMessage = "";

  switch (month) {
    case 2:
      daysMessage = "У лютому 28 або 29 днів (у високосний рік).";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      daysMessage = "У цьому місяці 30 днів.";
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysMessage = "У цьому місяці 31 день.";
      break;
    default:
      daysMessage = "Невірний номер місяця.";
      break;
  }

  document.getElementById("daysMessage").textContent = daysMessage;
});

document.getElementById("colorButton").addEventListener("click", function () {
  const color = document
    .getElementById("colorInput")
    .value.trim()
    .toLowerCase();
  let colorMessage = "";

  switch (color) {
    case "червоний":
      colorMessage = "Стоп!";
      break;
    case "зелений":
      colorMessage = "Йти!";
      break;
    case "жовтий":
      colorMessage = "Чекати!";
      break;
    default:
      colorMessage = "Невідомий колір.";
      break;
  }

  document.getElementById("colorMessage").textContent = colorMessage;
});

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let resultMessage = "";

    if (isNaN(num1) || isNaN(num2)) {
      resultMessage = "Введіть обидва числа.";
    } else {
      switch (operation) {
        case "+":
          resultMessage = `Результат: ${num1 + num2}`;
          break;
        case "-":
          resultMessage = `Результат: ${num1 - num2}`;
          break;
        case "*":
          resultMessage = `Результат: ${num1 * num2}`;
          break;
        case "/":
          if (num2 === 0) {
            resultMessage = "Помилка: ділення на нуль!";
          } else {
            resultMessage = `Результат: ${num1 / num2}`;
          }
          break;
        default:
          resultMessage = "Невідома операція.";
          break;
      }
    }

    document.getElementById("resultMessage").textContent = resultMessage;
  });
