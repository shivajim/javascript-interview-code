let a = 100;
// const a = 100;
function bb(){ 
    const a = 300; 
    function aa(){
        const  a = 10;
        console.log(a);
    }
    console.log(a);
    aa();
} 
bb();
console.log(a);
console.log(a);
