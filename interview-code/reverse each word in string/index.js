
const string = "Thi is test string to reverse";

const  reverseStr = (str, subStr)=> {
    return str.split(subStr).reverse().join(subStr);
}

const str1 =  reverseStr(string, " ");
// console.log(str1);

const str2 = reverseStr(str1, ' ');

console.log(str2);



const reverseStr1 = (str, substr) => {
    return str.split(substr).reverse().join(substr)
  }
  let str = "welcome to this javascript series!"
  let str11 = reverseStr1(str, " ");
  let str22 = reverseStr1(str11," ");
  console.log(str22)