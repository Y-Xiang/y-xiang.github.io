$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      var offset = 40; // adjust to your nav height

      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 800);
    }
  });
});
