let nav = document.querySelector("#nav-wo");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "transparent"; 
    } else {
        nav.style.backgroundColor = "#333533"; 
    }
});
