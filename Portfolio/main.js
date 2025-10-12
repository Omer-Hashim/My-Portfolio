let openUl = document.querySelector(".header .container .links .toggle-menu")

openUl.addEventListener("click", () => {
    openUl.classList.toggle("open")
});

document.addEventListener("click", (e) => {
    if (e.target !== openUl) {
        if (openUl.classList.contains("open")) {
            openUl.classList.remove("open")
        }
    }
})