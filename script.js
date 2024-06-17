$(document).ready(function () {
  // Toggle Navbar
  $(".navbar-icon").click(function () {
    $(".header .navbar-menu").toggleClass("active");
    $(".header .navbar-icon").toggleClass("bx-x");
  });

  $(".navbar-item").click(function () {
    $(".header .navbar-menu").removeClass("active");
    $(".header .navbar-icon").removeClass("bx-x");
  });

  //Update navbar height
  function updateNavbarHeight() {
    const navbarMenu = document.querySelector(".header .header-content");
    const navbarHeight = navbarMenu.offsetHeight;
    document.documentElement.style.setProperty("--navbar-height", `${navbarHeight}px`);
  }

  updateNavbarHeight();
  window.addEventListener("resize", updateNavbarHeight);

  // Shop Item Display
  let shopItems = document.querySelector(".featured .featured-items");
  shopItems.innerHTML += shopItems.innerHTML;

  let shopBtn = document.querySelectorAll(".featured .featured-btn-container .featured-btn");
  let speed = -2;

  let move = () => {
    let currentLeft = parseInt(shopItems.style.left) || 0;
    let newLeft = currentLeft + speed;

    if (newLeft <= -shopItems.offsetWidth / 2) {
      newLeft = 0;
    }

    if (newLeft > 0) {
      newLeft -= shopItems.offsetWidth / 2;
    }

    shopItems.style.left = newLeft + "px";
  };

  let timer = setInterval(move, 30);

  const stopScroll = () => {
    clearInterval(timer);
  };

  const resumeScroll = () => {
    timer = setInterval(move, 30);
  };

  shopItems.addEventListener("mouseover", stopScroll);
  shopItems.addEventListener("mouseout", resumeScroll);

  shopBtn[0].onclick = function () {
    speed = -2;
  };

  shopBtn[1].onclick = function () {
    speed = 2;
  };
});
