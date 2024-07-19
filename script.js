document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    function onScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", onScroll);

    onScroll();
});