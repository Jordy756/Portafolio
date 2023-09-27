const menuBtn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    overlay.classList.toggle("overlay-active");
    menuBtn.classList.toggle("menu-button-active");
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("overlay-active");
});
