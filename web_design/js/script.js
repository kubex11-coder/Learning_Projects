const navLink1 = document.getElementById("navlink1");
const navLink2 = document.getElementById("navlink2");
const navLink3 = document.getElementById("navlink3");
const navLink4 = document.getElementById("navlink4");
const navLink5 = document.getElementById("navlink5");

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");




function navSection1() {
    navLink1.classList.add("active")
    navLink2.classList.remove("active")
    navLink3.classList.remove("active")
    navLink4.classList.remove("active")
    navLink5.classList.remove("active")
section1.classList.remove("hidden");
section2.classList.add("hidden");
section3.classList.add("hidden");
section4.classList.add("hidden");
section5.classList.add("hidden");
}

function navSection2() {
    navLink1.classList.remove("active")
    navLink2.classList.add("active")
    navLink3.classList.remove("active")
    navLink4.classList.remove("active")
    navLink5.classList.remove("active")
    section1.classList.add("hidden");
    section2.classList.remove("hidden");
    section3.classList.add("hidden");
    section4.classList.add("hidden");
    section5.classList.add("hidden");
}

function navSection3() {
    navLink1.classList.remove("active")
    navLink2.classList.remove("active")
    navLink3.classList.add("active")
    navLink4.classList.remove("active")
    navLink5.classList.remove("active")
    section1.classList.add("hidden");
    section2.classList.add("hidden");
    section3.classList.remove("hidden");
    section4.classList.add("hidden");
    section5.classList.add("hidden");
}

function navSection4() {
    navLink1.classList.remove("active")
    navLink2.classList.remove("active")
    navLink3.classList.remove("active")
    navLink4.classList.add("active")
    navLink5.classList.remove("active")
    section1.classList.add("hidden");
section2.classList.add("hidden");
section3.classList.add("hidden");
section4.classList.remove("hidden");
section5.classList.add("hidden");
}

function navSection5() {
    navLink1.classList.remove("active")
    navLink2.classList.remove("active")
    navLink3.classList.remove("active")
    navLink4.classList.remove("active")
    navLink5.classList.add("active")
    section1.classList.add("hidden");
section2.classList.add("hidden");
section3.classList.add("hidden");
section4.classList.add("hidden");
section5.classList.remove("hidden");
}
console.log(section2)

// Typing animation

var typed = new Typed(".typing", {
    strings:["", "Webových stránek", "Prezentačních Videí", "Grafických Návrhů"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})