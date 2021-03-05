$(document).ready(function(){
 //скролл ссылок 
    $(document).on('click', '.menu__link, #link-one, #link-two', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

  $('nav [href]').each(function() {
    if (this.href == window.location.href) {
      $(this).addClass('active');
    }
  });



//модальное окно
    $('[data-modal=project]').on('click', function(e) {
        e.preventDefault();
        var linkforemove = $(this).attr('href');
        $('body').css({
            'overflow-y': 'hidden',
            'marginRight': widthScroll + 'px'
        });
        $('.overlay').css('overflow', 'scroll');
        $(linkforemove).fadeIn('slow');
        $('.overlay').fadeIn('slow');
    });

    function closeModal() {
        $('.overlay').css('overflow', '');
        $('.overlay, .modal').fadeOut('slow'); 
        $('body').css({
            'overflow-y': '',
            'marginRight': '0px'
        });
    }


    $('.modal__close').on('click', function() {
        closeModal();
    });

    $('.overlay').on('click', function(e) {
        if(($(e.target).hasClass("overlay"))) {
            closeModal();
        }
    });



    var widthScroll = scrollbarWidth();


    function scrollbarWidth() {
        var block = $('<div>').css({'height':'50px','width':'50px'}),
            indicator = $('<div>').css({'height':'200px'});
    
        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();    
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }


    //гамбургер меню

    $('input[type="checkbox"]').click(function(){
        $('.menu').slideToggle();
    });


    if ($(window).width() < 575) {
        $('.menu__link').on('click', function() {
        $('input[type="checkbox"]').prop('checked', false);
        $('.menu').slideUp();
        }); 
    }

  });
  
   
    

