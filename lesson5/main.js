// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b){
// let res = a*b;
// return res;
// }
// let S = square(10, 5);
// console.log(S);

// - створити функцію яка обчислює та повертає площу кола з радіусом r


// function CircleSquare(radius) {
//     let square = Math.PI * (radius * radius);
//     console.log(square);
//     console.log(Math.round(square*100)/100);
//     return square;
// }
// CircleSquare(5);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function CircleSquare(radius, h) {
//     let square = 2*(Math.PI * radius*h);
//     console.log(square);
//     console.log(Math.round(square*100)/100);
//     return square;
// }
// CircleSquare(5, 6);


// - створити функцію яка приймає масив та виводить кожен його елемент


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function arrayPrinter(array) {
//   for (const item of users){
//         console.log(item);
//   }
// }
// arrayPrinter(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function writer(text) {
    //     document.write(`<div>${text}</div>`);
//
// }
// writer('ky');
// writer('hi');
// writer('hello');
// writer('qq');

    // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// document.write(`<ul>`)
// function writer(text) {
//     document.write(`<li>${text}</li> <li>${text}</li> <li>${text}</li>`);
//
//     }
// document.write(`</ul>`)
// writer('ky');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// document.write(`<ul>`)
// function writer(text) {
//     for (let i = 0; i < 8; i++ ){
//         document.write(`<li>${text}</li>`);}
//
// }
// document.write(`</ul>`)
//
// writer('ky');
//не зрозуміла цього, подивлюсь як виконати на практичній мб

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,'fddfodf',4567543,'fdfdfdfrwe'];
// let list = arr => {
//     console.log(arr);
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// };
// list(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.



// - створити функцію яка повертає найменьше число з масиву
// let numbers = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3){
//         console.log(num1);
//         return num1;
//     }else if (num2 < num3 && num2 < num1){
//         console.log(num2);
//         return num2;
//     }else{
//         console.log(num3);
//         return num3;
//     };
// };
// numbers(5437,3,6754);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const funPlus_array = (array) => {
//     let i = 0;
//     for (const arrayElement of array) {
//         i += arrayElement;
//     }
//     return i;
// };
//
// const sum = funPlus_array([5,2,67])
// console.log(sum);