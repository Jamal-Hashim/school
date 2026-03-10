function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {

    slides.forEach(slide => slide.classList.remove("active"));

    slides[i].classList.add("active");

}

/* NEXT BUTTON */

document.querySelector(".next").onclick = function () {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    showSlide(index);

}

/* PREV BUTTON */

document.querySelector(".prev").onclick = function () {

    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    showSlide(index);

}

/* AUTO SLIDER */

setInterval(function () {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    showSlide(index);

}, 4000);


let slider = document.querySelector(".testimonial-slider");
let cards = document.querySelectorAll(".testimonial-card");

let ind = 0;

function slideTestimonials() {

    let cardWidth = cards[0].offsetWidth + 30; // include gap

    ind++;

    if (ind > cards.length - getVisibleCards()) {
        ind = 0;
    }

    slider.style.transform = "translateX(-" + (ind * cardWidth) + "px)";

}

function getVisibleCards() {
    if (window.innerWidth <= 600) {
        return 1;
    } else if (window.innerWidth <= 900) {
        return 2;
    } else {
        return 3;
    }
}

setInterval(slideTestimonials, 3000);