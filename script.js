// ===============================
// BISTO AUTOMATED TRADING
// ===============================

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

// Close menu after clicking a link

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// Header shadow on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Reveal animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".card, .stat").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});