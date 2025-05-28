// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function test(xx) {
//             setTimeout(() => {
//                 console.log(xx);
//             }, xx * 1000);
//         }
//         test(i);
//     }
// }
// x();



// CLOSURE ADDVANTAGE: ENCAPSULATION / DATA HIDING

// function counterHide() {
//     let cnt = 0;
//     this.incrementCounter = () => {
//         cnt++;
//         console.log(cnt);
//     }

//     this.decrementCounter = () => {
//         cnt--;
//         console.log(cnt);
//     }
// }
// var f1 = new counterHide();
// f1.incrementCounter(); f1.incrementCounter(); f1.decrementCounter(); 
// console.log('===========================');
// var f2 = new counterHide();
// f2.incrementCounter(); f2.decrementCounter();f2.incrementCounter();f2.decrementCounter();



// CLOSURE DISDVANTAGE: Doesn't clear the memory. 
function garbageCollectorFunction(){
    var a=5; var b = 10;
    return function gbInner(b){
        console.log(a);
    }
}

var x = garbageCollectorFunction();

var y = x;
y();
// console.log(y);

for(var  i = 0; i< 5; i++){
    function x(i){
        setTimeout(()=>{
            console.log(i + ' Time test  '+ new Date().getMilliseconds());
        }, i * 1000);
    }
    x(i);
}