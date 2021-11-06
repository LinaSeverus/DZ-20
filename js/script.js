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

// const arr = [1, 2, 3, `someStr`];

// function every(array) {

//     for (let i = 0; i <= array.length - 1; i++) {
//         if (isNaN(array[i])) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(every(arr));


// some

// const arr = [1, 2, 3, 4, `someStr`];

// function some(array) {

//     for (let i = 0; i <= array.length - 1; i++) {
//         if (array[i] === 3) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(some(arr));