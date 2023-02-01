document.title = 'To Do list';
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;
//добавим обработчик событий, на кнопку
btn.addEventListener('click', (e) => {
    console.log(input.value);
    if (input.value == '') return;
    // result.innerHTML += `<li>${input.value}</li>`;//выводим в список

    createDeleteElements(input.value);
    input.value = ''; //очишает строку ввода
})

//функция ,создаёт ДОМ дерево + Создание и удаление элементов
function createDeleteElements(value) {
    console.log();
    i++;
    const btn = document.createElement('button');
    const li = document.createElement('li');
    li.className = 'li';//создаётся узел
    li.textContent = value; //создаётся новый элемент со своим значением введенным с клавиотуры


    btn.className = 'btn';//создаётся новая кнопка в каждом пункте списка
    btn.textContent = 'Done';
    li.appendChild(btn);

    //Удаление элемента
    btn.addEventListener('click', e => {
        console.log(li);//сюда каждый раз попадает кликнутый элемент
        i--;
        total.textContent = i;
        
        result.removeChild(li); //удалить у result дочерний узел
       
    })

    li.addEventListener('click', e => {
        li.classList.toggle('li-active');//toggle отображает или скрывает выбранные элементы
    })

    total.textContent = i;
    result.appendChild(li);

}