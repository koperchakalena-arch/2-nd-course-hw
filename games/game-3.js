// Игра "Простая арифметика"
// Описание

// Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
// Запрашивает у пользователя ответ.
// Проверяет правильность ответа и выводит результат.
// Последовательность действий
//  Генерация задач:
// Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
// Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".
//  Запрос ответа:
// Запрашивайте у пользователя ответ на сгенерированную задачу.
// Например, используя функцию 
// prompt()
// .
//  Проверка и вывод результата:
// Проверьте правильность ответа пользователя.
// Выведите результат проверки: верный ответ или ошибка.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
    let num1 = getRandomNumber(1, 20);
    let num2 = getRandomNumber(1, 20);
    return {
        question: num1 + ' + ' + num2 + ' = ?',
        correctAnswer: num1 + num2
    };
}

let total = 5;
alert("Решите " + total + " примеров на сложение!");

for (let i = 0; i < total; i++) {
    let task = generateTask();
    let userInput = prompt("Пример " + (i + 1) + ":\n" + task.question);
    
    if (userInput === null) {
        alert("До свидания!");
        break;
    }
    
    let userAnswer = Number(userInput);
    
    if (isNaN(userAnswer)) {
        alert("Это не число!");
        continue;
    }
    
    if (userAnswer === task.correctAnswer) {
        alert("Правильно!");
    } else {
        alert("Неправильно! Ответ: " + task.correctAnswer);
    }
}

alert("Игра окончена!");