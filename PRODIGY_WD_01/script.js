window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#555"; // Darker purple on scroll
  } else {
    navbar.style.backgroundColor = "#6a0dad"; // Original purple color
  }
});
