function rot13(str) {

    var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];

    var alphabets13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];

    var resultStr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            if (str[i] === alphabets[j]) {
                resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");
};

let res = rot13("SERR CVMMN!");

console.log(res);

function cipherRot13(str) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);

    function rot13(correspondance) {
        const charCode = correspondance.charCodeAt();
        //A = 65, Z = 90
        return String.fromCharCode(
            ((charCode + 13) <= 90) ? charCode + 13
                : (charCode + 13) % 90 + 64
        );

    }
}

let res1 = cipherRot13("SERR CVMMN!");

console.log(res1);


function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        console.log(countArray);
        countArray.unshift(n);
        return countArray;
    }
}

let ans = countup(5);
console.log(ans);


// Input =   [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
// OUTPUT  = [5,26,39, 1001]

