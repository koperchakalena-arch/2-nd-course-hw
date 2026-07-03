const numbers = [1, 5, 4, 10, 0, 3]; // Задание 1
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    if (numbers[i] === 10) {
        break
    }
    i++
}

const arr = [1, 5, 4, 10, 0, 3]; // Задание 2
for (i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i);
        break;
    }
}

const task3 = [1, 3, 5, 10, 20] // Задание 3
let result3 = task3.join (' ');
console.log(result3);


const massive = []; // Задание 4

for (let i = 0; i < 3; i++) {
    const row = [];
    
    for (let j = 0; j < 3; j++) {
        row.push(1); 
    }
    
    massive.push(row);
}

console.log(massive);

const task5 = [1, 1, 1]; // Задание 5
task5.push (2, 2, 2); 
console.log(task5);


const task6 = [9, 8, 7, 'a', 6, 5]; // Задание 6
task6.sort();
const lastElement = task6.pop();
console.log(task6);

const task7 = [9, 8, 7, 6, 5]; // Задание 7
let guess = prompt('Угадайте число от 5 до 9');
let guessNumber = Number(guess);
if (task7.includes(guessNumber)) {
    alert("Угадал"); 
} else {
    alert("Не угадал");
}

let string = 'abcdef'; // Задание 8

let task8 = string.split('');
task8.reverse();
let reverseString = task8.join('');

console.log(reverseString);

let task9 = [[1, 2, 3], [4, 5, 6]]; // Задание 9
let result9 = [...task9[0], ...task9[1]];
console.log(result9);


const task10 = [1, 3, 4, 7, 10]; // Задание 10
for (let i = 0; i < task10.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    console.log(sum)
}


function getSquares(task11) { // Задание 11
    let result11 = [];
    let i = 0;

    while (i < task11.length) {
        result11.push(task11[1] * task11[1]);
        i++;
    }

    return result11
}



function getWordsLength(task12) { // Задание 12
    let result12 = [];
    
    for (let i = 0; i < task12.length; i++) {
        result12.push(task12[i].length);
    }
    
    return result12;
}


function getNegativeNumbers(task13) { // Задание 13
    return task13.filter(function(num) {
        return num < 0;
    });
}



let originalArray = []; // Задание 14

for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 11); 
    originalArray.push(randomNum);
}

let evenNumbers = [];

for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 === 0) {
        evenNumbers.push(originalArray[i]);
    }
}

console.log("Исходный массив:", originalArray);
console.log("Четные числа:", evenNumbers);



let task15 = []; // Задание 15
for (let i = 0; i < 6; i++) {
    let randomNum15 = Math.floor(Math.random() * 10) + 1; 
    task15.push(randomNum15);
}

let sum15 = 0;
for (let i = 0; i < task15.length; i++) {
    sum15 += task15[i];
}

let average = sum15 / task15.length;

console.log("Массив:", task15);
console.log("Сумма элементов:", sum15);
console.log("Среднее арифметическое:", average);