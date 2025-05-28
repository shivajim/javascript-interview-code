
document.getElementById('category').addEventListener('click', (e) => {
   console.log(e.target.dataset);
   if(e.target.tagName == 'UL') {
      return;
   }
   // window.location.href = e.target.id
});

document.getElementById('form').addEventListener('keyup', (e) => {
   console.log(e.target);
});
