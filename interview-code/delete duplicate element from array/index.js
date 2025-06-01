// ========= Delete duplicate element from array
let array = [11, 12, 13, 14, 15, 16, 15, 16, 17, 18];

let unique = [...new Set(array)];
console.log(unique);
console.log(array);


// ========== Delete duplicate element from object

let ar = [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 1 }];

let rr = array.filter((ob, ind, aaa)=> {
    return aaa.indexOf(ob) == ind;
});

console.log("~~~~~~~~~~~~~~~");
console.log(rr);
