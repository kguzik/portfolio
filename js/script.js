    $(window).scroll(function(){
        $('#my-photo').each(function(i){
            if( $(window).scrollTop() > 300 ){
                $(this).animate({'opacity':'1'}, 1500);
            }
        }); 
    });
    
    $('#home').on('click', function(e){
      var $target = $('html,body');
      $target.animate({scrollTop: $target.height() - $target.height()}, 500);
      if ($('.navbar-collapse').hasClass('show')){
        $('.navbar-collapse').toggleClass('show');
        $('.navbar-toggler').toggleClass('collapsed');
      }
    });
    //'a[href*="#"]:not([href="#"]'
    $('.nav-link').on('click', function(){
            $('html, body').animate({ scrollTop:
            $(this.hash).offset().top - 40 }, 600);
            $('.navbar-collapse').toggleClass('show');
            $('.navbar-toggler').toggleClass('collapsed');
    });




