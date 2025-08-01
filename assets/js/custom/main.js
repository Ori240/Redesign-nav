AOS.init();

/* OWL CAROUSEL */
$('.testimonial-owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:5000,
    smartSpeed:1000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  })

/* COUNTER */
var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter-box").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".count-up").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text()
      }).animate(
      {
        countNum: countTo
      },
      {
        duration: 3000,
        easing: "swing",
        step: function () {
          $this.text(
            Math.ceil(this.countNum).toLocaleString("en")
          );
        },
        complete: function () {
          $this.text(
            Math.ceil(this.countNum).toLocaleString("en")
          );
        }
      }
    );
  });
    a = 1;
  }
});