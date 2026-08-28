
function generateRandomColor() {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeColor() {
    const newColor = generateRandomColor();
    const section = document.querySelector('.minigames');
    if (section) {
        section.style.backgroundColor = newColor;
    }
}

// Запуск игры — просто вешаем обработчик на кнопку
function startColorGenerator() {
    // Находим кнопку "Играть!" в 6-й карточке
    const cards = document.querySelectorAll('.minigames__card-second');
    let targetButton = null;
    
    // Ищем 6-ю карточку (последнюю)
    cards.forEach(card => {
        const img = card.querySelector('img');
        if (img && img.src.includes('mini6')) {
            targetButton = card.querySelector('.minigames__button');
        }
    });
    
    // Если не нашли по картинке, ищем по тексту
    if (!targetButton) {
        const buttons = document.querySelectorAll('.minigames__button');
        // 6-я кнопка (индекс 5, т.к. счет с 0)
        if (buttons.length >= 6) {
            targetButton = buttons[5];
        }
    }
    
    // Вешаем обработчик
    if (targetButton) {
        targetButton.onclick = changeColor;
        targetButton.textContent = '🎨 Сменить цвет';
    }
}
