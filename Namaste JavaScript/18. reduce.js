 

    const users = [ 
        {firstName: 'Ajit', lastName: 'Sakhare', age: 26},
        {firstName: 'Sukanta', lastName: 'Shelar', age: 71},
        {firstName: 'Manisha', lastName: 'Kudale', age: 50},
        {firstName: 'Sami', lastName: 'Katak', age: 26},
    ];

    // reduce Example

    const result  = users.reduce((res, obj) => {
        if(res[obj.age]) {
            res[obj.age] = res[obj.age] + 1; 
        } else{
            res[obj.age] = 1;
        }
        return res;
    }, {});

    console.log(result);


    // Map  Example

    const fullNameList = users.map((user)=> user.firstName + ' ' + user.lastName);

    console.log(fullNameList);


    // filter Example 

    const filterResult  = users.filter((user)=> {
        if(user.age > 40){
            user.pension = 'yes'
        }
        return user;
    });

    console.log(filterResult);

    // AGAIN reduce
    const fistNameResult = users.reduce((res, user)=>{
        if(user.age < 30) {
            res.push(user.firstName);
        }
        return res;
    }, []);

    console.log(fistNameResult);
    