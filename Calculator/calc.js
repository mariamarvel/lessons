document.title = 'Калькулятор';
//напишем функцию, для каждого из выводимых значений

function plus() {
    let num1, num2, result;

    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

//преобразуем строку в число при помощи num1 = parseInt(num1); если убрать данную функцию, будет не сложение чисел, а конкатинация строк

//получаем значение параграфа с ответом и записываем туда наш новый ответ при помощи метода innerHTML

function minus() {
    let num1, num2, result;

    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}


function multiply() {
    let num1, num2, result;

    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}

function divide() {
    let num1, num2, result;

    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 / num2;

    document.getElementById('out').innerHTML = result;
}