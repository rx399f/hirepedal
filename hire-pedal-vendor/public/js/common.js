// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.nav-link').bind('click', function(event) {
		$(".navbar-collapse").removeClass( "show" );
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.bp-navbar'
});

$('a.nav-link').click(function() {
    //console.log("Clicked");
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});