// 1. Вибір напою з випадаючого списку
var drink = prompt('Виберіть напій: 1 - Кава, 2 - Чай, 3 - Сік');
var drinkMessage = '';

switch(drink) {
    case '1':
        drinkMessage = 'Ви вибрали Кава';
        break;
    case '2':
        drinkMessage = 'Ви вибрали Чай';
        break;
    case '3':
        drinkMessage = 'Ви вибрали Сік';
        break;
    default:
        drinkMessage = 'Невірний вибір';
}

alert(drinkMessage);

// 2. Перевірка, чи введений рядок є днем тижня
var day = prompt('Введіть день тижня:');
var dayMessage = '';

switch(day.toLowerCase()) {
    case 'понеділок':
    case 'вівторок':
    case 'середа':
    case 'четвер':
    case 'п’ятниця':
        dayMessage = 'Це робочий день';
        break;
    case 'субота':
    case 'неділя':
        dayMessage = 'Це вихідний день';
        break;
    default:
        dayMessage = 'Це не день тижня';
}

alert(dayMessage);

// 3. Визначення пори року за номером місяця
var month = parseInt(prompt('Введіть номер місяця (1-12):'));
var seasonMessage = '';

switch(month) {
    case 12:
    case 1:
    case 2:
        seasonMessage = 'Це зима';
        break;
    case 3:
    case 4:
    case 5:
        seasonMessage = 'Це весна';
        break;
    case 6:
    case 7:
    case 8:
        seasonMessage = 'Це літо';
        break;
    case 9:
    case 10:
    case 11:
        seasonMessage = 'Це осінь';
        break;
    default:
        seasonMessage = 'Невірний номер місяця';
}

alert(seasonMessage);

// 4. Визначення кількості днів у місяці за його номером
var monthDays = parseInt(prompt('Введіть номер місяця (1-12) для визначення кількості днів:'));
var daysMessage = '';

switch(monthDays) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysMessage = 'Цей місяць має 31 день';
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysMessage = 'Цей місяць має 30 днів';
        break;
    case 2:
        daysMessage = 'Цей місяць має 28 або 29 днів';
        break;
    default:
        daysMessage = 'Невірний номер місяця';
}

alert(daysMessage);

// 5. Визначення дії за кольором
var color = prompt('Введіть назву кольору (червоний, зелений, жовтий):').toLowerCase();
var colorMessage = '';

switch(color) {
    case 'червоний':
        colorMessage = 'Стоп';
        break;
    case 'зелений':
        colorMessage = 'Йти';
        break;
    case 'жовтий':
        colorMessage = 'Чекати';
        break;
    default:
        colorMessage = 'Невідомий колір';
}

alert(colorMessage);

// 6. Виконання математичної операції між двома числами
var num1 = parseFloat(prompt('Введіть перше число:'));
var num2 = parseFloat(prompt('Введіть друге число:'));
var operation = prompt('Виберіть операцію: +, -, *, /');
var resultMessage = '';

switch(operation) {
    case '+':
        resultMessage = 'Результат: ' + (num1 + num2);
        break;
    case '-':
        resultMessage = 'Результат: ' + (num1 - num2);
        break;
    case '*':
        resultMessage = 'Результат: ' + (num1 * num2);
        break;
    case '/':
        if (num2 !== 0) {
            resultMessage = 'Результат: ' + (num1 / num2);
        } else {
            resultMessage = 'Помилка: ділення на нуль неможливе';
        }
        break;
    default:
        resultMessage = 'Невідома операція';
}

alert(resultMessage);
