// ============================================================== USING reduce

let array = [1, 2, 5, 3, 6, 7, 8, 9, 4, 12, 19, 15, 17, 16, 14];
let array1 = [1, 2, 5, 9];

// let result = array.reduce((count, b, ind) => {
//     if(b % 2 === 0) {
//         console.log(count);
//         console.log(b);
//         count++;    
//     }
// }, 0);

let eventCount = 0, oddCount = 0;
let result = array1.reduce((count, b) => {
    if (oddEven(b) === 'evenCount') {
        count['oddCount'] = ++eventCount;
    } else {
        count['evenCount'] = ++oddCount;
    }
    return count;
}, {});

function oddEven(num) {
    if (num % 2 === 0) {
        console.log();
        return 'oddCount';
    } else {
        return 'evenCount'
    }
}

console.log(result);





