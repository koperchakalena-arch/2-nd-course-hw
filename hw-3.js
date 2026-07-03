let password = 'удача' // Задание 1
let answer = String(prompt('Введите пароль'))
if (answer === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}


let c = 0; // Задание 2
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}


let d = 21; // Задание 3
let e = 1;
if (d > 100 || e > 100 ) {
    console.log('Верно')
} else {
    console.log('Неверно')
}


let a = '2'; // Задание 4
let b = '3';
alert(Number(a) + Number(b));


let monthNumber = Number(prompt('Введите номер месяца')) // Задание 5
alert(monthNumber)

switch (monthNumber) {
    case 1:
        alert('Зима')
        break;
    case 2:
        alert('Зима')
        break;
    case 3:
        alert('Весна')
        break;
    case 4:
        alert('Весна')
        break;
    case 5:
        alert('Весна')
        break;
    case 6:
        alert('Лето')
        break;
    case 7:
        alert('Лето')
        break;
    case 8:
        alert('Лето')
        break;
    case 9:
        alert('Осень')
        break;
    case 10:
        alert('Осень')
        break;
    case 11:
        alert('Осень')
        break;
    case 12:
        alert('Зима')
        break;
    default:
        alert('Ввели что-то не то')
}