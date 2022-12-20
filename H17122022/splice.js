//pop shift
//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе. (.concat(arg1, arg2, ...))
let arrStr = ['a', 'b', 'c'];
let arrNum = [1, 2, 3];
alert(arrStr.concat([arrNum]));


//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arrAbc = ['a', 'b', 'c'];
arrAbc.push(1, 2, 3);
alert(arrAbc);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let array = [1, 2, 3];
array.reverse(); //.reverse() развернуть элементы массива наоборот
alert(array);

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arrayEnd = [1, 2, 3];
arrayEnd.push(4, 5, 6);
alert(arrayEnd);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arrayStart = [1, 2, 3];
arrayStart.unshift(4, 5, 6);
alert(arrayStart);

//Работа с slice
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let arrNumber = [1, 2, 3, 4, 5];
alert(arrNumber.slice(0, 3));

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let arrNumberEnd = [1, 2, 3, 4, 5];
alert(arrNumberEnd.slice(-2));

//splice
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let arrNumberSplice = [1, 2, 3, 4, 5];
arrNumberSplice.splice(1, 2);
alert(arrNumberSplice);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
let arrNumberMiddle = [1, 2, 3, 4, 5];
let deleteArr = arrNumberMiddle.splice(1, 3);
alert(deleteArr);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arrFive = [1, 2, 3, 4, 5];0
arrFive.splice(2, 0, 'a', 'b', 'c');
alert(arrFive);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arrFiveTwo = [1, 2, 3, 4, 5];
arrFiveTwo.splice(1, 0, 'a', 'b');
arrFiveTwo.splice(5, 0, 'c');
arrFiveTwo.splice(7, 0, 'e');
alert(arrFiveTwo);