    // USING bind method

    function mutiply(x, y) {
        console.log(x * y);
    }

    let mutiplyByTwo = mutiply.bind(this, 2);
    let mutiplyByThree = mutiply.bind(this, 3);
    let mutiplyByFour = mutiply.bind(this, 4);
    mutiplyByTwo(10);
    mutiplyByThree(10);
    mutiplyByFour(10);


    // Using closure
    function appraisalByPercent (per) {
        return function(salary){
            return per+salary;
        }
    }

    function bonus(bonas, ctc){
        return bonas + ctc; 
    } 

    let managersList = [
        {name: 'AA', designation: 'Manager', ctc: 200},
        {name: 'BB', designation: 'Manager', ctc: 300},
        {name: 'CC', designation: 'Manager', ctc: 250}];

    let developersList = [
        {name: 'XX', designation: 'Devloper', ctc: 100},
        {name: 'yy', designation: 'Devloper', ctc: 110},
        {name: 'xx', designation: 'Devloper', ctc: 105}
    ]

        let managersHike = appraisalByPercent(10);
        let developersHike = appraisalByPercent(1);

        let managersBonus = bonus.bind(this, 10);
        let developersBonus = bonus.bind(this, 2);

        // let updatedDevelopers = developersList.map(element => {
        //     return developersHike(element.ctc);
        // });

        // let updatedManagers = managersList.map(element => {
        //     return managersHike(element.ctc);
        // });

        let updatedDevelopers = developersList.map(element => {
            return developersBonus(element.ctc);
        });

        let updatedManagers = managersList.map(element => {
            return managersBonus(element.ctc);
        });

        console.log(updatedDevelopers);
        console.log(updatedManagers);
        