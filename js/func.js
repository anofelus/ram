$(function() {

  $('.about-me-show').click(function() {
  $('#about-me').fadeIn();
  });

  $('.back,.modal-wrapper').unbind().click(function() {
  $('#about-me').fadeOut();
  });

});