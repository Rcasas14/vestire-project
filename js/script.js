$('.owl-carousel.carousel-inside').owlCarousel({
    dots: true,
    dotsEach: 1,
    loop: true,
    margin: 50,
    stagePadding: 30,
    autoplay: true,
    nav: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
        },
        992: {
            items: 4
        }
    }
});

let carouselDesktop = document.querySelector('.first-feature');

let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".floating-navbar").style.top = "-56px";
        document.querySelector(".floating-navbar").style.opacity = "0";
    } else {
        document.querySelector(".floating-navbar").style.top = "0"; // Adjusted to the navbar height
        document.querySelector(".floating-navbar").style.opacity = "1"; // Adjusted to the navbar height
    }
    prevScrollpos = currentScrollPos;
}

const startMarquee = () => {
    let marquee = document.querySelector('.marquee-element');
    let distance = marquee.offsetWidth;

    marquee.style.animation = `marquee ${distance / 50}s linear infinite`;

    marquee.innerHTML += marquee.innerHTML;
}

window.onload = startMarquee;