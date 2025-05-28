let arr = ["Akshay", "Ajit"];

    let object = {
        firstName: "Akshay",
        city: "Mumbai",
        getIntro: function() {
            console.log( this.firstName + ' is from '+ this.city);
        }
    }

    let object2 = {
        firstName:"Ajit"
    }

    object2.__proto__ = object;
    console.log(object2.getIntro()); // Ajit is from Mumbai


function fun(){

}

Function.prototype.customeFun = function(){
    console.log('test prototypal inheritance');
}


function fun2(){
}


