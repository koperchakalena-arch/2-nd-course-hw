const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let correctCount = 0;

for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i];
    
    let questionText = currentQuestion.question + "\n\n";
    for (let j = 0; j < currentQuestion.options.length; j++) {
        questionText += currentQuestion.options[j] + "\n";
    }
    questionText += "\nВведите номер правильного ответа (1, 2 или 3):";
    
    let userAnswer = prompt(questionText);
    
    userAnswer = Number(userAnswer);
    
    if (userAnswer === currentQuestion.correctAnswer) {
        correctCount++;
        alert("Правильно!");
    } else {
        alert("Неправильно! Правильный ответ: " + currentQuestion.correctAnswer);
    }
}

// Выводим результат
alert("Вы ответили правильно на " + correctCount + " из " + quiz.length + " вопросов.");