"use strict";

// Otvaranje i zatvaranje hamburgera
const hamburgerImg = document.querySelector('#hamburgerImg');
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (nav.classList.contains('flex-column')) {
            nav.classList.replace('flex-column', 'd-none')
            hamburgerImg.classList.replace('hamburgerX', 'hamburgerHam')
            hamburgerImg.innerHTML = '&equiv;'
        } else {
            nav.classList.replace('' +
                'd-none', 'flex-column');
            hamburgerImg.classList.replace('hamburgerHam', 'hamburgerX')
            hamburgerImg.innerHTML = '&#10799;'
        }
    })
}

// Otvaranje i zatvaranje podmenija u navigaciji za mobilni
const padajuciMeni = document.querySelectorAll('#uslugeStrelica, #selidbeBgStrelica, #prevozStrelica,' +
    ' #onamaStrelica');
const padajuciMeniLista = document.querySelectorAll('#uslugeMenu, #selidbeBgMenu, #prevozMenu, #onamaMenu');
if (padajuciMeni) {
    padajuciMeni.forEach(item => {
        item.addEventListener('click', () => {
            const index = Array.prototype.indexOf.call(padajuciMeni, item)
            if (padajuciMeniLista[index].classList.contains('show-nav-menu')) {
                padajuciMeniLista[index].classList.remove('show-nav-menu')
            } else {
                padajuciMeniLista[index].classList.add('show-nav-menu');
            }
        })
    })
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
    const navItems = navigacijaUl.querySelectorAll(".nav-item");

    for (let item of navItems) {
        let dropdownOpen = false; // pratimo stanje dropdown-a

        if (!item.classList.contains("dropdown")) {
            item.addEventListener("click", () => {
                navigationColapse(800);
            });
        } else {
            item.addEventListener("click", () => {
                setTimeout(() => {
                    item.children[1].classList.toggle("prikazan");
                }, 100);

                dropdownOpen = !dropdownOpen;

                if (dropdownOpen) {
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
