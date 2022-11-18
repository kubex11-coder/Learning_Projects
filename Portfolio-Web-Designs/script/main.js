//navbar JavaScript
const hamburger = document.querySelector(".menu-btn")
const mobileMenu = document.querySelector(".no-mobile")
const menuBtn = document.querySelector(".menu-btn__burger")

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
})

hamburger.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
})
