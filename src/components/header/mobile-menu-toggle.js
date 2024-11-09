const menuToggle = document.querySelector(".js-header__mobile-menu-toggle");
const mobileMenu = document.querySelector(".js-header__mobile-menu");
const mobileMenuLink = document.querySelector(".js-header__mobile-menu-link");
const mobileMenuBackdrop = document.querySelector(
    ".js-header__mobile-menu-backdrop"
);

const mobileMenuAllLinks = document.querySelectorAll(
    ".js-header__mobile-menu-link"
);

const mobileMenuFocusableElements = document.querySelectorAll(
    ".js-header__mobile-menu-link"
);

const body = document.body;

// Open menu on button click
menuToggle.addEventListener("click", (evt) => {
    evt.stopPropagation();
    mobileMenuAllLinks.forEach((elm) => {
        elm.setAttribute("tabindex", 0);
    });

    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.setAttribute("aria-hidden", isExpanded);

    mobileMenu.classList.toggle("is-open"); // Toggle menu visibility
    body.classList.toggle("menu-open"); // Toggle the scroll lock on body
    mobileMenuBackdrop.classList.toggle("menu-open");

    if (mobileMenu.classList.contains("is-open")) {
        mobileMenuLink.focus(); // Move focus to the menu
    } else {
        menuToggle.focus(); // Return focus to the toggle button when closed
    }
});

// Close menu on click outside the menu
mobileMenuBackdrop.addEventListener("click", (evt) => {
    if (
        mobileMenu.classList.contains("is-open") &&
        !mobileMenu.contains(evt.target) &&
        !menuToggle.contains(evt.target)
    ) {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        mobileMenu.setAttribute("aria-hidden", isExpanded);
        mobileMenu.classList.remove("is-open");
        body.classList.remove("menu-open");
        mobileMenuBackdrop.classList.remove("menu-open");
        mobileMenuAllLinks.forEach((elm) => {
            elm.setAttribute("tabindex", -1);
        });
    }
});

// Trap tab focus within mobileMenu
mobileMenu.addEventListener("keydown", (evt) => {
    let isTabPressed = evt.key === "Tab" || evt.keyCode === 9;
    if (!isTabPressed) return;

    if (evt.shiftKey) {
        if (document.activeElement === mobileMenuFocusableElements[0]) {
            evt.preventDefault();
            mobileMenuFocusableElements[
                mobileMenuFocusableElements.length - 1
            ].focus();
        }
    } else {
        if (
            document.activeElement ===
            mobileMenuFocusableElements[mobileMenuFocusableElements.length - 1]
        ) {
            evt.preventDefault();
            mobileMenuFocusableElements[0].focus();
        }
    }
});

// Exit via keyboard esc
document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        mobileMenu.classList.remove("is-open");
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        mobileMenuBackdrop.classList.remove("menu-open");
        menuToggle.focus();
    }
});
