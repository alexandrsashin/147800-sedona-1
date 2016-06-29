var toggle = document.querySelector(".main-nav__toggle");
var cross = document.querySelector(".main-nav__item-cross");
var main_nav = document.querySelector(".main-nav");

/* mobile-menu */

if (window.matchMedia("(min-width: 768px)").matches) {
    }
    else {
    cross.addEventListener("click", function(event) {
        event.preventDefault();
        toggle.classList.add("main-nav__toggle-vis");
        main_nav.classList.add("main-nav-hide");
    });
    toggle.addEventListener("click", function(event) {
        event.preventDefault();
        toggle.classList.remove("main-nav__toggle-vis");
        main_nav.classList.remove("main-nav-hide");
    });
};

