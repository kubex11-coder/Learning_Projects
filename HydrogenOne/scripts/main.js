const mobile = document.getElementsByClassName ('mobile') [0]
const Menu = document.getElementsByClassName ('rightside') [0]
const Hero = document.getElementsByClassName('herobanner') [0]

mobile.addEventListener ('click',()=> {
    Menu.classList.toggle('active');
    Hero.classList.toggle('active')
})


/*Responzive Navbar tutorial
https://www.youtube.com/watch?v=At4B7A4GOPg
*/