// //Задача 1. Запрсите у пользователя 2 числа и выведите их сумму (через функцию)

let a = + prompt('Введите первое число: ');
let b = + prompt('Введите второе число: ');

function twoNumbers(a, b) {
    return a + b;
}

alert(twoNumbers(a, b));


// Задача 2. Напишите функцию js которая проверяет является ли эта строка палиндромом? (читается с задом на перед)
let word = prompt('Введите слово: ');

function reverseString(word) {//palindrome()
    let splitString = word.split('');// .split(word),разделить слово, что б получить массив из строки
    let reverseArray = splitString.reverse(); //.reverse() развернуть элементы массива наоборот
    let joinArray = reverseArray.join('');//.join('') соеденить элементы массива в слово
    alert('Перевернутое слово - ' + joinArray);//возврат 


    if (word == joinArray) {
        alert('Это слово палиндром');
    } else {
        alert('Это заурядное слово, НЕ палиндром');
    }
}

reverseString(word);


