
var menuToggle = document.getElementById('menu-toggle');
var navLinks = document.getElementById('nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {
  var trigger = dropdown.querySelector(':scope > a');

  if (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 640) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  }
});


var allLinks = document.querySelectorAll('#nav-links a');

allLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    var parentDropdown = link.closest('.dropdown');
    var isDropdownTrigger = parentDropdown && link === parentDropdown.querySelector(':scope > a');

    if (!isDropdownTrigger) {
      if (navLinks) navLinks.classList.remove('open');
      dropdowns.forEach(function (d) { d.classList.remove('open'); });
    }
  });
});
