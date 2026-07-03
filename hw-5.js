function minNumber(a, b) { // Задание 1
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNumber(8, 4));
console.log(minNumber(6, 6));
console.log(minNumber(10, 20)); 
console.log(minNumber(-5, 3));

function number(n) { // Задание 2
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(number(13));
console.log(number(7));  
console.log(number(0));
console.log(number(-3)); 


function printSquare(num) {  // Задание 3
    console.log(num * num);
}

function getSquare(num) {
    return num * num;
}

console.log(printSquare(5));

let result = getSquare(5);
console.log("Квадрат числа 5 = " + result); 


function correctAge(age) { // Задание 4
    age = Number(age);
    if (isNaN(age)) {
        return 'Вы ввели неправильное значение';
    }
    if (age < 0) {
        return 'Вы ввели неправильное значение';
    }
    if (age >= 0 && age <= 12) {
        return 'Привет, друг!';
    }
    if (age >= 13) {
        return 'Добро пожаловать!';
    }
}
alert(correctAge(prompt("Сколько вам лет?")));

function multiplyNumbers(c, d) { // Задание 5
    let num1 = Number(c);
    let num2 = Number(d);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }
    
    return num1 * num2;
}

console.log(multiplyNumbers(12, "s"));
console.log(multiplyNumbers(23, 12));


function cubeNumber() { // Задание 6
    let input = prompt("Введите число:");
    let num = Number(input);

    if (isNaN(num) || input === "" || input === null) {
        return 'Переданный параметр не является числом';
    }

    let cube = num * num * num;
    
    return num + ' в кубе равняется ' + cube;
}

console.log(cubeNumber())

const circle1 = { radius: 3 }; // Задание 7
const circle2 = { radius: 7 };

circle1.getArea = function() {
    return Math.PI * this.radius * this.radius;
};

circle2.getArea = function() {
    return Math.PI * this.radius * this.radius;
};

console.log(circle1.getArea()); 
console.log(circle2.getArea());
