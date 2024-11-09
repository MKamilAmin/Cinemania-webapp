const themeSwitcher = document.querySelector(".js-header__theme-switcher");

themeSwitcher.addEventListener("click", () => {
    themeSwitcher.classList.toggle("light-theme");
});
