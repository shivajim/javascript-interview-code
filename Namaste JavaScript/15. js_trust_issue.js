
console.log('START');

setTimeout(()=>{
    console.log('Callback');
}, 5000);

console.log('END');

let startDate = new Date().getTime();
let endDate =  startDate;


while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log('While expired');
