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

const qform=document.getElementById('quote-form');
if(qform){
  qform.addEventListener('submit',async function(e){
    e.preventDefault();
    const btn=qform.querySelector('.form-submit');
    btn.textContent='Sending...';
    btn.disabled=true;
    const res=await fetch('https://api.web3forms.com/submit',{method:'POST',body:new FormData(qform)});
    if(res.ok){
      document.getElementById('form-success').style.display='block';
      qform.reset();
      qform.querySelector('.qform-title').scrollIntoView({behavior:'smooth',block:'nearest'});
    } else {
      btn.textContent='Something went wrong — please call us at 508-769-2282';
    }
    btn.textContent='Submit Quote Request →';
    btn.disabled=false;
  });
}
