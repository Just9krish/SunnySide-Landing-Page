const toggleMenu = document.getElementById("menu-toggle");

const showMenu = document.querySelector(".nav-links-mob");

toggleMenu.addEventListener("click", () => {
 showMenu.classList.toggle('display')
});
