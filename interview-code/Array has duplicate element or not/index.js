let array = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9];

// Using Set

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

let res = hasDuplicate(array);
console.log(res);


// Using for loop

function isDuplicateElement(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) !== -1) {
            console.log(i);
            console.info(temp);
            return true;
        }
        temp.push(arr[i]);
    }
    return false;
}

let r = isDuplicateElement(array);
console.log(r);