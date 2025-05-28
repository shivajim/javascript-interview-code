
let i = 0;
function timecount(){
    i = i + 1;
    console.log(i);
    postMessage(i);
    setTimeout(()=>{
        timecount()
    }, 500);
}

timecount();