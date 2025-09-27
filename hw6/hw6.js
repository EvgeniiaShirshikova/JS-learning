// Задачки:

// Как объявить функцию в JavaScript и почему?

// function checkAnswer() {
//        console.log("Hello World")
// };

// checkAnswer();

// Варианты ответов:
// def checkAnswer() {}
// void checkAnswer() {}
// function checkAnswer() {}
// func checkAnswer() {}



// Какой результат работы кода и почему? Выберите один ответ.

// function greet(name) {
//      if (name === undefined) {
//          return "Hello, stranger!";
//      }
//      else {
//          return "Hello, " + name + "!";
//      }
//  }
// console.log(greet());

// Варианты ответов:
//     a. "Hello, stranger!"
//     b. "Hello, undefined!"
//     c. Ошибка: "name is not defined"
//     d. Ошибка: "greet() takes exactly 1 argument (0 given)"



// Что вернет вызов функции и почему?

// function FindLongestString(arr) {
// 	let longest = "";

// 	for (let i = 0; i < arr.length; i++) {
// 		if (Array.isArray(arr[i])) {
// 			const nestedLongest = FindLongestString(arr[i]);

// 			if (nestedLongest.length > longest.length) {
// 				longest = nestedLongest;
// 			}
// 		} else if (typeof arr[i] === "string") {
// 			if (arr[i].length > longest.length) {
// 				longest = arr[i];
// 			}
// 		}
// 	}

// 	return longest;
// }

// console.log(FindLongestString(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']]));


// 	Варианты ответов:

// Вариант ответа 1:
// Результатом будет ошибка, так как функция FindLongestString не определена внутри цикла.

// Вариант ответа 2:
// Результатом будет 'banana', так как это самая длинная строка в первом вложенном массиве.

// Вариант ответа 3:
// Результатом будет 'orange', так как это самая длинная строка во втором вложенном массиве.

// Вариант ответа 4:
// Результатом будет 'strawberry', так как это самая длинная строка в массиве.

// Вариант ответа 5:
// Результатом будет ничего, так как мы не вызываем функцию



//Напишите функцию с калькулятором (можно использовать код с предыдущей домашней работы), в которую, в качестве параметров, передаются три переменные, две
// - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.

//Пример:
// function calculate(a, b, operator) {
//    if (operator === "*") {
//     return a * b
//    } else if (operator === "/") {
//     return a / b
//    } else if (operator === "-") {
//     return a - b
//    } else if (operator === "+") {
//     return a + b
//    } else {
//     return "wrong input!!!"
//    }
// }

// console.log(calculate(5, 6, "*"))


// Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

//     "Hello world!"
//     "!Hola mundo!"
//     "Hallo wereld!"
//     "Пpивeт мир!"

// function getGreetings() {
//   const arr = ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
//   return arr;
// }

// console.log(getGreetings());

// Создать декларируемую функцию (function Declaration), функцию выражение (function Expression) и стрелочную функцию.

// Заполнить остаток таблички методов массивов



// Какой метод был использован в данном коде (на месте *****), чтобы перевести метры в футы и почему?

// const distanceInMeters = [2, 5, 13, 44, 100];

// const distanceInFeet = distanceInMeters.map(function(i) {
//      return Math.round(i * 3.28084);
// });

// console.log(distanceInFeet);    // Вывод: [ 7, 16, 43, 144, 328 ]


// Внедрите в свой код с Кофе (из дз 3, задача 11), как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

// Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции)
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
// За сколько дней она доползет до вершины стены.

// let wall = 5;
// let dayD = 3;
// let nightD = -2;

// let distance = 0;

// let days = 0;


// function countDays() {
// while (distance < 5) {
//   days +=1;
//   distance += dayD;
//   if (distance === 5) {
//     break;
//   }
//   distance += nightD;
// }
// console.log(days)
// }

// countDays();


// Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех чисел этого массива. Если элемент массива не число, пропускаем этот элемент

// const arr = [1, 2, 3, 4, 'a', 'b', 5]
// let sum = 0;

// function countSum() {
// arr.forEach(el => {
//   if (typeof(el) === "number") {
//     sum += el;
//   }
// })
// return sum
// }

// console.log(countSum());


// Напишите функцию, которая принимает массива строк как параметр и возвращает строки длиннее 5 букв.

// function isLonger(arr) {
//     arr.forEach(el => {
//     if(el.length > 5) {
//       console.log(el);
//     }
//   })
// }

// isLonger(['apple', 'strawberry', 'banana', 'mandarin', 'grape', 'orange', 'pear']);
