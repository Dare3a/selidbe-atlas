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
// Reset kontakt forme i modal kontakt forme
function resetForm() {
    setTimeout(() => {
        $("#form-contact")[0].reset();
        $("#form-contact-modal")[0].reset();
    }, 1000);

    console.log("resetovao sam formu");
}

const windowWidth = window.innerWidth;
const navigacija = document.querySelector(".navbar");
const navigacijaUl = document.querySelector(".navbar-nav");
const navbarDropped = document.querySelector(".navbar-collapse");
const hamburgerDugme = document.querySelector(".navbar-toggler");
if (windowWidth < 992) {
    let navItems = navigacijaUl.querySelectorAll(".nav-item");
    for (let item of navItems) {
        if (!item.classList.contains("dropdown")) {
            item.addEventListener("click", () => {
                navigationColapse(800);
            });
        } else {
            item.addEventListener("click", () => {
                setTimeout(() => {
                    item.children[1].classList.toggle("prikazan");
                }, 100);
                if (item.children[1].classList.contains("prikazan")) {
                    item.children[1].classList.remove("show");
                } else {
                    item.children[1].classList.add("show");
                }
            });
        }
    }
}

function navigationColapse(interval) {
    setTimeout(() => {
        hamburgerDugme.click();
    }, `${interval}`);
}
