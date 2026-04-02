const btn = document.querySelector(".toggle-theme");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});