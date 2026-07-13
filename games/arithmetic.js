function startArithmetic() {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateTask() {
        let operation = getRandomNumber(0, 3);

        let num1, num2, operationSymbol, correctAnswer;

        switch (operation) {
            case 0:
                num1 = getRandomNumber(1, 20);
                num2 = getRandomNumber(1, 20);
                operationSymbol = '+';
                correctAnswer = num1 + num2;
                break;

            case 1:
                num1 = getRandomNumber(1, 20);
                num2 = getRandomNumber(1, num1);
                correctAnswer = num1 - num2;
                break;

            case 2:
                num1 = getRandomNumber(1, 10);
                num2 = getRandomNumber(1, 10);
                operationSymbol = '*';
                correctAnswer = num1 * num2;
                break;

            case 3:
                num2 = getRandomNumber(1, 10);
                let result = getRandomNumber(1, 10);
                num1 = num2 * result;
                operationSymbol = '/';
                correctAnswer = result;
                break;
        }

        return {
            question: num1 + ' ' + operationSymbol + ' ' + num2 + ' = ?',
            correctAnswer: correctAnswer
        };
    }

    let questionsCount = 5;

    alert("Решите несколько примеров на сложение, вычитание, умножение и деление!");

    for (let i = 0; i < questionsCount; i++) {
        let task = generateTask();

        let userInput = prompt("Пример " + (i + 1) + " из " + questionsCount + ":\n" + task.question);

        if (userInput === null) {
            alert("Вы вышли из игры!");
            return;
        }

        let userAnswer = Number(userInput.trim());

        if (isNaN(userAnswer)) {
            alert("Нужно ввести число!");
            i--;
            continue;
        }

        if (userAnswer === task.correctAnswer) {
            alert("Правильно!");
        } else {
            alert("Неправильно! Правильный ответ: " + task.correctAnswer);
        }
    }

    alert("Игра окончена!");

}


