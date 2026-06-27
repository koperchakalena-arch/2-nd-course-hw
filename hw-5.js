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