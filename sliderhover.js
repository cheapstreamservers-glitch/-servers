const openBtn = document.getElementById("openRandom");
const closeBtn = document.getElementById("closeRandom");
const nav = document.getElementById("nav");
const page = document.getElementById("page");
const bar = document.getElementById("navbar");


   openBtn.addEventListener("click", () =>{
      nav.classList.add("open");
      page.classList.add("open");
      navbar.classList.add("posn");
   });

   closeBtn.addEventListener("click", () =>{
      nav.classList.remove("open");
      page.classList.remove("open");
      navbar.classList.remove("posn");
   });























