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
