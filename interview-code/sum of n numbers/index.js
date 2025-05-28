let sum = 0;
let sumOfNumbers = function (n) {

    if (n > 0) {
        sum = sum + n;
        n--;
        sumOfNumbers(n);
    }
    return sum;

}


let ans = sumOfNumbers(5);
console.log(ans);



//  Miscrosoft INERVIEW QUESTION

let micro_sum = function(a) {
    return function(b) {
        return  b ? micro_sum(a+b) : a;
    }
}
let f = micro_sum(1)(2)(3)(4)(4)(4)(4)(4)();
console.log(f);

let fun_es6_ms = a => b=> {return b? fun_es6_ms(a + b): a};

// let ans_es6_ms = fun_es6_ms(1)(2)(3)(4)(4)(4)(4)(4)();
console.log(fun_es6_ms(1)(2)(3)(4)(4)(4)(4)(4)());