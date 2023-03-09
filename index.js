
var img = $('.img-princ');
img.attr('src', 'img/compu.gif');
setTimeout(function() {
  img.attr('src', 'img/compu2.png');
}, 3000);


$(".name").animate({ top: "20px" }, 1000);

$("h1").animate({ bottom: "450px" }, 1000);
$(".description").animate({ bottom: "450px" }, 1000);

if ($(window).width() <= 995) {
  $(".img-princ").animate({ bottom: "450px" }, 1000);
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