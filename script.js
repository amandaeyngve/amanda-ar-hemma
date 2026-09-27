const countdown=document.getElementById("countdown");if(countdown){const end=new Date(2026,10,1,0,0,0);function updateCountdown(){let diff=end-new Date();if(diff<=0){countdown.innerHTML="<div style='grid-column:1/-1'><strong>✈️</strong><span>Amanda har lämnat byggnaden</span></div>";return}const d=Math.floor(diff/864e5);diff%=864e5;const h=Math.floor(diff/36e5);diff%=36e5;const m=Math.floor(diff/6e4);document.getElementById("days").textContent=d;document.getElementById("hours").textContent=String(h).padStart(2,"0");document.getElementById("minutes").textContent=String(m).padStart(2,"0")}updateCountdown();setInterval(updateCountdown,30000)}const modal=document.getElementById("modal"),modalText=document.getElementById("modalText");if(modal&&modalText){document.querySelectorAll(".book").forEach(btn=>btn.addEventListener("click",()=>{modalText.innerHTML="Du har visat intresse för <strong>"+btn.dataset.activity+"</strong>. Förfrågan har placerats i Amandas helt påhittade bokningssystem.";modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}document.querySelectorAll(".close,.close-button").forEach(b=>b.addEventListener("click",closeModal));modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()})}
const menuToggle=document.querySelector(".menu-toggle");
const siteNav=document.querySelector(".site-header nav");
if(menuToggle&&siteNav){
  menuToggle.addEventListener("click",()=>{
    const open=siteNav.classList.toggle("open");
    menuToggle.classList.toggle("open",open);
    menuToggle.setAttribute("aria-expanded",String(open));
    menuToggle.setAttribute("aria-label",open?"Stäng meny":"Öppna meny");
  });
  siteNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    siteNav.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
    menuToggle.setAttribute("aria-label","Öppna meny");
  }));
}
