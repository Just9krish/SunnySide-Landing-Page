const toggleMenu = document.getElementById("menu-toggle");
const showMenuMob = document.querySelector(".nav-links-mob");
const showMenu = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-icon");
const linksMob = showMenuMob.getElementsByClassName("nav-link-mob");
const links = showMenu.getElementsByClassName("nav-link");

toggleMenu.addEventListener("click", () => {
  showMenuMob.classList.toggle("display");
  menuIcon.classList.toggle("menu-icon-active");
});

for (let i = 0; i < linksMob.length; i++) {
  linksMob[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active-link-mob");
    current[0].className = current[0].className.replace(" active-link-mob", "");
    this.className += " active-link-mob";
  });
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active-link");
      current[0].className = current[0].className.replace(" active-link", "");
      this.className += " active-link";
    });
  }