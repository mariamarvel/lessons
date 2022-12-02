//Задачи ДЗ 29112022
//Задача 1. 
// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
let min = prompt('Введите число от 0 до 59: ');

if (min >= 0 && min <= 15) {
    alert('Ваше число попадает в первую четверть часа.');
}  else if (min > 15 && min <= 30) {
    alert('Ваше число попадает во вторую четверть часа.');
}  else if (min > 30 && min <= 45) {
    alert('Ваше число попадает в третью четверть часа.');
}  else if (min > 45 && min <= 59) {
    alert('Ваше число попадает в четвертую четверть часа.');
} else {
    alert('Error');
}


//Задача 2.
// Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском.


// let lang = prompt('Чтобы вывбрать язык введите ru или en ');
// let arr = ['понедельник ', 'вторник ', 'среда ', 'четверг ', 'пятница ', 'суббота ', 'воскресенье ', 'Monday ', 'Tuesday ' , 'Wednesday ' , 'Thursday ' , 'Friday ' , 'Saturday ', 'Sunday'];

// if (lang == 'ru' ) {
//     alert(arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6]);
// } else if (lang == 'en') {
//     alert(arr[7] + arr[8] + arr[9] + arr[10] + arr[11] + arr[12] + arr[13]);
// } else {
//     alert('Error');
// }


//второй вариант
let lang = prompt('Чтобы вывбрать язык введите ru или en ');
let arr = ['понедельник ', 'вторник ', 'среда ', 'четверг ', 'пятница ', 'суббота ', 'воскресенье ', 'Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday'];
let str = '';
if (lang == 'ru') {
    for (let i = 0; i < 7; i++) {
        str = str + arr[i];
    }
    alert(str);
} else if (lang == 'en') {
    for (let i = 7; i < 14; i++) {
        str = str + arr[i];
    }
    alert(str);
} else {
    alert('Error');
}