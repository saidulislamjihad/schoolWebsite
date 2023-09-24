// fixed header
// $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop();
//     if (scrollTop >= 100) {
//         $('body').addClass('fixed-header');
//     } else {
//         $('body').removeClass('fixed-header');
//     }
// });

// Navbar Toggle Button For Mini Device
$('.nav-toggle-btn').click(function() {
    $('.nav-items-wrapper').toggleClass('menu-visible');
    $('body').toggleClass('body-overflow');
}); 

$(document).ready(function() {
    // Nav submenu Responsive
    if ($(window).width() <= 1024) {
        $('.nav-item-submenu').addClass('collapse');
    } else {
        $('.nav-item-submenu').removeClass('collapse');
    }

    $(window).resize(function() {
        if ($(window).width() <= 1024) {
            $('.nav-item-submenu').addClass('collapse');
        } else {
            $('.nav-item-submenu').removeClass('collapse');
        }
    });

    // Nav submenu collapse Js
    $(window).resize(function() {
        if ($(window).width() <= 1024) {
            $('.item-has-submenu .nav-item-link').on('click', function(e) {
                e.preventDefault();
                $(this).closest('.nav-item').find('.collapse').collapse('toggle');
            });
        }
    });
    if ($(window).width() <= 1024) {
        $('.item-has-submenu .nav-item-link').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.nav-item').find('.collapse').collapse('toggle');
        });
    }

});


//Company Logo slider Js
$('.company-logo-items-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});

//Testimonial slider Js
$('.testimonial-items-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
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
});