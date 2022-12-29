// //Объекты {key:item} приближенный к реальности, что можно запросить
// const objCompany = {
//     director: 'Ivanov',
//     manager: 'Petrov',
//     cars: [
//         { mark: 'Audi', price: 15000000, color: 'blue' },//каждая фигурная скобка это определённый индекс 0, 1, 2 
//         { mark: 'BMW', price: 20000000, color: 'white' },
//         { mark: 'Opel', price: 18000000, color: 'yellow' }],//что б дать ключу несколько значений, нужно их заключить в массив внутри которого будет объект
//     stuff: {
//         role: 'cleaner', age: 45, name: 'Ivan'
//     },
//     adress: 'Spb, Lelin ave'

// }
// //вывести в консоль стоимость 'BMW'
// //objCompany.;

//         //console.log(objCompany.cars[1].price);//весь объект->машины индекс элемента -> ключь цена, тк нам нужна именно цена

// //имя уборщика
// console.log(objCompany.stuff.name);//уборщик всего один, поэтому без индекса элемента

// //добавим в объект новый элемент(новую машину например)
// // obj.country = 'ru'; // добавит новый ключ "country" в объект cо значением "ru"
// // obj['city'] = 'Moscow'; // так же добавит новый ключ, только "city" со значением "Moscow"

// objCompany.cars.push({mark: 'Reno', price: 10000000, color: 'red'});//.push добавить
// console.log(objCompany);

//ДЗ от 24 января
//1) напишите функцию для удаления переданного в параметры ключа из переданного объекта

const tour = {
    director: 'Ivanov',
    manager: 'Petrov',
    members: [
        { age: 36, name: 'Oleg', surname: 'Rokotov' },//каждая фигурная скобка это определённый индекс 0, 1, 2 
        { age: 25, name: 'Irina', surname: 'Zolotina' },
        { age: 14, name: 'Mark', surname: 'Gribov' }],//что б дать ключу несколько значений, нужно их заключить в массив внутри которого будет объект
    track: {
        start: 'Murmansk', distance: 120, finish: 'Guest House'
    },
    adress: 'Spb, Lenin ave.'
}

function deleteParam(object, param) {
    delete object[param];
};
deleteParam(tour, 'manager');
console.log(tour);

//2) напишите функцию которая принимает объект и возвращает его длину

let person = { gender: 'male', age: 26, height: 175, name: 'Ivan', surname: 'Petrov', married: 'yes' };

function getLengthFunction(object) {
   return Object.keys(object).length;
};
console.log(getLengthFunction(person));

//3)напишите функцию которая принимает url а возвращает данные с сервера(вытаскиваем другого покемона)
const pokemon = fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash');
pokemon.then((result) => result.json())
.then((result) => console.log(result));

console.log(pokemon);

