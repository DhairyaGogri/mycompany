(function(){
  const toggle=document.querySelector('.nav-toggle'); const links=document.querySelector('.nav-links');
  if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{const href=a.getAttribute('href');if(href===path||(!path&&href==='index.html'))a.classList.add('active');});
  const year=document.querySelectorAll('[data-year]'); year.forEach(el=>el.textContent=new Date().getFullYear());
})();
