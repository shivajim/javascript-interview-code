// May 2025

var missingNumber = function(nums) {
    const n = nums.length;
    console.log(n);
    const Tsum = (n * (n + 1)) / 2;
    console.log(Tsum);
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    console.log(actualSum);
    return Tsum - actualSum;
};

const ar = [3,0,5,4,1]

const num = missingNumber();

console.log(num);

// Function to get the missing number
function getMissingNo(a, n) {

    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= a[i];
    return total;
}

// Driver Code

let arr = [11, 12, 13, 15];
let N = arr.length;
let miss = getMissingNo(arr, N);
console.log(miss);


// // Function to find the missing number
// function findMissing(arr, N) {
//     let i;
//     let temp = [];
//     for (i = 0; i <= N; i++) {
//         temp[i] = 0;
//     }
//     console.log(temp);

//     for (i = 0; i < N; i++) {
//         temp[arr[i] - 1] = 1;
//     }
//         console.log(temp);

//     let ans = 0;
//     for (i = 0; i <= N; i++) {
//         if (temp[i] == 0)
//             ans = i + 1;
//     }
//     console.log(ans);
// }

// // Driver code
// let arr = [11, 13, 17, 15, 16, 12];
// let n = arr.length;

// // Function call
// findMissing(arr, n);




