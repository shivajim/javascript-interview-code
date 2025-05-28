
// ============================================================== USING JS Filter

// let array = [1, 2, 5, 3, 6, 7, 8, 9, 4, 12, 19, 15, 17, 16, 14];

let t1 = new Date().getTime();
let array = [];
let i = 0;
while (i <= 1000000) {
    array.push(i);
    i++;
}


let evenNumbers = array.filter((num) => num % 2 === 0);

console.log(evenNumbers);
let t2 = new Date().getTime();
console.log((t2 - t1) / 1000);
// ============================================================== USING SIMPLE forEach

let tm1 = new Date().getTime();

let array1 = [];
let cnt = 0;
while (cnt <= 1000000) {
    array1.push(cnt);
    cnt++;
}

let evenList = [];
array1.forEach((num) => {
    if (num % 2 === 0) {
        evenList.push(num);
    }
});
console.log(evenList);
let tm2 = new Date().getTime();
console.log((tm2 - tm1) / 1000);
