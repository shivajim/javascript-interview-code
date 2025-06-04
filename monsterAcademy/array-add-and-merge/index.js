// Adding numbers to array
function append (el, obj) {
  obj.push(el);
  return [...obj, el];
}

const array = [1,2];
const newArray = append(3, array);
console.log(newArray);
console.log(array);


const ar1 = [2,4,54,6];
const ar2 = [555,55,50,5];
const ar3 = [100];

const mergeArray =(array1, array2, array3) => {
  // const re = [...array1, ...array2];
  const re = array1.concat(array2, array3);
  return re;
}

const result = mergeArray(ar1, ar2, ar3);

console.log(ar1);
console.log(ar2);

console.log(result);