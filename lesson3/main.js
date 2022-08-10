// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let number = +prompt('Number?');
//
// if (number > 0) {
//     alert ('true');
// }
//
// if (number < 0) {
//     alert ('true');
//
// } else if (number === 0) {
//     alert ('false');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time = +prompt('time?');
// if (time >= 0 && time <= 14) {
//     alert ('The first half of the day');
// }
// if (time >= 15 && time <= 29){
//     alert ('Second half of the day');
// }
// if (time >=30 && time <=44) {
//     alert ('The third half of the day');
//
// }
// if (time >= 45 && time<=59){
//     alert('The fourth half of the day');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('day?');
// if (day >= 1 && day <= 10) {
//     alert('The first decade of the month');
// }
// if (day >= 11 && day <= 20) {
//     alert('Second decade of the month');
// }
// if (day >= 21 && day <= 31) {
//     alert('The third decade of the month');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = prompt('Day?');
//
// switch (day) {
//     case "Monday":
//         document.write(`<p>Lessons schedule:</p>
//             <p>20:00 - practical lesson</p>
//             <p>Good day</p>`)
//         break;
//
//     case "Tuesday":
//         document.write(`<p>Lessons schedule:</p>
//             <p>19:30 - lecture</p>
//             <p>Good day</p>`)
//         break;
//
//     case "Wednesday":
//         document.write(`<p>Lessons schedule:</p>
//             <p>20:00 - practical lesson</p>
//             <p>Good day</p>`)
//         break;
//
//     case "Thursday":
//         document.write(`<p>Lessons schedule:</p>
//             <p>19:30 - lecture</p>
//             <p>Good day</p>`)
//         break;
//
//     case "Friday":
//         document.write(`<p>Lessons schedule:</p>
//             <p>Additional activity</p>
//             <p>Good day</p>`)
//         break;
//
//
//     case "Saturday":
//         document.write(`<p>Lessons schedule:</p>
//             <p>2:00 - English</p>
//             <p>Good day</p>`)
//         break;
//
//     case "Sunday":
//         document.write(`<p>It's the weekend!</p>
//             <p>Good day</p>`)
//         break;
//     default:
//         alert('Enter the day of the week!');
// }
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// let a = +prompt('First number?');
// let b = +prompt('Second number?');
// console.log(`first number ${a},second number ${b}`);
// if (a === b) {
//     alert(`Your numbers are the same  ${a} and ${b}`);
// }
// if (a > b) {
//     alert(`The number a is more b! Number a = ${a} `);
// }
// if (b > a) {
//     alert(`The number b is more a! Number b = ${b}`);
// }
// else{
//     alert('Enter first and second number!');
// }


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)



// let x = prompt();
// if (x === null || x === undefined || x === ''|| x==='0'|| x==='-0' || x==='false' || x=== NaN) {
//     console.log('default');
// }
// else{
//     console.log(x);
// }




