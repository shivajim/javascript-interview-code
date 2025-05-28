
   document.getElementById('grandParent').addEventListener('click', (e) => {
      console.log(' GP CLICKED');
      e.stopPropagation();
   }, false);

   document.getElementById('parent').addEventListener('click', (e) => {
      console.log(' Parent CLICKED');
      e.stopPropagation();
   }, false);

   document.getElementById('child').addEventListener('click', (e) => {
      console.log(' Child CLICKED');
      e.stopPropagation();
   }, false);
   