// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// Ketika search di klik
document.querySelector("#search").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  // Supaya tidak scroll ke atas / mematikan aksi default
  e.preventDefault();
};

// Toggle class active shopping-cart
const shopping = document.querySelector(".shopping-cart");
// Ketika shopping-bag di klik
document.querySelector("#shopping-cart").onclick = (e) => {
  shopping.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search");
const sc = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shopping.contains(e.target)) {
    shopping.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// Looping tiap icon mata di klik
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
