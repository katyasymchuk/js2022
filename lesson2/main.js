/*Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let a = 3;
let box = [1, 6, 1002, 45, true, a, 'Kate', 'Symchuk', 4.09];
console.log(box);
    box [9] = 2.6;
    console.log(box);

console.log(box[0]);
console.log(box[1]);
console.log(box[2]);
console.log(box[3]);
console.log(box[4]);
console.log(box[5]);
console.log(box[6]);
console.log(box[7]);
console.log(box[8]);
console.log(box[9]);

box [3] = 1234;
console.log(box[3]);

/*Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

let book1 = {
    title: 'The witcher',
    pageCount: 288,
    genre: 'Fantasy',
};
let book2 = {
    title: 'Slow burning',
    pageCount: 320,
    genre: 'Detectives',
};
let book3 = {
    title: 'Larissa Ghosts of the past',
    pageCount: 320,
    genre: 'Detectives',
};

console.log(book1, book2, book3);

/*Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age*/
let book4 = {
    title: 'The witcher',
    pageCount: 288,
    genre: 'Fantasy',
    authors : [
        {name:'A. Sapkovskyi'},
        {age: 74}
    ]
};
let book5 = {
    title: 'Slow burning',
    pageCount: 320,
    genre: 'Detectives',
    authors : [
        {name:'P. Hawkins' },
        {age: 40}
    ]
};

let book6= {
    title: 'Larissa Ghosts of the past',
    pageCount: 320,
    genre: 'Detectives',
    authors : [
        {name:'S. Ponomarenko' },
        {age: 67}
    ]
};
console.log(book4, book5, book6);
console.log(book4.authors);
console.log(book5.authors);
console.log(book6.authors);

/*Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
let users = [
    {name:'Kate', username:'katyaa', password:'KaTyA'},
    {name:'Nikita', username:'nakitas', password:'nikitos123'},
    {name:'Taras', username:'tarass', password:'taras22'},
    {name:'Vika', username:'vikavika', password:'VikA'},
    {name:'Nastya', username:'naste', password:'Nastya2456'},
    {name:'Bogdan', username:'bodya', password:'3436538472'},
    {name:'Oksana', username:'oksana2', password:'oksanaoksana'},
    {name:'Sergiy', username:'syrgiy23', password:'sergio432342'},
    {name:'Diana', username:'daiana228', password:'1234567890'},
    {name:'Igor', username:'igorek', password:'0987654321'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



