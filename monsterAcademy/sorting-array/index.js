const sortArray = array => {
   return [...array.sort()];
};

const ar = [8,9,7,3,5,2];
console.log(sortArray(ar));
console.log(ar);



// SORTING Object 

books = [
  {name: 'Tesdd', author: 'John Ks'},
  {name: 'Khdb', author: 'Optt Fsdd'},
  {name: 'Mlls', author: 'Ks MHS'},
]

books.sort((b1, b2)=> {
  const bk1 = b1.author.split(' ')[1];
  const bk2 = b2.author.split(' ')[1];
  return bk1> bk2? 1 : -1;
})

console.log(books);