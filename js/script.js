$(window).on('load', function () {


    $("#status").delay(250).fadeOut();

    $("#preloader").delay(350).fadeOut();
});


$(function () {
    $("#cakes").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                item: 1
            },
            480: {
                items: 4

            },
            768: {
                items: 5

            }


        }

        //<i class="fas fa-angle-right"></i>

    });

});
/*Filters*/

$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*navigation
 */





$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "images/logo/main-dark.png");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "images/logo/main.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});




$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 130
        }, 1440, "easeInOutExpo");

    });

});

/*Animation*/
$(function () {

    new WOW().init();

});



$(window).on('load', function () {
    $("#main-heading-1").addClass("animated fadeInDown");
    $("#main-heading-2").addClass("animated fadeInLeft");
    $(".btn-home").addClass("animated zoomIn");


});

/**/
