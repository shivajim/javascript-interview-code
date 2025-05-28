let array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 69, 1, 2, 11, 3, 4, 5];

function findFirstNonReapeatedNumber(numbers) {
    let length = numbers.length;
    for (let i = 0; i < length; i++) {
        let j;
        for (j = 0; j < length; j++) {
            if (numbers[i] === numbers[j] && i != j) {
                console.log(numbers[i]);
                break;
            } else {
                console.log('=== ' + i + ' ==== ' + j);
            }
        }
        if (j === length) {
            return numbers[i];
        }
    }
    return -1;
}
let result = findFirstNonReapeatedNumber(array);
console.log(result);

console.log("@@@@@@@@@@@@@@@");

//  Using Map Hashing

function findFirstNonReapeatedNumberMap(ary, length) {
    const m = new Map();
    for (let i = 0; i < length; i++) {
        if (m.has(ary[i])) {
            m.set(ary[i], m.get(ary[i]) + 1);
        } else {
            m.set(ary[i], 1);
        }
    }
    for(let cnt = 0 ; cnt < length;  cnt ++) {
        if(m.get(ary[cnt]) == 1) {
            return ary[cnt];
        }
    }

    return  -1;
}

let mapRes = findFirstNonReapeatedNumberMap(array, array.length);
console.log(mapRes);