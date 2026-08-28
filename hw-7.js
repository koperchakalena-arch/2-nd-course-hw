// Задание 1
let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr)

// Задание 2
function filterByStart(arr, str) {
    let searchStr = str.toLowerCase();
    let result = [];
    
    for (let item of arr) {
        if (item.toLowerCase().startsWith(searchStr)) {
            result.push(item);
        }
    }
    
    return result;
}

// Задание 3 
let num = 32.58884;

let lowNum = Math.floor(num);
console.log(lowNum);

let bigNum = Math.ceil(num);
console.log(bigNum);

let roundNum = Math.round(num);
console.log(roundNum);

// Задание 4
let numbers = [52, 53, 49, 77, 21, 32];

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log(min); 
console.log(max);

// Задание 5
let random = Math.round(Math.random() * 10);
console.log(random)

// Задание 6
function generateRandomArray(num) {
    if (!Number.isInteger(num) || num <= 0) {
        return "Ошибка";
    }
    
    let length = Math.floor(num / 2);
    
    let result = [];
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * (num + 1)); 
        result.push(randomNum);
    }
    
    return result;
}

// Задание 7
function getRandomNumber(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "Ошибка";
    }
    
    if (min > max) {
        return "Ошибка";
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание 8
let currentDate = new Date();

console.log(currentDate.toString()); 

// Задание 9
let currentDate = new Date();

let futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log(currentDate.toLocaleDateString());
console.log(futureDate.toLocaleDateString());

// Задание 10
function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];
    
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekday = weekdays[date.getDay()];
    
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

let currentDate = new Date();
console.log(formatDate(currentDate));