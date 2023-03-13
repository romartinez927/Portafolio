AOS.init()

const main = document.getElementById("main")
const nav = document.getElementById("nav-menu")
const navItems = document.getElementsByClassName("nav-item")
const mobileToggler = document.getElementById("mobile-toggler-icon")

window.addEventListener("scroll", function() {

    let posicionMain = main.getBoundingClientRect().top

    if(posicionMain <= -500) {
        nav.classList.add("bg-nav")
        mobileToggler.classList.remove("text-black")
        mobileToggler.classList.add("text-light")
    } else {
        nav.classList.remove("bg-nav")
        mobileToggler.classList.remove("text-light")
        mobileToggler.classList.add("text-black")
    }
})