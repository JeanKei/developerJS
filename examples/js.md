# JavaScript

### Fundamentals

- #### Variables

  - [const](#const) / [let](#let) / ~~var~~

- #### Data Types
  - ##### Primitive type
    - [number](#number) / [string](#string) / [Template literals (string) ES6](#template-literals-string-es6) / [boolean](#boolean) / [null](#null) / [undefined](#undefined) / [BigInt](#BigInt) [symbol (ES6)](#symbol-ES6)
  - ##### Object Data Types
    - [Object](#Object)
    - [Arrays](#arrays), [Array methods](#Array-methods), [Array methods (ES6)](#Array-methods-ES6) / [Functions](#Functions) / [Dates](#Dates) / [Math](#Math)
      / [RegExp](#RegExp) / etc.
- #### Functions
  - [Function declarations](#Function-declarations) / [Function expressions](#Function-expressions) / [Arrow functions (ES6+)](#Arrow-functions-ES6+)
- #### Control Flow
  - [if, else](#if-else) / [Switch](#Switch) / [Try...catch](#Try...catch)
- #### Loops
  - [For, For In, For Of](#For-For-In-For-Of) / [While, Do While](#While-Do-While) / [Continue, Break](#Continue-Break)
- #### Operators
  - [Arithmetic Operators](#Arithmetic-Operators) / [Comparison Operators](#Comparison-Operators) / [Logical Operators](#Logical-Operators) / [Assignment Operators](#Assignment-Operators) / [Conditional Operator (Ternary)](#Conditional-Operator-Ternary) / [Typeof, instanceof](#Typeof-instanceof) / [Bitwise Operators](#Bitwise-Operators) / etc.

### Advanced

- [...](#...)

### Web APIs

- #### DOM Manipulation
  - [Accessing elements (methods)](#Accessing-elements-methods)
  - [Modifying element attributes (methods)](#Modifying-element-attributes-methods)
  - [Creating and removing elements (methods)](#Creating-and-removing-elements-methods)
  - [Events and Event handlers (methods)](#Events-and-Event-handlers-methods)
  - [Modifying element content (properties)](#Modifying-element-content-properties)
  - [Traversing the DOM (properties)](#Traversing-the-DOM-properties)
  - [Modifying CSS classes (properties)](#Modifying-CSS-classes-properties)
  - [Modifying element styles (property)](#Modifying-element-styles-property)

### Ecosystem & Tools

- #### Build Tools
  - [Vite](#Vite)
- #### Package Managers
  - [npm](#npm)
  - [yarn](#yarn)
  - [pnpm](#pnpm)
- #### Libraries & Frameworks
  - ~~jQuery~~

## Fundamentals

### Variables

### const

Объявление const задаёт константу, то есть переменную, которую нельзя менять.

```javascript
// Присваивание значения константе
const number = 42;
```

```javascript
// Ошибка перезаписи константы
const apple = 5;
apple = 10; // ошибка
```

### let

let используется для объявления переменных, которые можно изменять после объявления.

```javascript
let age = 25; // переменная age со значением 25
```

```javascript
let age;
age = 25;
console.log(age); // Выведет: 25`,
```

### Data Types

### Primitive type

### number

number — это примитивный тип данных, который представляет числовые значения.

- **number — числа в разных форматах**

```javascript
let x = 2; // целое число
let y = 3.14; // число с плавающей точкой
let z = 0xff; // шестнадцатеричное число`
```

- **Методы number**

```javascript
let num = 42.5678;

let fixedNum = num.toFixed(2); // Преобразует число в строку с двумя знаками после запятой: '42.57'
let preciseNum = num.toPrecision(4); // Представляет число с точностью до четырех знаков: '42.57'
let strNum = num.toString(); // Преобразует число в строку: '42.5678'

console.log(fixedNum); // '42.57'
console.log(preciseNum); // '42.57'
console.log(strNum); // '42.5678'
```

- **Свойства number**

```javascript
let maxNum = Number.MAX_VALUE; // Максимальное положительное число
let minNum = Number.MIN_VALUE; // Минимальное положительное число
let notANum = Number.NaN; // Значение "не числовое" (NaN)
let posInf = Number.POSITIVE_INFINITY; // Положительная бесконечность
let negInf = Number.NEGATIVE_INFINITY; // Отрицательная бесконечность

console.log(maxNum); // 1.7976931348623157e+308
console.log(minNum); // 5e-324
console.log(notANum); // NaN
console.log(posInf); // Infinity
console.log(negInf); // -Infinity
```

### string

Строка (string) в JavaScript должна быть заключена в кавычки.

### Методы строк:

- **Метод length**

```javascript
// Возвращает длину строки: 5
let str = "Hello";
console.log(str.length);
```

- **Метод concat**

```javascript
// Объединяет строки: "Hello World"
let str = "Hello";
console.log(str.concat(" ", "World!"));
```

- **Метод toUpperCase**

```javascript
// Преобразует строку в верхний регистр: "HELLO"
let str = "Hello";
console.log(str.toUpperCase());
```

- **Метод toLowerCase**

```javascript
// Преобразует строку в нижний регистр: "hello"
let str = "HELLO";
console.log(str.toLowerCase());
```

- **Метод indexOf**

```javascript
// Возвращает индекс первого вхождения символа 'H': 0
let str = "Hello";
console.log(str.indexOf("H"));
```

- **Метод lastIndexOf**

```javascript
// Возвращает индекс последнего вхождения символа 'l': 3
let str = "Hello";
console.log(str.lastIndexOf("l"));
```

- **Метод charAt**

```javascript
// Возвращает символ по указанному индексу: 'o'
let str = "Hello";
console.log(str.charAt(4));
```

- **Метод substring**

```javascript
// Возвращает подстроку между индексами: 'll'
let str = "Hello";
console.log(str.substring(2, 4));
```

- **Метод slice**

```javascript
// Возвращает часть строки между указанными индексами: 'el'
let str = "Hello";
console.log(str.slice(1, 3));
```

- **Метод slice**

```javascript
// Возвращает часть строки, начиная с указанной позиции с конца: 'llo'
let str = "Hello";
console.log(str.slice(-3));
```

- **Метод split**

```javascript
// Разбивает строку на массив символов: ["H", "e", "l", "l", "o"]
let str = "Hello";
console.log(str.split(""));
```

- **Метод replace**

```javascript
// Заменяет подстроку на указанную строку: "Hi"
let str = "Hello";
console.log(str.replace("ello", "i"));
```

- **Метод includes**

```javascript
// Проверяет, содержится ли указанная подстрока в строке: true
let str = "Hello";
console.log(str.includes("e"));
```

### Template literals (string) ES6

Обратные кавычки (``) позволяют создавать шаблонные строки. Они поддерживают многострочность и вставку выражений через ${}. Нестроковые значения автоматически преобразуются в строки.

- **Подстановка переменных**

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Вывод: "Hello, Alice!"
```

- **Вызов функций**

```javascript
function getAge() {
  return 25;
}
let ageStatement = `I am ${getAge()} years old.`;
console.log(ageStatement); // Вывод: "I am 25 years old."
```

- **Использование условий и тернарных операторов**

```javascript
let isAdult = true;
let adultStatus = `Is the person an adult? ${isAdult ? "Yes" : "No"}.`;
console.log(adultStatus); // Вывод: "Is the person an adult? Yes."
```

- **Использование любых JavaScript выражений**

```javascript
let a = 5, b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Вывод: "The sum of 5 and 10 is 15."

let firstName = "John", lastName = "Doe";
let fullName = \`Full name: $\{firstName} $\{lastName.toUpperCase()}.\`;
console.log(fullName); // Вывод: "Full name: John DOE."
```

- **Многострочные строки**

```javascript
let multiLineString = `The quick
brown fox
jumps over
the lazy dog`;
console.log(multiLineString);

/* Вывод:
The quick
brown fox
jumps over
the lazy dog
*/
```

### boolean

Логический тип Boolean представляет одно из двух значений: true (истина) или false (ложь).

- **Форма записи:**

```javascript
let isTrue = true;
```

```javascript
let isFalse = false;
```

- **Выражение:**

```javascript
let x = 15;
let isBiggerThanTen = x > 10; // вернет true
```

- **Сравнить строку с числом:**

```javascript
let isFiveEqual = "5";
isFiveEqual == 5; // вернет true
```

_Если использовать оператор строгого равенства ===, то преобразования типов не произойдет, и выражение вернет значение false_

```javascript
let isFiveEqualStrict = "5";
isFiveEqualStrict === 5; // вернет false
```

- **Отрицание:**

```javascript
let isTrue = true;
let isFalse = !isTrue; // вернет false
```

```javascript
let isFalse = false;
let isTrue = !isFalse; // вернет true
```

- **О“инстинным” и “ложным” значениям в JavaScript**

```javascript
Boolean(false); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(""); // false
Boolean(NaN); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(0n); // false

Boolean(true); // true
Boolean("hi"); // true
Boolean(1); // true
Boolean([]); // true
Boolean([0]); // true
Boolean([1]); // true
Boolean({}); // true
Boolean({ a: 1 }); // true
```

### null

Значение null представляет отсутствие какого-либо объектного значения.

- **Присвоение переменной значения null**

```javascript
let value = null;
console.log(value); // Выводит: null
```

- **Проверка значения на null**

```javascript
let result = null;

if (result === null) {
  console.log("Значение равно null");
} else {
  console.log("Значение не равно null");
}
```

- **Очистка значения переменной**

```javascript
let number = 10;
console.log(number); // Выводит: 10

number = null;
console.log(number); // Выводит: null
```

### undefined

undefined - это примитив, обозначающий неизвестное или отсутствующее значение. JavaScript автоматически устанавливает undefined переменным при их объявлении без присвоения значений.

- **Неинициализированная переменная**

```javascript
let variable;
console.log(variable); // Вывод: undefined
```

- **Функция без возвращаемого значения**

```javascript
function doSomething() {
  // Код функции
}

let result = doSomething();
console.log(result); // Вывод: undefined
```

- **Обращение к несуществующему свойству объекта**

```javascript
let obj = { name: "John" };
console.log(obj.age); // Вывод: undefined
```

### BigInt

BigInt – это специальный числовой тип, который предоставляет возможность работать с целыми числами произвольной длины.

- **Создать BigInt можно добавив суффикс n в конец записи числа**

```javascript
const biggy = 9997000254740991n;
```

- **Создать BigInt можно вызвав конструктор BigInt**

```javascript
const alsoBig = BigInt(9997000254999999);
```

### symbol (ES6)

Символ (Symbol) — примитивный тип, значения которого создаются с помощью вызова функции Symbol. Каждый созданный символ уникален.

- **Создание**

```javascript
const sym = Symbol();
const symTwo = Symbol();

console.log(sym === symTwo);
// false
```

_Даже если описания символов совпадают, JavaScript всё равно создаёт уникальные символы_

```javascript
const sym = Symbol("name");
const symTwo = Symbol("name");

console.log(sym === symTwo);
// false
```

### Object type

### Special types

### Arrays

Массив — это структура, в которой можно хранить коллекции элементов — чисел, строк, других массивов и так далее. Элементы нумеруются и хранятся в том порядке, в котором их поместили в массив

- **Форма записи**

```javascript
const guestList = []; // гостей нет
```

```javascript
let fruits = ["Яблоко", "Апельсин", "Слива"];
```

- **Разные типы значений**

```javascript
let arr = [
  145,
  "Яблоко",
  { name: "Джон" },
  true,
  function () {
    alert("привет");
  },
];
```

### Array methods

- **Метод length**

```javascript
const array = [1, 2, 3, 4];
console.log(array.length); // Вывод: 4
```

- **Метод push**

```javascript
const array = [1, 2, 3, 4];
array.push(12);
console.log(array); // Вывод: [1, 2, 3, 4, 12]
```

- **Метод unshift**

```javascript
const array = [1, 2, 3, 4];
array.unshift(12);
console.log(array); // Вывод: [12, 1, 2, 3, 4]
```

- **Метод pop**

```javascript
const array = [1, 2, 3, 4];
array.pop();
console.log(array); // Вывод: [1, 2, 3]
```

- **Метод shift**

```javascript
const array = [1, 2, 3, 4];
array.shift();
console.log(array); // Вывод: [2, 3, 4]
```

- **Метод splice**

```javascript
const array = [1, 2, 3, 4];
array.splice(0, 1);
console.log(array); // Вывод: [2, 3, 4]
```

- **Метод slice**

```javascript
const array = [1, 2, 3, 4];
console.log(array.slice(1, 2)); // Вывод: [2, 3]
```

- **Метод toString**

```javascript
const array = [1, 2, 3, 4];
console.log(array.toString()); // Вывод: "1,2,3,4"
```

- **Метод concat**

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // Вывод: [1, 2, 3, 4]
```

- **Метод reverse**

```javascript
const array = [1, 2, 3, 4];
console.log(array.reverse()); // Вывод: [4, 3, 2, 1]
```

### Array methods (ES6)

- **Метод map() (ES6)**

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
// Метод map: Создает новый массив, содержащий удвоенные значения исходного массива
console.log(doubled); // Результат: [2, 4, 6, 8, 10]
```

**Пример: Онлайн кинотеатр: выводим меню**

Данные: menu.js

```javascript
const menu = [
  {
    item: "All",
  },

  {
    item: "Horror",
  },

  {
    item: "Horror",
  },

  {
    item: "Thriller",
  },
];

export default menu;
```

Данные: main.js

```javascript
import menus from "./../data/menu";

const menuUl = document.querySelector(".header__bottom-list");

const list = menus.map((menu, index) => {
  const menuli = document.createElement("li");

  const menuLink = document.createElement("a");
  menuLink.classList.add("header__bottom-link");
  menuLink.textContent = menu.item;

  if (index === 0) {
    menuLink.classList.add("active");
  }

  menuli.appendChild(menuLink);
  return menuli;
});

list.forEach((li) => {
  menuUl.appendChild(li);
});
```

Результат HTML

```javascript
<ul class='header__bottom-list'>
  <li>
    <a class='header__bottom-link active'>All</a>
  </li>
  <li>
    <a class='header__bottom-link'>Horror</a>
  </li>
  <li>
    <a class='header__bottom-link'>Horror</a>
  </li>
  <li>
    <a class='header__bottom-link'>Thriller</a>
  </li>
</ul>
```

**Пример: Онлайн кинотеатр: выводим карточки**

Данные: dataCard.js

```javascript
const dataCards = [
  {
    img: "./img/marvel1.jpg",
    imdb: "9.1",
  },

  {
    img: "./img/marvel2.jpg",
    imdb: "9.2",
  },

  {
    img: "./img/marvel3.jpg",
    imdb: "9.3",
  },

  {
    img: "./img/marvel4.jpg",
    imdb: "9.5",
  },

  {
    img: "./img/marvel5.jpg",
    imdb: "9.9",
  },
];

export default dataCards;
```

Данные: Card.js

```javascript
import dataCards from "./dataCard";

const ulCard = document.createElement("ul");

const listCard = dataCards.map((dataCard) => {
  const liCard = document.createElement("li");
  liCard.classList.add("main-gallery__wrap");

  const imgElement = document.createElement("img");
  imgElement.classList.add("main-gallery__img");
  imgElement.src = dataCard.img;
  imgElement.alt = "Изображение Marvel";

  const imdbElement = document.createElement("span");
  imdbElement.textContent = dataCard.imdb;
  imdbElement.classList.add("main-gallery__raiting");

  liCard.appendChild(imgElement);
  liCard.appendChild(imdbElement);
  return liCard;
});

listCard.forEach((li) => {
  ulCard.appendChild(li);
});

document.querySelector(".main-gallery").appendChild(ulCard);
```

Результат HTML

```javascript
<div class="main-gallery">
  <ul>
    <li class="main-gallery__wrap">
      <img class="main-gallery__img" src="./img/marvel1.jpg" alt="Изображение Marvel">
      <span class="main-gallery__raiting">9.1</span>
    </li>
    <li class="main-gallery__wrap">
      <img class="main-gallery__img" src="./img/marvel2.jpg" alt="Изображение Marvel">
      <span class="main-gallery__raiting">9.1</span>
    </li>
    <!-- ... и так далее для каждого элемента в dataCards -->
  </ul>
</div>
```

- **Метод every() (ES6)**

```javascript
const numbers = [1, 2, 3, 4, 5];
const isGreaterThanZero = numbers.every((num) => num > 0);
// Метод every: Возвращает true, если все элементы массива соответствуют указанному условию
console.log(isGreaterThanZero); // Результат: true (все элементы больше нуля)
```

- **Метод includes() (ES6)**

```javascript
const numbers = [1, 2, 3, 4, 5];
const includesThree = numbers.includes(3);
// Метод includes: Возвращает true, если массив содержит указанный элемент
console.log(includesThree); // Результат: true (число 3 присутствует в массиве)
```

- **Итератор for...of (ES6)**

```javascript
const iterable = ["a", "b", "c"];
// Итератор for...of: Позволяет перебирать элементы итерируемых объектов, например, массивов или строк
for (const element of iterable) {
  console.log(element); // Результат: a, затем b, затем c
}
```

- **Оператор распространения Spread (ES6)**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
// Оператор Spread: Объединяет элементы нескольких массивов в один массив
console.log(merged); // Результат: [1, 2, 3, 4, 5, 6]
```

- **Метод filter() (ES6)**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// Метод filter: Создает новый массив, содержащий элементы, прошедшие заданное условие
console.log(evenNumbers); // Результат: [2, 4]
```

- **Метод reduce() (ES6)**

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// Метод reduce: Применяет функцию к каждому элементу массива, возвращая результирующее значение
console.log(sum); // Результат: 15 (сумма всех элементов массива)
```

### Functions

Функции — это объект первого класса. Это означает, что функцию можно использовать так же, как и другие типы данных: сохранять в переменную, передавать аргументом и возвращать из функции.

Технически, функция — это объект JavaScript, у которого есть внутренний метод Call(), который добавляет возможность вызова функции.

- **Хранение функции в переменной**

```javascript
// Присвоение анонимной функции переменной answer
const answer = function () {
  console.log("42!");
};

answer(); // Вызов функции через переменную
// Результат: 42!
```

```javascript
// Объявление функции
function greet() {
  console.log("Привет!");
}

// Присвоение функции переменной
const greeting = greet;

// Вызов функции через переменную
greeting(); // Результат: Привет!
```

- **Передача функции в качестве аргумента другой функции**

```javascript
// Функция, принимающая функцию в качестве аргумента
function sayHello(callback) {
  callback();
}

// Функция, которую передаем в качестве аргумента
function printHello() {
  console.log("Hello!");
}

// Вызов функции с передачей функции в качестве аргумента
sayHello(printHello); // Результат: Hello!
```

```javascript
// Функция, принимающая функцию в качестве аргумента
function applyOperation(x, y, operation) {
  return operation(x, y);
}

// Функция сложения
function add(a, b) {
  return a + b;
}

// Функция умножения
function multiply(a, b) {
  return a * b;
}

// Передача функции в качестве аргумента
console.log(applyOperation(5, 3, add)); // Результат: 8
console.log(applyOperation(5, 3, multiply)); // Результат: 15
```

- **Возвращение функции из другой функции**

```javascript
// Функция, возвращающая функцию для умножения числа на множитель
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// Создание функции для умножения на 2
const double = multiplier(2);

// Создание функции для умножения на 5
const triple = multiplier(5);

// Использование созданных функций
console.log(double(4)); // Результат: 8 (4 * 2)
console.log(triple(3)); // Результат: 15 (3 * 5)
```

```javascript
// Функция, возвращающая другую функцию
function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

// Создание функции умножения на 2
const multiplyByTwo = createMultiplier(2);

// Вызов функции, возвращенной из другой функции
console.log(multiplyByTwo(5)); // Результат: 10
```

```javascript
// Функция, возвращающая другую функцию
function createGreeter(greeting) {
  // Внутренняя функция, возвращаемая из внешней
  return function (name) {
    console.log(greeting + ", " + name + "!");
  };
}

// Создание функции с приветствием "Привет"
const greetHello = createGreeter("Привет");

// Вызов возвращенной функции
greetHello("Алиса"); // Результат: Привет, Алиса!

// Создание функции с приветствием "Здравствуй"
const greetHi = createGreeter("Здравствуй");

// Вызов возвращенной функции
greetHi("Боб"); // Результат: Здравствуй, Боб!
```

### Dates

Для работы с датой и временем в JavaScript используются объекты Date.

- **Instantiating a Date**

```javascript
// Создает объект Date с текущей датой и временем:
let date = new Date();
let date = new Date(milliseconds);
let date = new Date(dateString);
let date = new Date(year, month, day, hours, minutes, seconds, milliseconds);

// Примеры

let currentDate = new Date();
// результат: Пт янв 21 2024 15:30:00 GMT+0000 (Скоординированное всемирное время)

let dateFromMilliseconds = new Date(1611240000000);
// результат: Пн янв 22 2024 12:00:00 GMT+0000 (Скоординированное всемирное время)

let dateFromString = new Date("2024-01-21T15:30:00Z");
// результат: Пт янв 21 2024 15:30:00 GMT+0000 (Скоординированное всемирное время)

let specificDate = new Date(2024, 0, 21, 15, 30, 0, 0);
// результат: Пт янв 21 2024 15:30:00 GMT+0000 (Скоординированное всемирное время)
```

- **Date Object Properties**

```javascript
date.constructor; // Возвращает функцию, которая создала прототип объекта Date.
date.prototype; // Позволяет добавлять свойства и методы к объекту.
```

- **Date Object Methods**

```javascript
date.getDate(); // Возвращает день месяца (от 1 до 31).
date.getDay(); // Возвращает день недели (от 0 до 6).
date.getFullYear(); // Возвращает год (четыре цифры).
date.getHours(); // Возвращает час (от 0 до 23).
date.getMilliseconds(); // Возвращает миллисекунды (от 0 до 999).
date.getMinutes(); // Возвращает минуты (от 0 до 59).
date.getMonth(); // Возвращает месяц (от 0 до 11).
date.getSeconds(); // Возвращает секунды (от 0 до 59).
date.getTime(); // Возвращает количество миллисекунд с полуночи 1 января 1970 года.
date.getTimezoneOffset(); // Возвращает разницу во времени между временем UTC и местным временем в минутах.

date.getUTCDate(); // Возвращает день месяца по всемирному времени (от 1 до 31).
date.getUTCDay(); // Возвращает день недели по всемирному времени (от 0 до 6).
date.getUTCFullYear(); // Возвращает год по всемирному времени (четыре цифры).
date.getUTCHours(); // Возвращает час по всемирному времени (от 0 до 23).
date.getUTCMilliseconds(); // Возвращает миллисекунды по всемирному времени (от 0 до 999).
date.getUTCMinutes(); // Возвращает минуты по всемирному времени (от 0 до 59).
date.getUTCMonth(); // Возвращает месяц по всемирному времени (от 0 до 11).
date.getUTCSeconds(); // Возвращает секунды по всемирному времени (от 0 до 59).

date.setDate(day); // Устанавливает день месяца объекта.
date.setFullYear(year, month, day); // Устанавливает год объекта (четыре цифры).
date.setHours(hour, min, sec, millisec); // Устанавливает час объекта.
date.setMilliseconds(millisec); // Устанавливает миллисекунды объекта.
date.setMinutes(min, sec, millisec); // Устанавливает минуты объекта.
date.setMonth(month, day); // Устанавливает месяц объекта.
date.setSeconds(sec, millisec); // Устанавливает секунды объекта.
date.setTime(millisec); // Устанавливает дату и время объекта, добавляя или вычитая указанное количество миллисекунд от полуночи 1 января 1970 года.

date.setUTCDate(day); // Устанавливает день месяца объекта по всемирному времени.
date.setUTCFullYear(year, month, day); // Устанавливает год объекта по всемирному времени (четыре цифры).
date.setUTCHours(hour, min, sec, millisec); // Устанавливает час объекта по всемирному времени.
date.setUTCMilliseconds(millisec); // Устанавливает миллисекунды объекта по всемирному времени.
date.setUTCMinutes(min, sec, millisec); // Устанавливает минуты объекта по всемирному времени.
date.setUTCMonth(month, day); // Устанавливает месяц объекта по всемирному времени.
date.setUTCSeconds(sec, millisec); // Устанавливает секунды объекта по всемирному времени.

date.toDateString(); // Преобразует дату объекта в читаемую строку.
date.toISOString(); // Возвращает дату в виде строки в формате ISO.
date.toJSON(); // Возвращает дату в виде строки в формате JSON.
date.toLocaleDateString(); // Возвращает дату объекта в виде строки с использованием локальных соглашений.
date.toLocaleTimeString(); // Возвращает время объекта в виде строки с использованием локальных соглашений.
date.toLocaleString(); // Преобразует объект Date в строку с использованием локальных соглашений.
date.toString(); // Преобразует объект Date в строку.
date.toTimeString(); // Преобразует время объекта в строку.
date.toUTCString(); // Преобразует объект Date в строку по всемирному времени.
date.valueOf(); // Возвращает примитивное значение объекта Date.
```

- **Date Object Static Methods**

```javascript
Date.parse(datestring); // Разбирает строку даты и возвращает количество миллисекунд с полуночи 1 января 1970 года.
Date.UTC(year, month, day, hours, minutes, seconds, millisec); // Возвращает количество миллисекунд в строке даты с полуночи 1 января 1970 года по всемирному времени.
```

### Math

Math — это объект, хранящий в себе различные математические константы (например число π) и функции типа вычисления квадратного корня. Обычно используется для генерации случайных чисел или округления значений.

- **Свойства объекта Math.**

```javascript
Math.E; // Число Эйлера, основание натурального логарифма (приблизительно 2.718).
Math.PI; // Математическая константа пи (приблизительно 3.14159).
```

- **Методы объекта Math.**

```javascript
Math.abs(-4.7); // Возвращает абсолютное значение числа -4.7 => 4.7
Math.ceil(3.1); // Возвращает наименьшее целое число, большее или равное 3.1 => 4
Math.floor(3.9); // Возвращает наибольшее целое число, меньшее или равное 3.9 => 3
Math.round(4.6); // Возвращает значение 4.6, округленное до ближайшего целого числа => 5
Math.max(0, 150, 30, 20, -8, -200); // Возвращает наибольшее из чисел => 150
Math.min(0, 150, 30, 20, -8, -200); // Возвращает наименьшее из чисел => -200
Math.pow(2, 3); // Возвращает 2 в степени 3 => 8
Math.sqrt(64); // Возвращает квадратный корень из 64 => 8
Math.random(); // Возвращает псевдослучайное число в диапазоне от 0 до 1
Math.trunc(7.8968); // Отбрасывает дробную часть числа 7.8968 => 7

// Тригонометрические методы
Math.sin(Math.PI / 2); // Возвращает синус 90 градусов (π/2) => 1
Math.cos(Math.PI); // Возвращает косинус 180 градусов (π) => -1
Math.tan(Math.PI / 4); // Возвращает тангенс 45 градусов (π/4) => 1
Math.asin(1); // Возвращает арксинус 1 => π/2 (90 градусов)
Math.acos(0); // Возвращает арккосинус 0 => π/2 (90 градусов)
Math.atan(1); // Возвращает арктангенс 1 => π/4 (45 градусов)
Math.atan2(1, 1); // Возвращает арктангенс от деления 1 на 1 => π/4 (45 градусов)

// Логарифмические методы
Math.log(Math.E); // Возвращает натуральный логарифм числа e => 1
Math.log10(100); // Возвращает десятичный логарифм числа 100 => 2
Math.log2(8); // Возвращает двоичный логарифм числа 8 => 3
Math.exp(1); // Возвращает e, возведенное в степень 1 => e (приблизительно 2.718)
```

- **Константы**

```javascript
Math.E; // Число Эйлера, основание натурального логарифма (приблизительно 2.718).
Math.LN2; // Натуральный логарифм числа 2 (приблизительно 0.693).
Math.LN10; // Натуральный логарифм числа 10 (приблизительно 2.303).
Math.LOG2E; // Двоичный логарифм числа Эйлера (приблизительно 1.442).
Math.LOG10E; // Десятичный логарифм числа Эйлера (приблизительно 0.434).
Math.PI; // Математическая константа пи (приблизительно 3.14159).
Math.SQRT1_2; // Квадратный корень из 1/2 (приблизительно 0.707).
Math.SQRT2; // Квадратный корень из 2 (приблизительно 1.414).
```

### RegExp

В JavaScript регулярное выражение — это один из типов объектов, который используется для поиска комбинаций символов в строках.

- **Создание регулярных выражений**

```javascript
// Литералы:
let reg = /hello/;

// Конструктор:
let reg = new RegExp("hello");
```

- **Методы регулярных выражений**

```javascript
// Метод .test()
const str1 = "the cat says meow";
const str2 = "the dog says bark";
const hasCat = /cat/;
console.log(hasCat.test(str1)); // true
console.log(hasCat.test(str2)); // false

// Метод .exec()
const str3 = "the cat says meow";
const str4 = "the dog says bark";
const catRegex = /cat/;
console.log(catRegex.exec(str3)); // ["cat", index: 4, input: "the cat says meow", groups: undefined]
console.log(catRegex.exec(str4)); // null

// Метод .search()
const str5 = "hello world";
const searchRegex = /world/;
console.log(str5.search(searchRegex)); // 6 (индекс начала найденной подстроки)

// Метод .match()
const str6 = "apple, banana, orange";
const matchRegex = /\ba\w*/;
console.log(str6.match(matchRegex)); // ["apple"]
```

- **Базовые конструкции регулярных выражений**

```javascript
// Флаги регулярных выражений.

/hello/g; // Флаг g (глобальный поиск): ищет все совпадения, а не только первое.
/hello/i; // Флаг i (регистронезависимый поиск): игнорирует регистр символов.
/hello/m; // Флаг m (многострочный поиск): воспринимает начало (^) и конец ($) как метасимволы для каждой строки.

// Метасимволы и квантификаторы.

/hello\d/; // \d: Цифра. Соответствует любой цифре от 0 до 9.
/hello\w/; // \w: Любая буква, цифра или символ подчеркивания.
/hello./; // .: Любой символ, кроме символа новой строки.
/hello*/; // *: Ноль или более вхождений предыдущего символа.
/hello+/; // +: Одно или более вхождений предыдущего символа.
/hello?/; // ?: Ноль или одно вхождение предыдущего символа.
/hello{n}/; // {n}: Ровно n вхождений предыдущего символа.
/hello{n,}/; // {n,}: Не менее n вхождений предыдущего символа.
/hello{n,m}/; // {n,m}: От n до m вхождений предыдущего символа.
/hello^/; // начало строки.
/hello$/; // конец строки.

// Наборы символов и диапазоны.

/[aeiou]/; // [aeiou]: Любой из символов в скобках (гласные).
/[^0-9]/; // [^0-9]: Любой символ, кроме указанных в скобках (не цифры).
/[a-z]/; // [a-z]: Любая строчная буква от a до z.
/[A-Z]/; // [A-Z]: Любая заглавная буква от A до Z.
/[0-9]/; // [0-9]: Любая цифра от 0 до 9.
/\s/; // \s: Любой символ пробела, включая пробел, табуляцию и перевод строки.
/\S/; // \S: Любой символ, кроме символа пробела.
```

- **Примеры**

```javascript
var emailRegex = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/; // Регулярное выражение для проверки электронной почты.
console.log(emailRegex.test("user@example.com")); // Example output: true
console.log(emailRegex.test("invalid-email")); // Example output: false
```

### Object

Кроме примитивных типов в JavaScript существуют и сложные — например, объект.

Объект (object) — это набор свойств. Каждое свойство состоит из названия и значения. Название может быть строкой или символом, а значение может быть любым.

Объекты в JavaScript используются повсюду, особенно для хранения данных. Для уверенной работы с объектами необходимо знать, как создавать объект, как его изменять и как читать значения свойств.

### Создание объекта

- **Создание объекта: Литерал объекта**

```javascript
// Пустой объект без свойств можно создать парой фигурных скобок:
const cat = {};

// Когда нужно создать объект со свойствами, то их описывают внутри фигурных скобок. Свойства указываются в формате имяСвойства : значение, между свойствами ставится запятая:
const book = {
  title: "Война и мир",
  author: "Лев Толстой",
  pages: 1274,
  isFinished: true,
};

// Значением может быть другой объект или массив:
const cat = {
  kittens: ["Беляш", "Михаил", "Чарли"],
  favoriteToy: {
    name: "мячик",
    size: "маленький",
  },
};

// Или даже функция:
const cat = {
  name: "Том",
  meow: function () {
    console.log("мяу мяу");
  },
};

cat.meow(); // мяу мяу

// Свойства можно добавлять и после создания объекта:
const cat = {};
cat.name = "Simon";
cat.gender = "male";
cat.color = "brown";
cat.age = 2;
cat.adorable = true;

console.log(cat);
// {
//   name: 'Simon',
//   gender: 'male',
//   color: 'brown',
//   age: 2,
//   adorable: true
// }
```

- **Создание объекта: конструктор Object**

```javascript
// Создать объект также можно с помощью конструктора Object. Это объектно-ориентированный стиль программирования:
const book = new Object({ title: "Война и мир", author: "Лев Толстой" });

const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2022;
```

- **Чтение свойств**

```javascript
const book = {
  title: "Война и мир",
  author: "Лев Толстой",
  pages: 1274,
  isFinished: true,
};

// Использование точечной нотации для чтения свойства 'title'
console.log(book.title); // Война и мир

// Использование квадратной нотации для чтения свойства 'author'
console.log(book["author"]); // Лев Толстой

// Если свойство не существует, вернется undefined
const genre = book.genre;
console.log(genre); // undefined
```

- **Добавление и изменение свойств**

```javascript
const book = {
  title: "Война и мир",
  author: "Лев Толстой",
  pages: 1274,
  isFinished: true,
};

// Добавление нового свойства 'genre'
book.genre = "Роман";
console.log(book.genre); // Роман

// Изменение значения существующего свойства 'isFinished'
book.isFinished = false;
console.log(book.isFinished); // false

// Использование квадратной нотации для добавления свойства 'year'
book["year"] = 1869;
console.log(book.year); // 1869
```

- **Удаление свойств**

```javascript
const book = {
  title: "Война и мир",
  author: "Лев Толстой",
  pages: 1274,
  isFinished: true,
};

// Удаление свойства 'isFinished'
delete book.isFinished;
console.log(book.isFinished); // undefined

// Использование квадратной нотации для удаления свойства 'year'
delete book["year"];
console.log(book.year); // undefined
```

- **Сравнение объектов**

При сравнении двух объектов JavaScript сравнивает не значения свойств этих объектов, а адреса в памяти, по которым эти объекты хранятся. Поэтому любое сравнение двух объектов будет возвращать false, даже если они выглядят одинаково:

```javascript
const book = { title: "Дюна" };
const anotherBook = { title: "Дюна" };

console.log(book === anotherBook); // false

// Сравнение вернет true, если переменные указывают на один и тот же объект:
const book = { title: "Дюна" };
const anotherBook = book;

console.log(book === anotherBook); // true
```

- **Имена свойств**

Имена свойств (иногда их называют ключи, или поля) могут быть либо строками, либо символами. Если использовать в качестве ключа другой тип данных, то он будет приведён к строке с помощью вызова метода toString():

```javascript
const obj = {};
const key = {};
obj[key] = "value for the object key";

console.log(obj); // { '[object Object]': 'value for the object key' }

//Если ключ содержит пробел, то обращаться к нему возможно только через синтаксис квадратных скобок:
const obj = {
  "the answer": 42,
};

console.log(obj["the answer"]); // 42
```

### Function

Чтобы не повторять один и тот же код во многих местах, придуманы функции. Функции являются основными «строительными блоками» программы.

### Function declarations

Первый способ — просто объявить функцию в коде (по-английски Function Declaration):

```javascript
function hello(name) {
  alert(`Привет ${name} 😊`);
}

hello("Иван");

function squareDeclaration(num) {
  return num * num;
}

console.log(squareDeclaration(4)); // 16
```

### Function expressions

Второй — создать функциональное выражение (Function Expression). Это похоже на первый способ, но здесь функция становится значением переменной:

```javascript
const hello = function (name) {
  alert(`Привет ${name} 😊`);
};

hello("Антон");

const squareExpression = function (num) {
  return num * num;
};

console.log(squareExpression(4)); // 16
```

### Arrow functions (ES6+)

Стрелочная функция записывается намного короче, чем обычная. В самой простой записи ключевое слово function и фигурные скобки не требуются.

```javascript
const squareArrow = (num) => num * num;

console.log(squareArrow(4)); // 16

const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply(5, 3)); // 15
```

### Control Flow

Порядок выполнения или поток выполнения (англ. control flow) — это порядок, в котором интерпретатор JavaScript выполняет написанные в коде инструкции.

Стандартный порядок выполнения инструкций называют последовательным — интерпретатор читает и выполняет инструкции построчно сверху вниз.

### if, else

if...else - это конструкция в языке программирования JavaScript, которая позволяет выполнять различные блоки кода в зависимости от условия. Если условие истинно, выполняется блок кода после if, в противном случае, если есть блок else, выполняется код после него.

```javascript
const condition = true;

if (condition) {
  // Выполняется, если условие истинно
} else {
  // Выполняется, если условие ложно
}
```

### Switch

switch - это конструкция в JavaScript, предназначенная для удобного и эффективного выбора выполнения кода на основе значения переменной. switch сравнивает значение выражения с различными вариантами (case) и выполняет соответствующий блок кода.

```javascript
const day = 3;

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  // ... другие случаи ...
  default:
    console.log("Неизвестный день");
}
```

### Try...catch

try...catch - это механизм обработки ошибок в JavaScript, который позволяет попытаться выполнить блок кода (try) и перехватить и обработать возможные ошибки с использованием блока catch. Это позволяет избежать аварийного завершения программы при возникновении ошибок.

```javascript
try {
  // Код, который может вызвать ошибку
  throw new Error("Это ошибка!");
} catch (error) {
  // Обработка ошибки
  console.error(`Произошла ошибка: ${error.message}`);
} finally {
  // Выполняется всегда, независимо от того, была ошибка или нет
}
```

### Loops

Цикл — это повторяющаяся последовательность действий.

Цикл состоит из условия и тела цикла.

Перед запуском цикла проверяется условие. Если условие истинное, то выполняется блок кода, который называется телом цикла. Затем этот шаг повторяется. Так будет продолжаться, пока условие не станет ложным.

Каждое выполнение тела цикла называется итерацией.

### For, For In, For Of

- **Цикл for**

Цикл for - это конструкция, повторяющая одно и то же действие несколько раз

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i + ": Hello, JavaScript!");
}

// Результат выполнения цикла:

// 0: Hello, JavaScript!
// 1: Hello, JavaScript!
// 2: Hello, JavaScript!
// 3: Hello, JavaScript!
// 4: Hello, JavaScript!

// Цикл for используется для выполнения итераций определенное количество раз. В этом примере, строчка "Hello, JavaScript!" выводится на консоль пять раз.

// Шаг 1: Инициализация (var i = 0;) - объявление переменной-счетчика.
// Шаг 2: Проверка условия (i < 5;) - цикл выполняется, пока условие истинно.
// Шаг 3: Завершающая операция (i++) - увеличение счетчика.
```

- **Цикл for...in**

Цикл for...in используется для обхода свойств объектов, не являющихся массивами.

```javascript
for (переменная in объект) {
  // действия внутри цикла
}
```

Для цикла необходимо объявить название переменной и указать сам объект, свойства которого нужно обойти. В объявленной переменной будет храниться имя свойства во время итерации:

```javascript
const cat = {
  name: "Борис",
  color: "red",
  age: 8,
};

for (const key in cat) {
  console.log(`${key} – ${cat[key]}`);
}
// name – 'Борис',
// color – 'red',
// age – 8
```

```javascript
var user = {
  name: "Alice",
  age: 25,
  country: "Russia",
};

// Обход свойств объекта user и вывод их на консоль.
for (var prop in user) {
  // Проверка, является ли свойство собственным (не унаследованным).
  if (user.hasOwnProperty(prop)) {
    // Вывод свойства и его значения на консоль.
    console.log(prop + ": " + user[prop]);
  }
}

// Результат выполнения цикла for...in:

// name: Alice
// age: 25
// country: Russia

// Шаг 1: Обход свойств объекта user.
// Шаг 2: Для каждого свойства выполняется код внутри цикла.

// Примечание: Рекомендуется использовать hasOwnProperty(), чтобы отфильтровать свойства, унаследованные от прототипа объекта.
```

- **Цикл for...of**

Цикл for...of используется для перебора значений итерируемых объектов, таких как массивы.

```javascript
var flowers = ["Rose", "Lily", "Tulip", "Jasmine", "Orchid"];
for (var flower of flowers) {
  console.log(flower + " - это цветок.");
}

// Результат выполнения цикла for...of:

// Rose - это цветок.
// Lily - это цветок.
// Tulip - это цветок.
// Jasmine - это цветок.
// Orchid - это цветок.

// Шаг 1: Перебор значений массива flowers.
// Переменная flower поочередно принимает значения элементов массива.
// Шаг 2: Для каждого значения выполняется код внутри цикла.
```

### While, Do While

- **Цикл while**

Цикл while используется для выполнения блока кода, пока условие истинно.

```javascript
let rep = 1;

// Цикл while выполняется, пока условие rep <= 10 истинно.
while (rep <= 10) {
  // Вывод текущей итерации цикла на консоль.
  console.log(`Push ups repetition ${rep}`);
  // Увеличение счетчика rep на единицу.
  rep++;
}

// Результат выполнения цикла while:

// Push ups repetition 1
// Push ups repetition 2
// Push ups repetition 3
// Push ups repetition 4
// Push ups repetition 5
// Push ups repetition 6
// Push ups repetition 7
// Push ups repetition 8
// Push ups repetition 9
// Push ups repetition 10

// Шаг 1: Инициализация переменной rep (rep = 1).
// Шаг 2: Проверка условия (rep <= 10) - условие истинно (1 <= 10), выполнение цикла начинается.
// Шаг 3: Вывод на консоль сообщения и увеличение rep на 1 (rep = 2).
// Шаг 2: Проверка условия (rep <= 10) - условие истинно, выполнение цикла продолжается.
// ... и так далее, пока rep не станет больше 10.
// Когда rep становится 11, условие (rep <= 10) становится ложным, и цикл завершается.
```

- **do...while**

Цикл do...while похож на цикл while, но проверка условия происходит после выполнения блока кода.

```javascript
// Пример:

let rep = 1;

// Цикл do...while выполняется, по крайней мере, один раз, даже если условие rep <= 10 ложно.
do {
  // Вывод текущей итерации цикла на консоль.
  console.log(`Push ups repetition ${rep}`);
  // Увеличение счетчика rep на единицу.
  rep++;
} while (rep <= 10);

// Результат выполнения цикла do...while:

// Push ups repetition 1
// Push ups repetition 2
// Push ups repetition 3
// Push ups repetition 4
// Push ups repetition 5
// Push ups repetition 6
// Push ups repetition 7
// Push ups repetition 8
// Push ups repetition 9
// Push ups repetition 10

// Шаг 1: Инициализация переменной rep (rep = 1).
// Шаг 2: Вывод на консоль сообщения и увеличение rep на 1 (rep = 2).
// Шаг 3: Проверка условия (rep <= 10) - условие истинно, выполнение цикла продолжается.
// ... и так далее, пока rep не станет больше 10.
// Когда rep становится 11, условие (rep <= 10) становится ложным, но блок кода выполняется хотя бы один раз.
```

### Continue, Break

- **continue**
  Оператор continue используется для прерывания текущей итерации цикла и перехода к следующей.

```javascript
console.log("Результат выполнения цикла с оператором continue:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Результат выполнения цикла с оператором continue:
// Выводятся числа от 1 до 5, пропуская значение 3.

// 1
// 2
// 4
// 5
```

- **break**

Оператор break используется для прерывания выполнения цикла.

```javascript
console.log("Результат выполнения цикла с оператором break:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// Результат выполнения цикла с оператором break:
// Выводятся числа от 1 до 2, и цикл завершается, когда i становится равным 3.

// 1
// 2
```

### Operators

В JavaScript операторы играют ключевую роль в выполнении различных операций и управлении данными.

### Arithmetic Operators

- **Arithmetic Operators - Арифметические операторы**

```javascript
let x = 10;
let y = 5;

console.log(x + y); // Сложение: 15
console.log(x - y); // Вычитание: 5
console.log(x * y); // Умножение: 50
console.log(x / y); // Деление: 2
console.log(x % y); // Остаток от деления: 0

// Операторы инкремента и декремента - Increment and Decrement Operators
let z = 15;

console.log(++z); // Префиксный инкремент: 16
console.log(z--); // Постфиксный декремент: 16 (после этой строки z станет равным 15)
```

### Comparison Operators

- **Comparison Operators - Операторы сравнения**

```javascript
let a = 5;
let b = "5";

console.log(a == b); // Нестрогое равенство: true (значения равны после приведения типов)
console.log(a === b); // Строгое равенство: false (значения равны, но типы разные)
console.log(a != b); // Нестрогое неравенство: false (значения равны после приведения типов)
console.log(a !== b); // Строгое неравенство: true
console.log(a > b); // Больше: false (строковое "5" приводится к числу)
console.log(a < b); // Меньше: false (строковое "5" приводится к числу)
console.log(a >= b); // Больше или равно: true (строковое "5" приводится к числу)
console.log(a <= b); // Меньше или равно: true (строковое "5" приводится к числу)
```

### Logical Operators

- **Logical Operators - Логические операторы**

```javascript
let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2); // Логическое И: false
console.log(condition1 || condition2); // Логическое ИЛИ: true
console.log(!condition1); // Логическое НЕ: false
```

### Assignment Operators

- **Assignment Operators - Операторы присваивания**

```javascript
let value = 10;

value = value + 5; // Присваивание: 15
value += 5; // Прибавление и присваивание: 20
value -= 3; // Вычитание и присваивание: 17
value *= 2; // Умножение и присваивание: 34
value /= 4; // Деление и присваивание: 8.5
value %= 3; // Остаток и присваивание: 2.5
```

### Conditional Operator (Ternary)

- **Conditional Operator (Ternary) - Условный оператор**

```javascript
let age = 20;
let status = age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";

console.log(status); // "Совершеннолетний"
```

### Typeof, instanceof

- **Typeof, instanceof - Типы операторов**

```javascript
// typeof: Возвращает тип переменной
let exampleString = "Hello, JavaScript!";
let exampleNumber = 42;
let exampleBoolean = true;
let exampleArray = [1, 2, 3];
let exampleObject = { key: "value" };

console.log(typeof exampleString); // "string"
console.log(typeof exampleNumber); // "number"
console.log(typeof exampleBoolean); // "boolean"
console.log(typeof exampleArray); // "object" (массив тоже относится к типу "object")
console.log(typeof exampleObject); // "object"

// instanceof: Возвращает true, если объект является образцом типа объекта
function ExampleClass() {}

let instanceOfClass = new ExampleClass();

console.log(instanceOfClass instanceof ExampleClass); // true
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log("Hello" instanceof String); // false (строки примитивного типа не являются объектами)

// Операторы typeof и instanceof часто используются для проверки типов в условиях и валидации данных.
```

### Bitwise Operators

- **Bitwise Operators - Побитовые операторы**

```javascript
let binaryA = 5; // 00000000000000000000000000000101
let binaryB = 3; // 00000000000000000000000000000011

console.log(binaryA & binaryB); // Результат: 1 (00000000000000000000000000000001)
```

## Advanced

## Web APIs

### DOM Manipulation

DOM (Document Object Model) — это специальная древовидная структура, которая позволяет управлять HTML-разметкой из JavaScript-кода. Управление обычно состоит из добавления и удаления элементов, изменения их стилей и содержимого.

Браузер создаёт DOM при загрузке страницы, складывает его в переменную document и сообщает, что DOM создан, с помощью события DOMContentLoaded. С переменной document начинается любая работа с HTML-разметкой в JavaScript.

### Accessing elements (methods)

- **Accessing elements (methods) - Доступ к элементам (методы)**

```javascript
querySelector(): // Выбор первого элемента, соответствующего CSS-селектору.
querySelectorAll() // Выбор всех элементов, соответствующих CSS-селектору.
getElementById() // Выбор элемента по его идентификатору.
getElementsByClassName() // Выбор элементов по их классу.
getElementsByTagName() // Выбор элементов по их тегу.

const firstElement = document.querySelector('#exampleDiv');
const allElements = document.querySelectorAll('.exampleClass');
const elementById = document.getElementById('exampleDiv');
const elementsByClass = document.getElementsByClassName('exampleClass');
const elementsByTag = document.getElementsByTagName('li');
```

### Modifying element attributes (methods)

- **Modifying element attributes (methods) - Изменение атрибутов элемента (методы)**

```javascript
setAttribute(); // Установка значения атрибута.
getAttribute(); // Получение значения атрибута.
removeAttribute(); //Удаление атрибута.

// Список атрибутов: value, name, src, href, и т.д.

// Установка значения атрибута.
const imageElement = document.getElementById("exampleImage");
imageElement.setAttribute("title", "A Beautiful Image");

const newSrc = "new_example.jpg";
imageElement.setAttribute("src", newSrc);

// Получение значения атрибута.
const srcAttribute = imageElement.getAttribute("src");
console.log("Original src Attribute:", srcAttribute);

//Удаление атрибута.
imageElement.removeAttribute("alt");
console.log("After Removing alt Attribute:", imageElement);
```

### Creating and removing elements (methods)

- **Creating and removing elements (methods) - Создание и удаление элементов (методы)**

```javascript
createElement(); // Создание нового элемента.
appendChild(); // Добавление элемента в конец родительского элемента.
removeChild(); // Удаление дочернего элемента.
insertBefore(); // Вставка элемента перед указанным дочерним элементом.
remove(); // Удаление элемента.
```

### Events and Event handlers (methods)

- **Events and Event handlers (methods) - События и обработчики событий (методы)**

- **Events (События)**

```javascript
click; // Клик мыши.
mousemove; // Движение мыши.
submit; // Отправка формы.
// и другие.
```

- **Event Handlers (Обработчики событий)**

```javascript
element.addEventListener(eventType, handler, options); // Добавление обработчика события.
element; // HTML-элемент.
eventType; // Тип события (например, 'click', 'change').
handler; // Функция-обработчик.
options; // Дополнительные опции.
removeEventListener(); // Удаление обработчика события.
```

```javascript
// Простые примеры событий и обработчиков:

// 1. Событие "клик" на кнопке:
const buttonClickHandler = function () {
  alert("Кнопка была нажата!");
};

// Назначение обработчика события "клик" на кнопку с id="myButton":
document
  .getElementById("myButton")
  .addEventListener("click", buttonClickHandler);

// 2. Событие "изменение" в поле ввода:
const inputChangeHandler = function () {
  console.log("Значение изменилось:", event.target.value);
};

// Назначение обработчика события "изменение" на поле ввода с id="myInput":
document
  .getElementById("myInput")
  .addEventListener("change", inputChangeHandler);

// 3. Событие "наведение мыши" на изображении:
const imageMouseOverHandler = function () {
  console.log("Мышь наведена на изображение!");
};

// Назначение обработчика события "наведение мыши" на изображение с id="myImage":
document
  .getElementById("myImage")
  .addEventListener("mouseover", imageMouseOverHandler);
```

### Modifying element content (properties)

- **Modifying element content (properties) - Изменение содержимого элемента (свойства)**

- **Text (Текст)**

```javascript
textContent; // Текстовое содержимое элемента.
innerText; // Текстовое содержимое элемента с учетом стилей.
```

- **HTML**

```javascript
innerHTML; // HTML-содержимое элемента.
```

### Traversing the DOM (properties)

- **Traversing the DOM (properties) - Обход DOM (свойства)**

```javascript
parentNode; // Родительский элемент.
childNodes; // Коллекция дочерних элементов.
nextSibling; // Следующий соседний элемент.
previousSibling; // Предыдущий соседний элемент.
```

### Modifying CSS classes (properties)

- **Modifying CSS classes (properties) - Изменение классов CSS (свойства)**

```javascript
classList.add(); // Добавление класса.
classList.remove(); // Удаление класса.
classList.toggle(); // Переключение класса.
```

```javascript
const myElement = document.getElementById("myElement");

// 1. Добавление класса:
myElement.classList.add("newClass");

// 2. Удаление класса:
myElement.classList.remove("existingClass");

// 3. Переключение класса (если класс отсутствует, добавляет; если присутствует, удаляет):
myElement.classList.toggle("toggleClass");
```

### Modifying element styles (property)

- **Modifying element styles (property) - Изменение стилей элемента (свойство):**

```javascript
style; // Объект стилей элемента.
// color, backgroundColor, fontSize, width, height и т.д.
```

```javascript
// Пример работы с стилями элемента:

const myElement = document.getElementById("myElement");

// Получение объекта стилей элемента:
const elementStyles = myElement.style;

// Установка значений стилей:
elementStyles.color = "blue";
elementStyles.backgroundColor = "lightgray";
elementStyles.fontSize = "16px";
elementStyles.width = "200px";
elementStyles.height = "100px";
```

## Ecosystem & Tools

### Build Tools

### Vite

Vite - это сборщик и сервер разработки, разработанный для оптимизации процесса разработки frontend.

```javascript
// Установка на примере npm

npm create vite@latest
cd my-project
npm install
npm run dev
```

### Package Managers

### npm

```javascript
// Инициализация проекта
npm init

// Установка пакетов
npm install package-name

// Глобальная установка пакетов
npm install -g package-name

// Установка зависимостей из файла package.json
npm install

// Установка и сохранение зависимости в package.json
npm install package-name --save

// Установка и сохранение зависимости в devDependencies
npm install package-name --save-dev

// Удаление пакета
npm uninstall package-name

// Список установленных пакетов
npm list
```

### yarn

```javascript
// Инициализация проекта
yarn init

// Установка пакетов
yarn add package-name

// Глобальная установка пакетов
yarn global add package-name

// Установка зависимостей из файла package.json
yarn install

// Установка и сохранение зависимости в package.json
yarn add package-name

// Установка и сохранение зависимости в devDependencies
yarn add package-name --dev

// Удаление пакета
yarn remove package-name

// Список установленных пакетов
yarn list
```

### pnpm

```javascript
// Инициализация проекта
pnpm init

// Установка пакетов
pnpm install package-name

// Глобальная установка пакетов
pnpm add -g package-name

// Установка зависимостей из файла package.json
pnpm install

// Установка и сохранение зависимости в package.json
pnpm add package-name --save

// Установка и сохранение зависимости в devDependencies
pnpm add package-name --save-dev

// Удаление пакета
pnpm remove package-name

// Список установленных пакетов
pnpm list
```
