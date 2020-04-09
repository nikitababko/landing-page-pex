const burgerToggle = document.getElementById("header__toggle-button");
const burgerMenu = document.getElementById("button-burger-menu");
const navBar = document.getElementById("header__nav");

burgerToggle.addEventListener("click", function() {
    burgerMenu.classList.toggle("button-burger-menu--active");
    navBar.classList.toggle("header__nav--active");
});

const header = document.getElementById("header");

window.onscroll = function() {
    if (window.pageYOffset > 0) {
        header.classList.add("header--fixed");
    } else {
        header.classList.remove("header--fixed");
    }
};

const btn = document.getElementById("intro__button");
const modal = document.getElementById("intro__modal");
const close = document.getElementById("modal__close");

btn.addEventListener("click", function() {
    modal.classList.add("intro__modal");
    modal.style.display = "block";
});

close.addEventListener("click", function() {
    modal.classList.remove("intro__modal");
    modal.style.display = "none";
});

// //============== ScrollIntoView ============================//
const headerLink = document.querySelectorAll('a[href*="#');

for (let clickLink of headerLink) {
    clickLink.addEventListener("click", function(e) {
        e.preventDefault();
        var blockID = clickLink.getAttribute("href");
        document.querySelector("" + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
