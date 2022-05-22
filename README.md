# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://github.com/Just9krish/SunnySide-Landing-Page/blob/c679897bdf26e9bd89f55e62114d37780c607753/design/desktop-design.jpg)

### Links

- Live site URL: [Click here](https://sunnyside-lp-just9krish.netlify.app/)
- Solution URL: [click here](https://www.frontendmentor.io/solutions/sunnyside-lp-Rj6XOxyZjK)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript ES6

### What I learned

```html
<nav class="site__navbar-mob">
  <img src="./images/logo.svg" alt="Sunnyside" />

  <button id="menu-toggle" class="nav__hamburger-btn">
    <img
      src="./images/icon-hamburger.svg"
      alt="icon-hamburger"
      class="menu-icon"
    />
  </button>
  <ul class="nav-links-mob display">
    <li><a href="#" class="nav-link-mob">about</a></li>
    <li><a href="#" class="nav-link-mob">services</a></li>
    <li><a href="#" class="nav-link-mob">projects</a></li>
    <li><a href="#" class="nav-link-mob active-link-mob">contacts</a></li>
  </ul>
</nav>

<!-- Navigation for desktop -->
<nav class="site__navbar">
  <a href="#"><img src="./images/logo.svg" alt="logo" /></a>
  <ul class="nav-links">
    <li><a href="#" class="nav-link">About</a></li>
    <li><a href="#" class="nav-link">Services</a></li>
    <li><a href="#" class="nav-link">Projects</a></li>
    <li><a href="#" class="nav-link active-link">Contact</a></li>
  </ul>
</nav>
```

```css
.nav-links-mob li a:hover:not(.active-link-mob) {
    background-color: background-color: hsl(207, 100, 89);
    padding: 0.8em 3.125em;
    border-radius: 50px
}

.active-link-mob {
    background: var(--Yellow);
    color: var(--Very-dark-desaturated-blue);
    font-size: 0.9rem;
    padding: 0.8em 3.125em;
    border-radius: 50px;
    font-family: "Fraunces", serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.8px;
}

/* For desktop */
.nav-link:hover:not(.active-link) {
        text-transform: uppercase;
        font-family: "Fraunces", serif !important;
        font-size: 0.8rem;
        font-weight: 700;
        background: hsla(0, 0%, 100%, 0.2);
    }

    .active-link {
        color: var(--Very-dark-desaturated-blue);
        background-color: var(--White);
        font-family: "Fraunces", serif !important;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
    }
```

```js
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
```

## Author

- Frontend Mentor - [@Just9krish](https://www.frontendmentor.io/profile/Just9krish)
- Instagram - [@Just9krish](https://www.instagram.com/just9krish/)
- Linkedin - [@rvamit2648](https://linkedin.com/in/amit-vishwakarma-bb54b222a)
