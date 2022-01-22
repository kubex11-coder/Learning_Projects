const mobile = document.getElementsByClassName ('mobile') [0]
const Menu = document.getElementsByClassName ('right_side_nav') [0]
const Hero = document.getElementsByClassName('header') [0]
const Language = document.getElementsByClassName("language") [0]

mobile.addEventListener ('click',()=> {
    Menu.classList.toggle('active');
    Hero.classList.toggle('active');
    Language.classList.toggle("active")
})


/*Responzive Navbar tutorial
https://www.youtube.com/watch?v=At4B7A4GOPg
*/