function startRPS() {
    // 1. Массив с возможными вариантами
    const options = ["камень", "ножницы", "бумага"];
    
    // 2. Запрашиваем выбор пользователя
    let userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага");
    
    // 3. Проверяем, не нажал ли пользователь "Отмена"
    if (userChoice === null) {
        alert("Вы вышли из игры. До свидания!");
        return;
    }
    
    // 4. Приводим ввод к нижнему регистру и убираем пробелы
    userChoice = userChoice.trim().toLowerCase();
    
    // 5. Проверяем, что пользователь ввел корректный вариант
    if (!options.includes(userChoice)) {
        alert("Введите 'камень', 'ножницы' или 'бумага'.");
        return startGame(); // Перезапускаем игру
    }
    
    // 6. Генерируем случайный выбор компьютера
    let randomIndex = Math.floor(Math.random() * options.length);
    let computerChoice = options[randomIndex];
    
    // 7. Определяем победителя
    let result;
    
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }
    
    // 8. Выводим результат
    alert(
        "Ваш выбор: " + userChoice + "\n" +
        "Выбор компьютера: " + computerChoice + "\n\n" +
        "Результат: " + result
    );
    
    // 9. Спрашиваем, хочет ли пользователь сыграть еще
    let playAgain = confirm("Хотите сыграть еще раз?");
    if (playAgain) {
        startGame(); // Запускаем игру заново
    } else {
        alert("До свидания!");
    }
}