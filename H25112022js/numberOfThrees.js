//1 математический способ
let a = prompt('Введите трёхзначное число:');

let units = (a % 10);
let interval = (a - units) / 10;
let dozens = (interval % 10);
let hundreds = (interval - dozens) / 10;

document.write(hundreds, ', ', dozens, ', ', units);


//2 способ
let n = prompt('Введите трёхзначное число:');

function numberString(n) {
    let str = n.substr(0, 1) + ', ' + n.substr(1, 1) + ', ' + n.substr(2, 1);//(индекс первого элемента, на сколько шагнуть(длинна подстроки))
    document.write(str);
}
numberString(n);


//3 способ
//let a = prompt('Введите трёхзначное число:');

// function numberToObject(a) {
//     if (a <= 999 && a > 0) {
        // let b = {
        //     hundreds() {
        //         hundred = Math.floor(a / 100);//отделение наименьшего
        //         document.write(hundred);
        //         document.write(', ');
        //     },
        //     dozens() {
        //         dozen = Math.floor((a - (hundred * 100)) / 10);
        //         document.write(dozen);
        //         document.write(', ');//return dozen;
        //     },
        //     units() {
        //         unit = a - ((hundred * 100) + (dozen * 10));
        //         document.write(unit);
        //     }
        // };
        // b.hundreds();
        // b.dozens();
        // b.units();
        

//     };
// };

//numberToObject(a);




