const add = (arg)=> {
  return  (x) => {
    return arg + x;
  }
}

const addByTwo = add(2);
console.log(addByTwo(10));

console.log(addByTwo(20));
