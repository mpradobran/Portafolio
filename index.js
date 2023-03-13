var night = false;

$('.btn-navb').hover(
    function() {
        var icon = $(this).find('i').attr('id');
        $('#'+icon).css('font-size','24px');
      },
      function() {
        var icon = $(this).find('i').attr('id');
        $('#'+icon).css('font-size','');
      }
);

$('.btn-navb').click(
  function(){
    if(this.id != 'btn-aspect'){
      $(this).css('font-weight','bold');
      $('.btn-navb').not(this).css('font-weight','normal');  
    }else{
      $('.btn-navb').css('font-weight','normal');  
    }
  }
);

$('#btn-aspect').click(
  function(){
    if(!night){
      $('body').css('background-color','#121212');
      $('.a-navb-logo').css('color','white');
      $('.btn-navb').css('color','white');
      $('aside').css('background-color','#000000');

      night = true;
    }else{
      $('body').css('background-color','#FAFAFA');     
      $('.a-navb-logo').css('color','black');
      $('.btn-navb').css('color','black');
      $('aside').css('background-color','white');

      night = false;
    }
  }
);

$(window).resize(function() {
  if ($(window).width() <= 1400) {
    $('#btn-home').addClass('icon-only'); 

    $('.a-navb-logo').fadeOut('fast', function(){
      $('.img_logo').fadeIn('fast');
    });
    

    if ($(window).width() <= 850){
        $('.nav-top').fadeIn('fast');
    }else{
        $('.nav-top').fadeOut('fast');    
    }

  }else{
    $('.btn-navb').find('span').show();

    $('.img_logo').fadeOut('fast', function(){
      $('.a-navb-logo').fadeIn('fast');
    });

    $('.nav-top').fadeOut('fast');    
  }
});


if ($(window).width() <= 1400) {
  $('.a-navb-logo').fadeOut('fast', function(){
    $('.img_logo').fadeIn('fast');
  });

  if ($(window).width() <= 850){
    $('.nav-top').fadeIn('fast');
  }else{
      $('.nav-top').fadeOut('fast');    
  }

}else{
  $('.img_logo').fadeOut('fast', function(){
    $('.a-navb-logo').fadeIn('fast');
  });

  $('.nav-top').fadeOut('fast');    

}

