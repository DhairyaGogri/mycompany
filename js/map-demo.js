(function(){
  const buttons=document.querySelectorAll('[data-filter]'); const pois=document.querySelectorAll('.poi');
  function apply(filter){pois.forEach(p=>{p.hidden=filter!=='all'&&p.dataset.type!==filter;});buttons.forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));}
  buttons.forEach(b=>b.addEventListener('click',()=>apply(b.dataset.filter)));
  apply('all');
})();
