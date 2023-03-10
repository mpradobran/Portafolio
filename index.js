
gsap.from('.img-princ',{opacity: 0, duration: 1, x: -100})
gsap.from('.stagger',{opacity: 0, duration: 1, y: -50, stagger: 0.6})

var img = $('.img-princ');
img.attr('src', 'img/compu.gif');
setTimeout(function() {
  img.attr('src', 'img/compu2.png');
}, 3000);


if ($(window).width() <= 995) {
}

$('.navbar-brand').hover(
    function() {
        var img = $('.img-princ');
        img.attr('src', 'img/compu.gif');
        setTimeout(function() {
          img.attr('src', 'img/compu2.png');
        }, 3000);
      },
      function() {
        $(this).attr('src', 'img/compu2.png');
      }  
)