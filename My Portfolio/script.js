const navbar = document.querySelector('.header');
var sticky = navbar.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
  navbar.classList.add('fixed')
} else {
  navbar.classList.remove('fixed');
}};
navbar.style.zIndex = "1000";
navbar.style.backgroundColor = 'white';