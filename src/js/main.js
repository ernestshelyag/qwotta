window.onload = () => {
  // header + sidebar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $('.header').fadeOut();
    } else {
      $('.header').fadeIn();
    }
    if ($(window).scrollTop() > 70 && $('.sidebar').hasClass('active')) {
      $('#burger-btn').click();
    }
  });
  $('#burger-btn').click(function () {
    $('.burger__lines-block, .burger__mid-line, .sidebar, .sidebar__link').toggleClass('active');
  });
  $('.sidebar').click(function () {
    $('#burger-btn').click();
  });
  // -
};
