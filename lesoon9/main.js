// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартоломю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Марджорі Жаклін «Мардж» Сімпсон (у дівоцтві Бувє) (англ. Marjorie Jacqueline «Marge» Simpson) — постійний персонаж мультиплікаційного серіалу "Сімпсони", її озвучує Джулія Кавнер. Зазвичай носить зелену сукню, червоні балетки, на шиї — намисто зі штучних перлів і їздить помаранчевим універсалом. У неї шикарне синє волосся, яке вона зазвичай збирає в дуже високу зачіску. Очі кольору горіха (19s6e). Основне заняття — домогосподарка, більшу частину часу проводить у турботі про будинок, дітей та Гомера. Мардж копіює стереотип провінційної американської домогосподарки 50-х років. Мардж – єдиний член сім\'ї, який відвідує церкву добровільно. Намагається підтримувати моральність як своєї сім\'ї, а й усього міста. Відмінно готує, особливо славляться її свинячі відбивні та зефір. Улюблена страва – локшина з олією.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ліза Марі Сімпсон (англ. Lisa Marie Simpson) — героїня мультиплікаційного серіалу "Сімпсони". Середня дитина в сім\'ї, восьмирічна дівчинка, що виділяється серед інших Сімпсонів насамперед своїм розумом і розважливістю.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Маргарет Евелін "Меггі" Сімпсон (англ. Margaret Evelyn "Maggie" Simpson) - персонаж мультсеріалу "Сімпсони". Вперше з\'явилася на телебаченні в шоу Трейсі Ульман, в короткометражці Good Night (англ.) рос. 19 квітня 1987 року. Меггі була придумана і розроблена карикатуристом Меттом Грейнінгом, поки він чекав на зустріч з Джеймсом Л. Бруксом. Названа на честь молодшої сестри Грейнінга. Після появи у шоу Трейсі Ульман, через три роки сім\'я Сімпсонів отримала власний серіал на телеканалі Fox, дебют відбувся 17 грудня 1989 року.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//

// let member = document.getElementsByClassName('member')[0];
//
// for (const simpson of simpsons) {
//          let div = document.createElement('div');
//     div.classList.add('Member');
//         let namesurname = document.createElement('h1');
//     namesurname.innerText = simpson.name + "  " +simpson.surname;
//     div.appendChild(namesurname);
//          let agesimpson = document.createElement('h2');
//     agesimpson.innerText = 'Age - '+simpson.age;
//     div.appendChild(agesimpson);
//
//         let infosimpson = document.createElement('p');
//     infosimpson.innerText = simpson.info;
//     div.appendChild(infosimpson);
//
//     let imgsimpson = document.createElement('img');
//
//     imgsimpson.src = simpson.photo;
//     div.appendChild(imgsimpson);
//
//
//
//     member.appendChild(div);
// }
//


//
//
// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let box = document.getElementsByClassName('array')[0];
//
// for (const array of coursesArray ) {
//
//     let div = document.createElement('div');
//     div.classList.add('arrays');
//
//
//
//     let arraytitle = document.createElement('h3');
//     arraytitle.innerText = array.title;
//
//     div.appendChild(arraytitle);
//
//    let newDiv = document.createElement('div')
//     newDiv.className = 'box'
//     div.appendChild(newDiv);
//
//     let boxmoth = document.createElement('p');
//     boxmoth.innerText = 'Триває ' + ' - ' + array.monthDuration + '  місяців ';
//     newDiv.appendChild(boxmoth);
//
//     let boxhour = document.createElement('p');
//     boxhour.innerText = 'Триває' + ' - ' + array.hourDuration + '  годин ';
//     newDiv.appendChild(boxhour);
//
//     let ul = document.createElement('ul');
//     div.appendChild(ul);
//     for (const item of array.modules){
//         let li = document.createElement('li');
//         li.innerText = item;
//         div.appendChild(li);
//     }
//
//
//     box.appendChild(div);
//
//
// }




// ------------------
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//




// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
//
//
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)