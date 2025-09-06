// const s = "Knowledge of built-in JavaScript methods speeds up a tester’s work."


// console.log(s.toLowerCase())
/*
s.charAt(); //или с[0]
s.charAt(s.length -1);
s.substring(1, 4);
s.substr(1, 3);
s.slice(-3);
s.indexOf(“l”);
s.lastIndexOf(“l”);
s.split(“of”);
s.replace(“l”, “L”);
s.replaceAll(“l”, “L”);
s.toUpperCase();
s.toLowerCase(); */

/* const monthNumber = 1;
const result3 = "";

switch (monthNumber) {
     case "1":
          result3 = "January";
          break;
     case "2":
          result3 = "February";
          break;
     case "3":
          result3 = "March";
     case "4":
          result3 = "April";
          break;
     case 5:
          results3 = "May";
          break;
     case 6
          result3 == "June";
          break;
}

console.log(result3); */



const monthNumber = 1;
let result3 = "";

switch (monthNumber) {
     case 1:
          result3 = "January";
          break;
     case 2:
          result3 = "February";
          break;
     case 3:
          result3 = "March";
     case 4:
          result3 = "April";
          break;
     case 5:
          result3 = "May";
          break;
     case 6:
          result3 = "June";
          break;
    default:
      result3 = "Wrong number"
}

console.log(result3);

/* let day = "monday";
let message;

if (day === "Monday") {
     message = "It's Monday!";
}
else if (day === "TUesday") {
     message = "It's Tuesday!";
}
else if (day === "Wednesday") {
     message = "It's Wednesday!";
}
else if (day === "thursday") {
     message = "It's Thursday!";
}
else if (day === "Friday") {
     message = "It's Friday!";
}
else if (day === "Saturday") {
     message = "Its Sunday!";
}
else if (day === "Sunday") {
     message = "It's Sunday!";
}
else {
     message = "Invalid day!";
}

console.log(message);
 */


let day = "monday";
day = day.toLowerCase();
let message;

if (day === "monday") {
     message = "It's Monday!";
}
else if (day === "tuesday") {
     message = "It's Tuesday!";
}
else if (day === "wednesday") {
     message = "It's Wednesday!";
}
else if (day === "thursday") {
     message = "It's Thursday!";
}
else if (day === "friday") {
     message = "It's Friday!";
}
else if (day === "saturday") {
     message = "Its Sunday!";
}
else if (day === "sunday") {
     message = "It's Sunday!";
}
else {
     message = "Invalid day!";
}

console.log(message);

//Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос)

const dayNumber = 1;
let result = "";

switch (dayNumber) {
     case 1:
          result = "Monday";
          break;
     case 2:
          result = "Tuesday";
          break;
     case 3:
          result = "Wednesday";
     case 4:
          result = "Thursday";
          break;
     case 5:
          result = "Friday";
          break;
     case 6:
          result = "Saturday";
          break;
    case 7:
          result = "Sunday";
          break;
    default:
      result = "Wrong number"

}

console.log(result);

//Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - “approved”, если другие месяцы, то - “denied”.

let month;
let approval;

function approveLeave(month) {
if (month === "July" || month === "August") {
  approval = "approved"
} else {
  approval = "denied"
}
console.log(approval);
}

approveLeave("August");

/* Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора,
должно происходить то или иное арифметическое действие и выводиться результат в консоль. Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д. */

let a = 0;
let b = 0;
let operator;

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      result = a + b
      break;
    case "-":
      result = a - b
      break;
    case "/":
      result = a / b
      break;
    case "*":
      result = a * b
      break;
    default:
      console.error("Unknown operator");;
  }
  if (a === 0 || b === 0) {
result = 0;
  }
console.log(result);
}

calculate(-1/2, 10, '/')

/* Напишите программу, которая определяет, является ли заданный год високосным по правилам Григорианского календаря.
Високосный год делится на 4, за исключением случаев, когда он делится на 100, но не на 400. */

let year = 0;

function ifLeapYear(year) {

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("It's a leap year!");
    }
     else {
    console.log("It's not a leap year!");
  }
}

ifLeapYear(2024);

/* Напишите программу, которая рассчитывает стоимость билета в зависимости от возраста.
Дети до 2х лет - бесплатно
Дети до 10 лет - скидка в 50%
Пожилые (после 65) - скидка в 15%
Студенты - скидка в 10% */

let age = 0;
let price = 0;
let discount = 0;

function countPrice(age, price) {
if (age < 2) {
discount = 1;
} else if (2 <= age && age < 10) {
discount = 0.5;
} else if (age > 65) {
  discount = 0.1;
}
else {
 discount = 0;
}
console.log(price * (1 - discount));
}

countPrice(66, 1000)

/* Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):

Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
За сколько дней она доползет до вершины стены. */
