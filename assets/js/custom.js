/*======================================================
                Sticky Header
=======================================================*/

$(window).scroll(function(){
  var header = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) header.addClass('sticky');
  else header.removeClass('sticky');
});

/*============================================
               humburgur
============================================*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/*============================================
               Sign In
============================================*/
$(document).ready(function(){
  $(".sign-in").click(function(){
    $("#sign-form").toggle();
  });
});

/*============================================
               Owl Carousel
============================================*/
var owl = $('#slider');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    // autoplay:true,
    // autoplayTimeout:4000,
    autoplayHoverPause:true
});

var owl = $('#review-owl');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});



/*======================================================
            form focus label animation 
=======================================================*/

$(document).ready(function () {

  $('.text-field-input').on('focus', function () {
    $(this).closest('.field-wrapper').addClass('focused');
  });

  $('.text-field-input').on('blur', function () {

    if ($(this).val() === '') {
      $(this).closest('.field-wrapper').removeClass('focused');
    }
  });

})


/*======================================================
           Country Mobile Code js
=======================================================*/
var input = document.querySelector("#phoneOne");
window.intlTelInput(input, {
    separateDialCode: true,
    // excludeCountries: ["in", "il"],
    preferredCountries: ["vn", "in"]
});

var input = document.querySelector("#phoneTwo");
window.intlTelInput(input, {
    separateDialCode: true,
    // excludeCountries: ["in", "il"],
    preferredCountries: ["vn", "in"]
});

var input = document.querySelector("#phoneThree");
window.intlTelInput(input, {
    separateDialCode: true,
    // excludeCountries: ["in", "il"],
    preferredCountries: ["vn", "in"]
});

var input = document.querySelector("#phoneModal");
window.intlTelInput(input, {
    separateDialCode: true,
    // excludeCountries: ["in", "il"],
    preferredCountries: ["vn", "in"]
});