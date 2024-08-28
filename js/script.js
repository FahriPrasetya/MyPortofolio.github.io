const hamburgerMenu = document.querySelector('.hamburger-menu');
const body = document.body;

// navbar muncul dan hilang
hamburgerMenu.addEventListener('click', function () {
    const navigationBar = document.querySelector('header ul');
    navigationBar.classList.toggle('ul-active');

    const menuNavigationBar = document.querySelectorAll('header ul li');
    menuNavigationBar.forEach(function (menu) {
        menu.addEventListener('click', function () {
            navigationBar.classList.remove('ul-active')
        })
    })

})

// efek scroll
// navbar
document.querySelectorAll('.home a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
// swipe up

// animation show image
const spanCertificate = document.querySelectorAll('.icon-eye');
const overlayCertificate = document.querySelectorAll('.overlay-image-certificate');
const fieldOverlayCertificate = document.querySelectorAll('.field-overlay-certificate')
const buttonCloseOverlay = document.querySelectorAll('.overlay-image-certificate button');
const slideBeforeCertificate = document.querySelectorAll('.slide-before-image-certificate')
const slideAfterCertificate = document.querySelectorAll('.slide-after-image-certificate');
const imageCertificate = document.querySelectorAll('.img-certificate');



spanCertificate.forEach(function (e, i) {
    e.addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(1)';
    });
})

buttonCloseOverlay.forEach(function (e, i) {
    e.addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
    });
})

for(let i = 0; i<slideAfterCertificate.length; i++) {
    slideAfterCertificate[i].addEventListener('click',function() {
        overlayCertificate[i].style.transform = 'scale(0)';
        overlayCertificate[i+1].style.transform = 'scale(1)';
    })
}

for(let i = 0; i<slideBeforeCertificate.length; i++) {
    slideBeforeCertificate[i].addEventListener('click',function() {
        overlayCertificate[i].style.transform = 'scale(0)';
        overlayCertificate[i-1].style.transform = 'scale(1)';
    })
}



