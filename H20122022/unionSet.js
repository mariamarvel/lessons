//Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
let numFirst = +prompt('Введите первое число:');
let numSecond = +prompt('Введите второе число:');
function example(numFirst, numSecond) {
    if (numFirst % 2 == 0 && numSecond % 2 == 0) {
        return (numFirst * numSecond);
    } else if (numFirst % 2 != 0 && numSecond % 2 != 0) {
        return (numFirst + numSecond);
    } else if (numFirst % 2 != 0 ) {
        return numFirst;
    } else {
        return numSecond;
    }
}
alert(example(numFirst, numSecond));


//Реализуйте функцию union(), которая объединит уникальные элементы всех массивов, переданных ей.  Пример: union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт  [1, 2, 3, 101, 10].
let arrOne = [1, 2, 2, 3];
let arrTwo = [101, 2, 1, 10];
let arrThree = [2, 1];
function union(arrOne, arrTwo, arrThree) {
    let arrMid = arrOne.concat(arrTwo, arrThree);
    alert(arrMid);

    arrMid = new Set(arrMid);
    for (let number of arrMid) {
        console.log(number);
    }
}
union(arrOne, arrTwo, arrThree);