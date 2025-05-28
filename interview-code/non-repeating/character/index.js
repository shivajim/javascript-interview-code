let str = 'jdfghdjdfgkhd';


function findFirstNonReapeatedChar(string) {
    for(let c = 0; c < string.length; c++){
        let char = string.charAt(c);
        if(string.indexOf(char) === c && string.indexOf(char, c + 1) == -1) {
            return char;
        }
    }
} 

let res = findFirstNonReapeatedChar(str);
console.log(res);