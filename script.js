const t=[...document.querySelectorAll("[data-en][data-nl]")];
const langBtn=document.getElementById("langBtn");
let lang=localStorage.getItem("vldtLang")||"en";
function applyLang(){t.forEach(el=>el.textContent=el.dataset[lang]);document.documentElement.lang=lang;langBtn.textContent=lang==="en"?"NL":"EN";localStorage.setItem("vldtLang",lang)}
langBtn.addEventListener("click",()=>{lang=lang==="en"?"nl":"en";applyLang()});applyLang();
document.getElementById("year").textContent=new Date().getFullYear();
const menuBtn=document.getElementById("menuBtn"), mobileNav=document.getElementById("mobileNav");
menuBtn.addEventListener("click",()=>mobileNav.classList.toggle("open"));
mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobileNav.classList.remove("open")));
