let count = 0; // Задание 1

while (count < 2) {
    console.log("Привет");
    count++;
}

let a = 1; // Задание 2

while (a <= 5) {
    console.log(a);
    a++;
}

let b = 7; // задание 3

do {
    console.log(b);
    b++;
} while (b <= 22);

const obj = {  // Задание 4
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(key + " — зарплата " + obj[key] + " долларов");
}

let n = 1000; // Задание 5
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log("Результат: " + n);
console.log("Количество итераций: " + num);

let firstFriday = 5; // Задание 6
let day = firstFriday;

while (day <= 31) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
    day += 7;
}