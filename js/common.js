
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});  

// map
let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");
let close = document.querySelector("#close");

menuIcon.addEventListener("click", () => {
	menu.classList.add("active");
	menuIcon.classList.add("active");
});
close.addEventListener("click", () => {
	menu.classList.remove("active");
	menuIcon.classList.remove("active");
});

// map

 // Initialize the map
 var map = L.map('map').setView([19.0760, 72.8777], 13); // Mumbai coordinates

 // Add a tile layer (OpenStreetMap)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Add a marker to the map
 L.marker([19.0760, 72.8777]).addTo(map) // Mumbai coordinates
   .bindPopup('Mumbai, India');

   
/* ***** Slideanim  ***** */
 $(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
}); 


// testominal

(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


  
