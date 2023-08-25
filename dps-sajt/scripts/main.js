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

// Toast za poslatu poruku u kontakt formi
const toastMsg = document.querySelector('.toast')

function toast() {
    toastMsg.classList.replace('hide', 'show')
    setTimeout(() => {
        toastMsg.classList.replace('show', 'hide')

    }, 1200);
}

// Reset kontakt forme i modal kontakt forme
const kontaktForma = document.querySelector("#form-contact")
const kontaktFormaBtn = document.querySelector('.send-dugme')
if (kontaktForma) {
    kontaktForma.addEventListener('submit', toast)
    kontaktForma.addEventListener('submit', resetForm)
}

function resetForm() {
    setTimeout(() => {
        kontaktForma.reset();
    }, 1000);
}