const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

Array.prototype.calculate = function (logicFun) {
    const result = [];
    for(let i = 0; i < this.length; i++ ) {
        result.push(logicFun(this[i]));
    }
    return result;
}

const radius = [2, 5, 8, 10];
// console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
