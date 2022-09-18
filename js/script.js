const menuBtn = document.querySelector(".menuBtn");
const navMenu = document.querySelector("#menu");
const scrollDown = document.querySelector(".scrollDown");
const line = document.querySelectorAll("#full")
const contactanime = document.getElementById("contactanim")
console.log(contactanime)




menuBtn.addEventListener("click", () => {
    if (!menuBtn.classList.contains("open")) {
        menuBtn.classList.add("open");
        navMenu.classList.add("active_nav");
      
        
    } else {
        menuBtn.classList.remove("open");
        navMenu.removeAttribute("class");
  
    }
});
scrollDown.addEventListener("click", ()=>{
    window.scrollTo({
        top:1000,
        behavior:"smooth"
    })
})
console.log(line)


window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 340) {
        line.forEach((lines)=>{
          if(lines.classList !== "mek"){
            lines.classList.add("mek")
          }
        })
    
      
   
        
    }
   
    console.log(scrollPos);
    console.log(line)
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 500) {
        contactanime.classList.add("animation-contact")
   
        
    }
   
    console.log(scrollPos);
    console.log(contactanime)
});