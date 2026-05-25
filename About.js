const menu= document.getElementById("menu");
const links=document.querySelector(".links");
menu.addEventListener("click",()=>{
    links.classList.toggle("active")
})