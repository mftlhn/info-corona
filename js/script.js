//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }

// var x = window.matchMedia("(min-width: 992px)")

var navbar = $("nav");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 200) {
        navbar.addClass('shadow');
        navbar.addClass('bg-light');
        navbar.removeClass('bg-transparent');
    } else {
        navbar.removeClass('shadow');
        navbar.removeClass('bg-light');
        navbar.addClass('bg-transparent');
    }
})