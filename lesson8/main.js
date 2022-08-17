// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let array =[];
// array[0] = new User(1, 'Kate','Symchuk','katyasokal',093555555);
// array[1] = new User(2, 'Nikita','Symchuk','dfsfdfsff',093555555);
// array[2] = new User(13, 'Vitya','Symchuk','wefgefsdf',093555555);
// array[3] = new User(4, 'Anna','Symchuk','svgfhgfl',093555555);
// array[4] = new User(56, 'Taras','Symchuk','afdgghd',093555555);
// array[5] = new User(6, 'Andiy','Symchuk','sdfghfd',093555555);
// array[6] = new User(7, 'Sergo','Symchuk','sdfghbv',093555555);
// array[7] = new User(72, 'Yuriy','Symchuk','sdfghgfd',093555555);
// array[8] = new User(9, 'Oksana','Symchuk','adfghjk',093555555);
// array[9] = new User(67, 'Oleg','Symchuk','ewrtyuil',093555555);
//
// console.log(array);


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

// let filter = array.filter(array => array.id % 2 === 0);
// console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

// let sort = array.sort(function(a, b) {
//     return a.id - b.id;
// });
// console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let Clients =[];
// Clients[0] = new Client(1, 'Kate','Symchuk','katyasokal',093555555, ['spreed', 'milk']);
// Clients[1] = new Client(2, 'Nikita','Symchuk','dfsfdfsff',093555555,['spreed', 'milk','fish','apple']);
// Clients[2] = new Client(13, 'Vitya','Symchuk','wefgefsdf',093555555, ['spreed', 'milk']);
// Clients[3] = new Client(4, 'Anna','Symchuk','svgfhgfl',093555555, ['spreed', 'milk','fish', 'apple','orange']);
// Clients[4] = new Client(56, 'Taras','Symchuk','afdgghd',093555555, ['spreed', 'milk']);
// Clients[5] = new Client(6, 'Andiy','Symchuk','sdfghfd',093555555, ['spreed', 'milk','fish','apple']);
// Clients[6] = new Client(7, 'Sergo','Symchuk','sdfghbv',093555555, ['spreed', 'milk']);
// Clients[7] = new Client(72, 'Yuriy','Symchuk','sdfghgfd',093555555, ['spreed', 'milk','fish']);
// Clients[8] = new Client(9, 'Oksana','Symchuk','adfghjk',093555555, ['spreed', 'milk','fish','apple','banan','lemon']);
// Clients[9] = new Client(67, 'Oleg','Symchuk','ewrtyuil',093555555, ['spreed', 'milk','lemon']);
// console.log(Clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

// let sort = Clients.sort(function(a, b) {
//     return a.order.length - b.order.length;
// });
// console.log(sort);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//
// function car(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year_of_manufacture = year_of_manufacture;
//     this.maximum_speed = maximum_speed;
//     this.engine_capacity = engine_capacity;
//     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function  () {
//         console.log(`їдемо зі швидкістю ${this.maximum_speed} на 1 годину`);
//     };
//     // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function (){
//         console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year of manufacture - ${this.year_of_manufacture}, maximum speed - ${this.maximum_speed}, engine capacity - ${this.    engine_capacity}, `);
//     }
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (x) {
//         let newSpeed = this.maximum_speed+x;
// console.log(newSpeed);
//     }
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear =  function (newValue){
// 		this.year_of_manufacture = newValue;
//         console.log(newValue);
// }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver){
// 		this.driver = driver;
//         console.log(driver);
// 	};
//
// };
// let cars = new car('bmw', 'ffff', 2020, 300, '6');
// console.log(cars);
// cars.drive();
// cars.info();
// cars.increaseMaxSpeed(100);
// cars.changeYear(2022);
// cars.addDriver({
// 	name:"Katya",
// 	age : 21
// });


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:


// class Car{
//     constructor(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year_of_manufacture = year_of_manufacture;
//         this.maximum_speed = maximum_speed;
//         this.engine_capacity = engine_capacity;
// }
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maximum_speed} на 1 годину`);
//     };
//     // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     info() {
//         console.log(`
// 			model : ${this.model}
// 			manufacturer : ${this.manufacturer}
// 			year : ${this.year_of_manufacture}
// 			maxSpeed : ${this.maximum_speed}
// 			volumeEngine : ${this.engine_capacity}
// 		`);
//     };
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed){
//         this.maximum_speed += newSpeed;
//         console.log(newSpeed);
//
//
//     };
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear(newValue){
//         this.year_of_manufacture = newValue;
//         console.log(newValue);
//
//     };
//     // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver(driver){
//         this.drive = driver;
//         console.log(driver);
//     }
//
// };
//
// let cars = new Car('bmw Q8', 'bmw', 2020, 300, '6');
// console.log(cars);
// cars.drive();
// cars.info();
// cars.increaseMaxSpeed(200);
// cars.changeYear(2022);
// cars.addDriver({
// 	name:"Katya",
// 	age : 21
// });

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.



function popelushka(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

let Girls = [];
Girls[0] = new popelushka('Anna', 21, 30);
Girls[1] = new popelushka('Katya', 21, 32);
Girls[2] = new popelushka('Vika', 21, 31);
Girls[3] = new popelushka('Diana', 21, 33);
Girls[4] = new popelushka('Oksana', 21, 34);
Girls[5] = new popelushka('Alisa', 21, 35);
Girls[6] = new popelushka('Nastya', 21, 36);
Girls[7] = new popelushka('Sasha', 21, 37);
Girls[8] = new popelushka('Eva', 21, 38);
Girls[9] = new popelushka('Masha', 21, 40);

console.log(Girls);

function princ(name, age, sizeshoe) {

    this.name = name;
    this.age = age;
    this.sizeshoe = sizeshoe;
}
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let Princ = new princ('Nikita', 23, 32);
console.log(Princ);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const girl of Girls){
    if (Princ.sizeshoe === girl.size){
        console.log(`${girl.name} and  ${Princ.name}   love`)
    }
}
