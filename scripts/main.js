let dropDownTab = document.querySelector(".dropdown");
let dropDownTabClicable = document.querySelector("#navbarDropdownMenuLink");
let dropDownMenu = document.querySelector(".dropdown-menu");
// Otvaranje dropdown menija u navigaciji onhover
if (dropDownTabClicable) {
    dropDownTab.addEventListener("mouseenter", () => {
        dropDownMenu.classList.add("show");
        console.log("radim");
    });
}
// Zatvaranje dropdown menija u navigaciji na izlaz misa
if (dropDownMenu) {
    let dropDownList = [dropDownTab];
    dropDownList.forEach((element) => {
        element.addEventListener("mouseleave", () => {
            dropDownMenu.classList.remove("show");
            console.log("radim na izlas");
        });
    });
}
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
