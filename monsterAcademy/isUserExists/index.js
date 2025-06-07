const isUserExist = (user, userArray) => userArray.some((us)=> us.name===user);


const users = [{name: 'John'}, {name: 'tom'}];

console.log(isUserExist('John', users));

