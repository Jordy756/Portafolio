(() => {
    new Splide(".splide").mount();

    const btn = document.getElementById("menu-button");
    btn.onclick = () => {
        btn.classList.toggle("menu-icon-active");
        document.querySelector(".nav").classList.toggle("active");
    };
})();
