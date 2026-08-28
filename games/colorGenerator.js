function generateRandomColor() {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startColorGenerator() {
    const newColor = generateRandomColor();
    const section = document.querySelector('.minigames');
    if (section) {
        section.style.backgroundColor = newColor;
    }
}