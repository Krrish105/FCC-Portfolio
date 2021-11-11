const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const menu = document.getElementById('main');

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

navLink.forEach((item) => {
     item.addEventListener("click", function(){
       hamburger.classList.remove("active");
       navMenu.classList.remove("active");
     });
});
