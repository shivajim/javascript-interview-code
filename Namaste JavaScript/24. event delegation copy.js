
document.getElementById('category').addEventListener('click', (e) => {
   console.log(e.target);
   if(e.target.tagName == 'UL') {
      return;
   }
   window.location.href = e.target.id
});
