// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);
// let str1 = 'lorem ipsum';
// console.log(str1.length);
// let str2 = 'javascript is cool';
// console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase());
// let str1 = 'lorem ipsum';
// console.log(str1.toUpperCase());
// let str2 = 'javascript is cool';
// console.log(str2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// let str1 = 'LOREM IPSUM';
// console.log(str1.toLowerCase());
// let str2 = 'JAVASCRIPT IS COOL';
// console.log(str2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

// let str = ' dirty string   '
// console.log(str);
// let trim = str.trim();
// console.log(trim);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// function stringToarray(str) {
//     return  str.split(" ");
// }
// let str = 'Ревуть воли як ясла повні';
// console.log(stringToarray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
//
// arr.map(function(element, index, array){
//     console.log(element);
//     return element;
// }, 100);
//

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
// nums.sort();
// console.log(nums);
// let nums1 = nums.sort(function sortNums(a, b) {
//     return a - b;
// });
// console.log(nums1);
//
// let nums2 = nums.sort(function sortNums(a, b) {
//     return b - a;
// });
// console.log(nums2);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sort = coursesAndDurationArray.sort(function sortNums(a, b) {
//     return b.monthDuration - a.monthDuration;
// });
// console.log(sort);
// let filter = coursesAndDurationArray.filter(value => value.monthDuration >= 5);
// console.log(filter);


// описати колоду карт

// тут в мене 72 карти))))
//
// var cardSuit = ["spades", "diamonds", "clubs", "hearts"];
// var values = ["A", "6", "7", "8", "9", "10", "J", "Q", "K"];
// var color = ["red", "black"];
// let cards = function getDeck() {
//     let deck = new Array();
//
//     for (let i = 0; i < cardSuit.length; i++) {
//         for (let x = 0; x < values.length; x++) {
//
//             for (let c = 0; c < color.length; c++) {
//
//                 let card = {Value: values[x], Suit: cardSuit[i], Color: color[c]};
//                 deck.push(card);
//                 // deck.sort(function (a, b) {
//                 //
//                 //     if (a.Color < b.Color) //сортируем строки по возрастанию
//                 //         return -1
//                 //     if (a.Color > a.Color)
//                 //         return 1
//                 //     return 0 // Никакой сортировки
//                 // }) Хотіла посортувати і видалити інші але не вийшло
//
//             }
//         }
//     }
//
//     return deck;
// }
// console.log(cards());
//
// // - знайти піковий туз
// let filterspadesA = cards().filter(value => value.Suit === "spades" && value.Value === "A" && value.Color === "black");
// console.log(filterspadesA);
//
// // - всі шістки
// let filtersix = cards().filter(value => value.Value === "6");
// console.log(filtersix);
// // - всі червоні карти
// let filterred = cards().filter(value => value.Color === "red");
// console.log(filterred);
// // - всі буби
// let filterdiamonds = cards().filter(value => value.Suit === "diamonds");
// console.log(filterdiamonds);
// - всі трефи від 9 та більше
//


//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }