let mybutton = document.getElementById("backToTopButton");

window.onscroll = function() {showScrollButton()};

// When the user scrolls down 500px from the top of the document, show the button
function showScrollButton() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}