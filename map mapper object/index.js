
const string= "EC:B0:8T:E4";
const mapper = {
    E: 0,
    T: 0,
}

const strArray = string.split('');
const mapperObject = Object.keys(mapper);

console.log(strArray);
console.log(mapperObject);

let result  =  strArray.map((strChar)=>{
    if(mapperObject[0] === strChar){
        return mapper[mapperObject[0]];
    } else if(mapperObject[1] === strChar){
        return mapper[mapperObject[1]];
    } else {
        return strChar;
    }
});

console.log(result.join(''));
