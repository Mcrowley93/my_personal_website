// This function makes all elements with the .card class type, have their columns match height, so should one
// card contain more text than the next card, both cards will still be the same height
// Found help for this at:
// https://scotch.io/bar-talk/different-tricks-on-how-to-make-bootstrap-columns-all-the-same-height

$(function() {
    $('.card').matchHeight();
});

$('.collapse').collapse();

// jQuery allows for the navbar to collapse when clicking outside of the navbar,
// rather than just on navbar-toggler button click
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
