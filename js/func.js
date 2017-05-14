$(function() {

  $('.about-me-show').click(function() {
  $('#about-me').fadeIn();
  });

  $('.back').unbind().click(function() {
  $('#about-me').fadeOut();
  });

});