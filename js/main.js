


// click link in nav bar go to section
$('#main-nav a[href^="#"] ').click(function (e) {

  let linkHref = $(e.target).attr('href');


  let secOffset = $(linkHref).offset().top;


  $('html,body').animate({ scrollTop: secOffset }, 1000)

});


// type.js
var typed = new Typed('#show', {
  strings: [
    'Frontend Developer',
    'Web Developer',
    'Web Designer',
    'Frontend Developer',
  ],
  typeSpeed: 100,
  loop: true,
  backDelay: 1100,
  backSpeed: 60,
  smartBackspace: true
});


// Back to top 
$(window).scroll(function () {

  var offset = 130;
  var duration = 1000;

  if ($(this).scrollTop() > offset) {
    $('.back-to-top').fadeIn(duration);
  } else {
    $('.back-to-top').fadeOut(duration);
  }
});

$('.back-to-top').click(function () {
  $('html , body').animate({
    scrollTop: 0
  }, 2500);
  return false;
});


/* Star Counter */
