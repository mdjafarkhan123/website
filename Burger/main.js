import "./scss/style.scss";

/*
=========== Mobile menu ==========
*/

const navBar = document.getElementById("navigation");
const navMenu = navBar.querySelector(".navigation__menu");

navBar.addEventListener("click", function (event) {
    let target = event.target;
    if (target.closest("#menu-open")) {
        navMenu.style.top = "0%";
    }
    if (target.closest("#menu-close")) {
        navMenu.style.top = "-100%";
    }
});

//============ Header styles ==============
let header = document.getElementsByTagName("header")[0];
function headerShadow(event) {
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener("scroll", headerShadow);
