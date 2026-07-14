// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener('click',e=>{
e.preventDefault();
document.querySelector(link.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});
});
});

// Sticky header
const header=document.querySelector("header");

window.addEventListener("scroll",()=>{
if(window.scrollY>50){
header.classList.add("sticky");
}else{
header.classList.remove("sticky");
}
});

// Reveal animation
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:.2
});

document.querySelectorAll(".card,.plan,.stat,.hero-content").forEach(el=>{
observer.observe(el);
});

// Counter animation
const counters=document.querySelectorAll(".stat h3");

counters.forEach(counter=>{
const update=()=>{
const target=counter.innerText.replace(/\D/g,'');

if(!target)return;

let current=+counter.getAttribute("data-count")||0;

const increment=target/100;

if(current<target){
current+=increment;
counter.setAttribute("data-count",current);
counter.innerText=Math.ceil(current)+"+";
requestAnimationFrame(update);
}else{
counter.innerText=target+"+";
}
}

update();
});

// Floating background particles
const particles=50;

for(let i=0;i<particles;i++){

let p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"vw";
p.style.animationDuration=(5+Math.random()*8)+"s";
p.style.opacity=Math.random();

document.body.appendChild(p);

}

// Button ripple
document.querySelectorAll("button,.btn-primary,.btn-secondary").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";
circle.style.top=e.offsetY-diameter/2+"px";

this.appendChild(circle);

setTimeout(()=>{
circle.remove();
},600);

});

});

// Loading screen
window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.className="loader";

loader.innerHTML="<div class='spinner'></div>";

document.body.appendChild(loader);

setTimeout(()=>{
loader.style.opacity="0";
setTimeout(()=>{
loader.remove();
},500);
},800);

});