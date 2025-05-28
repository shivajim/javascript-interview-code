// const button = document.querySelector('button');

// const handleClick = () => {
//     return new Promise((resolve) => {
//         button.addEventListener('click', () => {
//             resolve(event);
//         });
//     });
// }

// handleClick().then(event => {
//     console.log(event.target);
// });


// =========== Observables =================================================

const getUserData = (user) => {

    const userData = {
        johan: 'Johan data',
        james: 'James data',
        mike: 'Mikes data'
    }

    return Observable.create(observer => {
        observer.next(userData[user]);
    });
}

const result  = getUserData('johan');
    console.log(result);
