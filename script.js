
// Hamburger
const ham=document.getElementById('ham'),mob=document.getElementById('mobMenu');
ham.addEventListener('click',()=>mob.classList.toggle('open'));
mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mob.classList.remove('open')));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

// WA float: show only after user scrolls past hero
const waBtn = document.querySelector('.wa-float');
const heroSec = document.getElementById('hero');
const waObserver = new IntersectionObserver(
  ([entry]) => {
    if(entry.isIntersecting){
      waBtn.classList.remove('wa-visible');
    } else {
      waBtn.classList.add('wa-visible');
    }
  },
  {threshold: 0.1}
);
waObserver.observe(heroSec);

// Touch-friendly drag-scroll for reviews
const rs=document.getElementById('revScroll');
let isDown=false,startX,scrollLeft;
rs.addEventListener('mousedown',e=>{isDown=true;startX=e.pageX-rs.offsetLeft;scrollLeft=rs.scrollLeft;});
rs.addEventListener('mouseleave',()=>isDown=false);
rs.addEventListener('mouseup',()=>isDown=false);
rs.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();rs.scrollLeft=scrollLeft-(e.pageX-rs.offsetLeft-startX)*1.2;});

// Subtle zoom on hero bg images on load
document.querySelectorAll('.hero-bg-img img').forEach(img=>{
  img.style.transform='scale(1.05)';
  setTimeout(()=>{img.style.transition='transform 9s ease';img.style.transform='scale(1)';},100);
});