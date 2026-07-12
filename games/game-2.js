// Создайте игру, в которой пользователь пытается угадать случайное число от 1 до 100.

// Требования:

// Сгенерируйте случайное число от 1 до 100.
// Предложите пользователю угадать это число.
// Дайте подсказки: больше или меньше загаданное число.
// Завершите игру, когда пользователь угадает число.
// Для реализации случайного числа воспользуйтесь 
// Math.random()

let secretNumber = Math.floor(Math.random() * 100) + 1;
let isGuessed = false;

alert("Попробуйте угадать число от 1 до 100!");

while (!isGuessed) {
    let userInput = prompt("Введите вашу догадку (число от 1 до 100):");

    if (userInput === null) {
        alert("Вы ничего не ввели! Загаданное число было: " + secretNumber);
        break;
    }

    let userNumber = Number(userInput.trim());

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        alert("Введите ЧИСЛО от 1 до 100");
        continue;
    }

    if (userNumber === secretNumber) {
        isGuessed = true;
        alert("Вы угадали: " + secretNumber + "!");
    } else if (userNumber < secretNumber) {
        alert("Загаданное число БОЛЬШЕ " + userNumber);
    } else {
        alert("Загаданное число МЕНЬШЕ " + userNumber);
    }
}