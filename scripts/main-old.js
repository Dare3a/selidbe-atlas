let dropDownTab = Array.from(document.querySelectorAll(".dropdown"));
let dropDownTabClicable = document.querySelector("#navbarDropdownMenuLink");
let dropDownMenu = Array.from(document.querySelectorAll(".dropdown-menu"));
// Otvaranje dropdown menija u navigaciji onhover
if (dropDownTabClicable) {
    dropDownTab.forEach(tab => {
        tab.addEventListener("mouseenter", () => {
            const index = dropDownTab.indexOf(tab);
            dropDownMenu[index].classList.add("show");
        })
    });
}
// Zatvaranje dropdown menija u navigaciji na izlaz misa
if (dropDownMenu) {
    let dropDownList = dropDownTab;
    dropDownList.forEach((element) => {
        element.addEventListener("mouseleave", () => {
            const index = dropDownList.indexOf(element);
            dropDownMenu[index].classList.remove("show");
        });
    });
}
// SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function (event) {

    const button = document.querySelector('#back-to-top');

    button.addEventListener('click', function () {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY < 200) {
            button.style.opacity = "0";
        } else {
            button.style.opacity = "1";
        }
    });

});
// Toast za poslatu poruku u kontakt formi
const toastMsg = document.querySelector('.toast')

function toast() {
    toastMsg.classList.replace('hide', 'show')
    setTimeout(() => {
        toastMsg.classList.replace('show', 'hide')

    }, 2000);
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
