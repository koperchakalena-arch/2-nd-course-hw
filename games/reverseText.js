function startReverseText() {
    let userText = prompt("Введите текст, который нужно перевернуть:");

    if (userText === null) {
        alert("До свидания!");
    } else if (userText.trim() === "") {
        alert("Вы ничего не ввели или ввели только пробелы :( Попробуйте снова.");
    } else {
        let reversedText = userText.split('').reverse().join('');

        alert("Исходный текст: " + userText + "\n\n Перевернутый текст: " + reversedText);
        console.log("Оригинал: " + userText);
        console.log("Перевернутый: " + reversedText);
    }
}