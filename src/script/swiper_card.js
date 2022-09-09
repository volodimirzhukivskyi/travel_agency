let swiper = new Swiper(".slider", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        500: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        750: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});