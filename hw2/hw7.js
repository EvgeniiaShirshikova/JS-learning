// Задачки:

// 1. Есть класс Song. Выведите на печать автора песни.

// class Song {
//     constructor(name, author) {
//         this._name = name;
//         this._author = author;
//     }

//     get author() {
//         return this._author;
//     }

//     set author(writer) {
//         this._author = writer;
//     }
// }

// const song1 = new Song("Yellow submarine", "Beatles")
// console.log(song1.author);

// 2. Определите класс Shape.
//     - Он имеет три свойства: name, sides, и sideLength.
//     - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину,
//         например квадрат или равносторонний треугольник.
//     - Добавьте конструктор в этот класс.
//     - Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
//     - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр
//         (длину внешнего края фигуры) и записывает результат в консоль.
//     - Создайте новый экземпляр класса Shape с именем square.
//     - Дайте name ему square, sides = 4 и sideLength = 5​
//     - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить,
//         записывает ли он результаты вычислений в консоль браузера, как ожидалось.
//     - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
//     - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает.

// class Shape {
//   constructor(name, sides, sideLength){
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }

//   calcPerimeter() {
//     this.perimeter = this.sides * this.sideLength;
//     console.log(this.perimeter);
//   }

// }

// const square = new Shape("Square", 4, 5)

// square.calcPerimeter()

// const triangle = new Shape("Triangle", 3, 3)
// triangle.calcPerimeter()

// 3. Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:

//     1. "name" - строка, представляющая имя работника.
//     2. "age" - число, представляющее возраст работника.
//     3. "position" - строка, представляющая должность работника.
//     4. "salary" - число, представляющее зарплату работника.

//     Требования:

//     1. Создайте конструктор класса "Employee", который принимает аргументы
//         "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
//     2. Создайте геттеры и сеттеры для свойств "age", "position" и "salary".
//     3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать
//         новые значения свойств.

class Employee {
  constructor(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 18) {
      this._age = newAge;
    } else {
      console.log("age must be a number and >=18");
    }
  }

  get position() {
    return this._position;
  }

  set position(newPosition) {
    if (typeof newPosition === "string") {
      this._position = newPosition;
    } else {
      console.log("position must be a string");
    }
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary) {
    if (typeof newSalary === "number" && newSalary > 0) {
      this._salary = newSalary;
    } else {
      console.log("salary must be a number and > 0");
    }
  }
}

const newEmployee = new Employee("John", 8, "engineer", 50);

console.log(newEmployee);


// 4. Создайте класс Person со следующими свойствами:

//     a. Конструктор который принимает 4 аргумента:
//         - First Name (по умолчанию значение "John")
//         - Last Name (по умолчанию значение "Doe")
//         - Age (по умолчанию значение 0)
//         - Gender (по умолчанию значение "Male").

//     b. Метод sayFullName без аргументов и возвращает полное имя человека
//     c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName
//         и возвращает "Welcome to Planet Earth <raceName>".

//         Пример: если значение raceName "Martians", результат должен быть
//         "Welcome to Planet Earth Martians"

// 5. Переделайте креативное задание из урока 7 в класс. Потом, используя класс, сделайте те же задания:
//     a. Выведите в console названия всех книг.
//     b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
//     c. Отсортируйте библиотеку по году выпуска книг
