let array = [1, , ' KJSD', true, 2, 5, { test: 'test' }, 9];
console.log();
let result = array.reduce((sum, value) => {
    if (typeof value === 'number') {
        sum = sum + value;
    }
    return sum;
}, 0);

console.log(result);
