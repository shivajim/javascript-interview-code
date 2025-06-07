
const unique = (array)=>  {
    return [...new Set(array).values()];
}
array = [3,4,2,4];

console.log(unique(array));


const uniqueArry = (array) => {
    return array.reduce((acc, el)=> {
        return acc.includes(el)? acc: [...acc, el];
    }, [])
}

console.log(uniqueArry(array));