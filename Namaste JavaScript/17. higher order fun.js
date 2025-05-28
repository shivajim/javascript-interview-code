const radius = [3, 1, 2, 4];

const  Area = (radius) => {
    return Math.PI * radius * radius;
}

const Circumference = (radius) => { 
    return 2 * Math.PI * radius;
}

// const calculateArea = (radius) => {
//     const area = [];
//     for (i = 0; i < radius.length; i++) {
//         area.push(Area(radius[i]));
//     }
//     return area;
// }

Array.prototype.calculate = function (logic) {
    const result  = [];
    for(i = 0; i< this.length; i++){
        result.push(logic(this[i]));
    }
    return result;
}

console.log(radius.calculate(Area));
console.log(radius.calculate(Circumference));
// console.log(radius.map(Area));

// const calculateCircumference = (radius) => {
//     const circumference = [];
//     for (i = 0; i< radius.length; i++) {
//         circumference.push(2 * Math.PI * radius[i]);
//     }
//     return circumference;
// }

// console.log(calculateCircumference(radius));


