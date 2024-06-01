const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
} );


searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


const badgeEl = document.querySelector('Header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
 gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
 });
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween:10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true 
    },
    navigation: {
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});