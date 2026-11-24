
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const toast=document.getElementById('toast');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.package button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.getElementById('destination').value=btn.dataset.trip;
    toast.textContent=btn.dataset.trip+' selected';
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),1800);
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  });
});
document.getElementById('tripForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value;
  document.getElementById('formMessage').textContent='Thanks, '+name+'. Your travel request has been received.';
  e.target.reset();
});
