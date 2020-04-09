const burgerToggle = document.getElementById("header__toggle-button");
const burgerMenu = document.getElementById("button-burger-menu");
const navBar = document.getElementById("header__nav");

burgerToggle.addEventListener("click", function() {
    burgerMenu.classList.toggle("button-burger-menu--active");
    navBar.classList.toggle("header__nav--active");
});
