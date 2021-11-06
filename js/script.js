'use strict';

//Напишите функцию которая полностью имитирует работу метода:

// indexOf

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


// lastIndexOf

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


// find

// const arr = [1, 2, `Lina`, `Max`, 3];

// function find(item, fromIndex = 0, array) {

//     for (let i = fromIndex; i <= array.length - 1; i++) {
//         if (array[i] === item) {
//             return item;
//         }
//     }
//     return undefined;
// }
// console.log(find(`Max`, 0, arr));


// findIndex

// const arr = [1, 2, `Lina`, `Max`, 3];

// function find(item, fromIndex = 0, array) {

//     for (let i = fromIndex; i <= array.length - 1; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(find(`Lina`, 0, arr));


// includes

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


// every

// const arr = [1, 2, 3, 4, 66];

// function task(item) {
//     if (item > 10) {
//         return false;
//     }
//     return true;
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


// some

// const arr = [1, 2, 3, 4, 66];

// function task(item) {
//     if (item > 10) {
//         return true;
//     }
//     return false;
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