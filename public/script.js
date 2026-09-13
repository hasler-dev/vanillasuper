document.querySelector('.copy').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('vanillasuper.xyz');status.textContent='IP скопирован.';}catch{status.textContent='Скопируй адрес: vanillasuper.xyz';}});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');


// Keep native summary keyboard controls, and animate toward the latest intent.
const questions=[...document.querySelectorAll('.questions details')].map(detail=>({
  detail,summary:detail.querySelector('summary'),answer:detail.querySelector('p'),
  expanded:detail.open,animation:null
}));
function settleQuestion(item){
  item.animation?.cancel();
  item.fade?.cancel();
  item.animation=null;
  item.detail.open=item.expanded;
}
function expandQuestion(item,expanded){
  const start=item.detail.getBoundingClientRect().height;
  const opacity=item.detail.open?getComputedStyle(item.answer).opacity:'0';
  item.animation?.cancel();
  item.fade?.cancel();
  item.animation=null;
  item.expanded=expanded;
  item.detail.dataset.expanded=String(expanded);
  item.summary.setAttribute('aria-expanded',String(expanded));
  item.answer.inert=!expanded;
  if(reduced.matches){settleQuestion(item);return;}
  // Measure the natural destination before keeping content rendered for closing.
  item.detail.open=expanded;
  const end=item.detail.getBoundingClientRect().height;
  item.detail.open=true;
  const animation=item.detail.animate(
    [{height:`${start}px`,overflow:'clip'},{height:`${end}px`,overflow:'clip'}],
    {duration:420,easing:'cubic-bezier(.22,1,.36,1)'}
  );
  item.fade=item.answer.animate([{opacity},{opacity:expanded?1:0}],
    {duration:expanded?340:200,easing:'ease-out',fill:'both'});
  item.animation=animation;
  animation.onfinish=()=>{if(item.animation===animation)settleQuestion(item);};
}
questions.forEach(item=>{
  item.detail.dataset.expanded=String(item.expanded);
  item.summary.setAttribute('aria-expanded',String(item.expanded));
  item.answer.inert=!item.expanded;
  item.summary.addEventListener('click',event=>{
    event.preventDefault();
    const expanded=!item.expanded;
    if(expanded)questions.forEach(other=>{if(other!==item&&other.expanded)expandQuestion(other,false);});
    expandQuestion(item,expanded);
  });
});
reduced.addEventListener('change',()=>{if(reduced.matches)questions.forEach(settleQuestion);});
window.addEventListener('resize',()=>questions.forEach(settleQuestion));
