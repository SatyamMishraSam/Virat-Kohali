let hemberger = document.querySelector('.hamberger');
let close = document.querySelector('.close');
let mobileNav = document.querySelector('.mob-nav');

hemberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
})

close.addEventListener('click', function () {
    mobileNav.classList.remove('open');
})