
let str = 'Helloworld';

function returnCountJSON(str) {
    let strArr = str.split('');
    console.log(strArr);

    let result =  strArr.reduce((total, value) => {
        if (json[value]) {
            json[value] = json[value] + 1;
        } else {
            json[value] = 1;
        }
        return json;
    }, json = {});
    
    let max = 0, charArr = [];
    for(let key in result) {
        if(json[key] === max) {
            charArr.push(key);
        }
        if(json[key] > max){
            max = json[key];
            charArr.push(key);
        }
    };
    console.log(charArr);
    // return char;
}

let ans = returnCountJSON('testsample');
console.log(ans);