function toggleMM(){
  const m=document.getElementById('mm');
  m.classList.toggle('open');
  document.body.style.overflow=m.classList.contains('open')?'hidden':'';
}
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in')})
},{threshold:0.07});
document.querySelectorAll('.rev').forEach(el=>obs.observe(el));
window.addEventListener('resize',()=>{
  if(window.innerWidth>768){document.getElementById('mm').classList.remove('open');document.body.style.overflow=''}
});
