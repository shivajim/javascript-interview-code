let array = [1, 2, 3, 44, 15, 32, 12, 11, 26 ];

console.log("================ USING Sort function"); 
console.log(array);
let re = array.map(Number);
console.log(re);
let sorted = array.map(Number).sort((a, b)=>b-a)[1];
// console.log(sorted);


// ================ USING  Max function

let maxFunResult  = Math.max.apply(null,array);
console.log(maxFunResult);
let maxRemovedArray = array.splice(array.indexOf(maxFunResult), 1);

console.log(array[0]);