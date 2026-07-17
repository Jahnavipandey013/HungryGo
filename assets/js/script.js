'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

const dietButtons = document.querySelectorAll('.diet-switch .diet-btn');
const menuItems = document.querySelectorAll('.food-menu-list li');

for (let i = 0; i < dietButtons.length; i++) {
  dietButtons[i].addEventListener('click', function () {
    dietButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.diet === 'veg') {
        btn.textContent = 'Veg';
      } else {
        btn.textContent = 'NonVeg';
      }
    });
    this.classList.add('active');
    if (this.dataset.diet === 'veg') {
      this.textContent = 'Veg ON';
    } else {
      this.textContent = 'NonVeg ON';
    }
    filterDiet(this.dataset.diet || 'all');
  });
}

function filterDiet(diet) {
  menuItems.forEach(item => {
    const itemDiet = item.dataset.diet || 'all';
    if (diet === 'all' || itemDiet === diet) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}





/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});


//backend code;;;;

