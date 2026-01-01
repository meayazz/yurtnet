
document.addEventListener("DOMContentLoaded",()=>{
 const g=document.getElementById("greeting");
 if(g){
  const h=new Date().getHours();
  let t="İyi Akşamlar";
  if(h<12)t="İyi Sabahlar";
  else if(h<18)t="İyi Öğleler";
  setTimeout(()=>g.innerText=t,2000);
 }

 fetch("assets/data/duyurular.json")
 .then(r=>r.json())
 .then(d=>{
  const el=document.getElementById("slider");
  if(!el)return;
  let i=0;
  el.innerText=d[i];
  setInterval(()=>{
   i=(i+1)%d.length;
   el.innerText=d[i];
  },4000);
 });
});
