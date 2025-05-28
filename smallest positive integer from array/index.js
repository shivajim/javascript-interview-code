let array =[];

function smallestPositiveInteger(arr) {
    let count = 1;
    if(!arr?.length) {
        console.log('IF ');
        return count;
    }
    while(arr.indexOf(count) !== -1) {
        count ++;
    }
    return count;
}

let res = smallestPositiveInteger(array);
console.log(res);


var foo;
function foo(){}
console.log(foo);

let aaa = ["1", "2", "3"];

let rrrr = aaa.map(parseInt);
console.log(rrrr);

let numbers  = [1,4,9];

let doubles = numbers.map(function(num){
    return num * 2;
});

console.log(numbers);
console.log(doubles);

for(var i = 0; i< 3; i++){
    var log = function(){
        console.log(i);
    }
    setTimeout(log, 100);
}


var ar1= 'johan'.split('');
var ar2 = ar1.reverse();
var ar3 = 'jones'.split('');
ar2.push(ar3);
console.log(ar1.length);
console.log(ar1.slice(-1));
