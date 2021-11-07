'use strict';

//Напишите функцию которая полностью имитирует работу метода:

// indexOf     Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

const arr = [1, 2, `Lina`, `Max`, 3];

function indexOf(array, item, fromIndex = null) {
    fromIndex === null ? fromIndex = 0 : null;

    for (let i = fromIndex; i <= array.length - 1; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}
console.log(indexOf(arr, `Max`, 0));





// lastIndexOf                    то же, что и indexOf, только поиск идет справа налево

// const arr = [1, 2, `Lina`, `Max`, 3];

// function indexOf(array, item, fromIndex = null) {
//     fromIndex === null ? fromIndex = array.length - 1 : null;

//     for (let i = fromIndex; i >= 0; i--) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(indexOf(arr, `Max`, -1));





// find  Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.
//       В противном случае возвращается undefined.


// const arr = [1, 2, `Lina`, `Max`, 3];

// function task(item, Index, array) {
//     return item === `Max` ? true : false;
// }

// function find(array, taskFunc) {

//     for (let i = 0; i <= array.length - 1; i++) {
//         if (task(array[i], i, array) === true) {
//             return array[i];
//         }
//     }
//     return undefined;
// }
// console.log(find(arr, task));




// findIndex   Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. 
//             В противном случае возвращается -1.


// const arr = [1, 2, `Lina`, `Max`, 3];

// function task(item, Index, array) {
//     return item === `Max` ? true : false;
// }

// function find(array, taskFunc) {

//     for (let i = 0; i <= array.length - 1; i++) {
//         if (task(array[i], i, array) === true) {
//             return i;
//         }
//     }
//     return undefined;
// }
// console.log(find(arr, task));





// includes    Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.


// const arr = [1, 2, `Lina`, `Max`, 3];

// function includes(item, fromIndex = 0, array) {

//     for (let i = fromIndex; i <= array.length - 1; i++) {
//         if (array[i] === item) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(includes(`Max`, 0, arr));





// every   Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.


// const arr = [1, 2, 3, 4, 66];

// function task(item) {
//     return item > 10 ? false : true;
// }


// function every(array, taskFunc) {

//     for (let i = 0; i <= array.length - 1; i++) {
//         if (taskFunc(array[i]) === false) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(every(arr, task));




// some        Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.


// const arr = [1, 2, 3, 4, 66];

// function task(item) {
//     return item > 10 ? true : false;
// }

// function some(array, taskFunc) {

//     for (let i = 0; i <= array.length - 1; i++) {
//         if (taskFunc(array[i]) === true) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(some(arr, task));