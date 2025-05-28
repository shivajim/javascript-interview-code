   function fullName(homeTown, state) {
        return this.firstName + ' '+ this.lastName + ' ' + homeTown +' '+state;
    }

    // ======================================================================

    // APPLY

    let user = {
        firstName: 'AST',
        lastName: 'Tets',
    }
    const address = ['Pune', 'Maha'];

    console.log('============ APPLY ====================');
    let userFullName = fullName.apply(user, address);
    console.log(userFullName);
    console.log(userFullName.fullName);

    // CALL method in 
    let admin = {
        firstName: 'CMM',
        lastName: 'PP'
    }
    fullName.call(admin, 'Mumbai', ' MH ');

    console.log('============ CALL ====================');
    let adminFullName = fullName.call(admin, 'Mumbai', ' MH ');

    console.log(adminFullName);
    console.log(admin.fullName);

    // BIND  method 

    let peon = {
        firstName: 'LA',
        lastName: 'PP'
    }
    console.log('================ BIND =================');
    let peonFullName = fullName.bind(peon, 'Pune', 'Maha');
    console.log(peonFullName());



