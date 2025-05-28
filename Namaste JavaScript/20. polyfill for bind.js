let user = {
    fistName: 'PD',
    lastName: 'DH'
}

function fullName(city, state, country, continent) {
    console.log(this.fistName + ' ' + this.lastName + ' ' + city + ' ' + state + ' ' + country + ' ' + continent);
}

let bindResult = fullName.bind(user, 'Pune', 'MH');
// bindResult('', '');
// bindResult('IND', 'Asia');


Function.prototype.myBind = function (...args) {
    let obj = this, params = args.slice(1);
    console.log('------ params -----');
    console.log(params);
    console.log('------ args[0] -----');
    console.log(args[0]);

    return function(){
        obj.apply(args[0], params);
    }
    // return function (...ags) {
    //     console.log('------ ags -----');
    //     console.log(ags);
    //     obj.apply(args[0], [...params, ...ags]);
    // }
}

let myBindResult = fullName.myBind(user, "Pune", 'MH');
console.log(myBindResult());
// myBindResult('IND', 'Asia');