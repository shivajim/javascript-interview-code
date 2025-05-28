
let numArray = [99,22, 23, 14, 52, 63, 11, 42, 66];

(function (arg) {
    let min = Math.min(...arg);
    console.log(min);
    let max = Math.max(...arg);
    console.log(max);
}(numArray));



function findMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

let min = findMin(numArray);
console.log(min);

function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let max = findMax(numArray);
console.log(max);

