const hamburgerMenu = document.getElementById("hamburger");
const mobilePopUp = document.querySelector(".mobile_pop_up");

hamburgerMenu.addEventListener("click", () => {
mobilePopUp.classList.toggle("active");

})

// <!-- Android Viewport height fix for virtual keybord in form field-->

var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
    document.write('<meta name="viewport" content="width=device-width,height='+window.innerHeight+', initial-scale=1.0">');
}
