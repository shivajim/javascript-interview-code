// var startTime = Date.now();
// for (var i = 0; Date.now() - startTime < 5000; i++) {
//     // if(i === 0 || i%1000 === 0 ){
//     //     console.log(i);
//     // }
//     console.log(i);
// }
console.log('END');
function outer() {
    let outer_count = 0;
    function eventListener() {
        let count = 0;
        document.getElementById("clickMe").addEventListener("click", function xyz() {
            console.log("clicked ==   " + ++count);
            console.log("clicked ==  outer count  " + ++outer_count);
        });

    }
    eventListener();
}
outer();
