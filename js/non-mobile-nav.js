jQuery(document).ready(function () {
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#non-mobile-nav').addClass('stick');
        $('#sticky-anchor').height($('#non-mobile-nav').outerHeight());
    } else {
        $('#non-mobile-nav').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

var dir = 1;
var MIN_TOP = 200;
var MAX_TOP = 350;

function autoscroll() {
    var window_top = $(window).scrollTop() + dir;
    if (window_top >= MAX_TOP) {
        window_top = MAX_TOP;
        dir = -1;
    } else if (window_top <= MIN_TOP) {
        window_top = MIN_TOP;
        dir = 1;
    }
    $(window).scrollTop(window_top);
    window.setTimeout(autoscroll, 100);
}
});

$(function(){
// Activ function for Side-Nav
    $('.side-nav a').click(function(){
        $('.side-nav .side-nav-active').removeClass('side-nav-active'); // remove the class from the currently selected
        $(this).addClass('side-nav-active'); // add the class to the newly clicked link
    });
});