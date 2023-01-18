document.title = 'Таблица';

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

//добавляем дочерний узел, в схему таблицы(заголовок и тело)
table.appendChild(thead);
table.appendChild(tbody);

//добавляем таблицу в body html
document.getElementById('body').appendChild(table);

//создаём строки и их содержимое
let lineFirst = document.createElement('tr');

let headingFirst = document.createElement('th');
headingFirst.innerHTML = 'Столбец 1';

let headingSecond = document.createElement('th');
headingSecond.innerHTML = 'Столбец 2';

let headingThird = document.createElement('th');
headingThird.innerHTML = 'Столбец 3';
headingThird.style.background = '#7B68EE';

//добавляем дочерний узел заголовок в первую строку,  что б отобразить на странице
lineFirst.appendChild(headingFirst);
lineFirst.appendChild(headingSecond);
lineFirst.appendChild(headingThird);
thead.appendChild(lineFirst);

//создаём вторую строку
let lineSecond = document.createElement('tr');

let dataFirst = document.createElement('td');
dataFirst.innerHTML = 'Клетка 1';
dataFirst.style.background = '#FF8C00';

let dataSecond = document.createElement('td');
dataSecond.innerHTML = 'Клетка 2';

let dataThird = document.createElement('td');
dataThird.innerHTML = 'Клетка 3';

//добавляем дочерний узел заголовок во вторую строку(уже в тело таблицы), что б отобразить на странице
lineSecond.appendChild(dataFirst);
lineSecond.appendChild(dataSecond);
lineSecond.appendChild(dataThird);
tbody.appendChild(lineSecond);

//создаём третью строку
let lineThird = document.createElement('tr');

let dataFirstLine3 = document.createElement('td');
dataFirstLine3.innerHTML = 'Клетка 4';

let dataSecondLine3 = document.createElement('td');
dataSecondLine3.innerHTML = 'Клетка 5';
dataSecondLine3.style.background = '#FF8C00';

let dataThirdLine3 = document.createElement('td');
dataThirdLine3.innerHTML = 'Клетка 6';

//добавляем дочерний узел заголовок в третью строку(уже в тело таблицы), что б отобразить на странице
lineThird.appendChild(dataFirstLine3);
lineThird.appendChild(dataSecondLine3);
lineThird.appendChild(dataThirdLine3);
tbody.appendChild(lineThird);


//меняем цвет

function changeColorBlue() {
    var cell = document.getElementsByTagName("th");
    for (var i = 0; i < cell.length; i++) {
        cell[i].onclick = function (evt) {
            evt.target.style.background = 'blue';
        }
    }
    
}
changeColorBlue();


function changeColorRed() {
    var cell = document.getElementsByTagName("td");
    for (var i = 0; i < cell.length; i++) {
        cell[i].onclick = function (evt) {
            evt.target.style.background = '#DC143C';
        }
    }
}

changeColorRed();