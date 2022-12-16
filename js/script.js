AOS.init()

const main = document.getElementById("main")
const nav = document.getElementById("nav-menu")
const navItems = document.getElementsByClassName("nav-item")

window.addEventListener("scroll", function() {

    let posicionMain = main.getBoundingClientRect().top

    if(posicionMain <= -580) {
        nav.classList.add("bg-nav")
    } else {
        nav.classList.remove("bg-nav")
    }
})