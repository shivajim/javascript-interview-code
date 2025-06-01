// Normal function 

const addition = a => b=> a + b;
console.log(addition(10)(20));


// FUNCTION CURRYING 

const curry = (fun)=> {
  const fl = fun.length; 
  return function f1(...arg) {
  
    if(arg.length >= fl) {
      return fun(...arg);
    } 
    else {
      return function f2(...x){
        let re = arg.concat(x);
        //  console.log(...re);
        return f1(...re);
      }
    } 
  }
}

const curriedSum = curry((a, b, c)=> a + b + c);
const partiallyCurried = curriedSum(2);
console.log(partiallyCurried(4, 3));

// FUNCTION CURRYING on OBJECT 



const sampleObj = [{id: '2', name: 'HJ', add: 'Pune'}, {id: '3', name: 'SDA', add: 'Hadapsar'}];

const get = curry((prop, obj)=> obj[prop]);
const map = curry((f, values)=> values.map(f));
const getId = get('id');
const getIds = map(getId);

const getName = get('name');
const getNames = map(getName);

console.log(getIds(sampleObj));
console.log(getNames(sampleObj));


// Adding numbers to array
{

  function append (el, obj) {
    obj.push(el);
    // return obj;
    return [...obj, el];
  }

const array = [1,2];
const newArray = append(3, array);
  console.log(newArray);
  console.log(array);
}