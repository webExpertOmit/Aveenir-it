//==============================
//    Owl Carosal
//===============================

$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2500,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


//============Fixed Menu====================== 

$(document).ready(function () {
    $(window).scroll(function () {
        var menuFixed = $(this).scrollTop();
        if (menuFixed > 60) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    })
})




//============Scroll Top======================
$(document).ready(function () {

    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });


    $('.top').hide();

    $(window).scroll(function () {
        var topButton = $(this).scrollTop();

        if (topButton < 400) {
            $('.top').fadeOut();
        } else {
            $('.top').fadeIn();
        }
    });

});


//============jQuery.countup======================

$(document).ready(function () {
    $('.counter').countUp({
        'time': 3000,
        'delay': 10
    });

});


//================smooth scroll============

$(document).ready(function () {
    $('a').smoothScroll();
});





//============jQuery.barfiller======================

$(document).ready(function () {
    $('#bar1').barfiller({
        duration: 3000,
        barColor: "#FF5722"
    });
    $('#bar2').barfiller({
        duration: 3000,
        barColor: "#FF5722"
    });
    $('#bar3').barfiller({
        duration: 3000,
        barColor: "#FF5722"
    });
    $('#bar4').barfiller({
        duration: 3000,
        barColor: "#FF5722"
    });
    $('#bar5').barfiller({
        duration: 3000,
        barColor: "#FF5722"
    });
    $('#bar6').barfiller({
        duration: 3000,
        barColor: "#FF5722"
    });
});
