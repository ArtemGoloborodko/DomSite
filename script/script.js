/* Блок вылетающий в навигации */

const navBlockOne = document.getElementById('nav_1')

const blockOne = document.querySelector('.nav_item_block ')
const svgRotade = document.querySelector('.nav_svg')

navBlockOne.addEventListener('click', () => {
    blockOne.classList.toggle('nav_item_block__open')
    svgRotade.classList.toggle('nav_svg__rotade')
});

/* Блок поиска */

const navSerch = document.querySelector('.nav_serch')
const navSerchBlock = document.querySelector('.nav_block2')

navSerch.addEventListener('click', () => {
    navSerchBlock.classList.toggle('nav_serch__open')
});


/* табы блока 3  */

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        e.currentTarget.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});



var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 60,

    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    hiddenClass: 'swiper-button-hidden',
});

