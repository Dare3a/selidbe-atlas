/*back to top*/
$("#back-to-top").hide();
$(document).ready(function () {
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() > 150) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });
    // scroll body to 0px on click
    $("#back-to-top").click(function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            400
        );
        return false;
    });
});