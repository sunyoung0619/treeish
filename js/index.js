/*상단광고*/
var swiper = new Swiper(".top_banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    direction: "vertical",
});


/*메인배너 슬라이드*/
var swiper = new Swiper(".main_banner", {
    speed: 2500,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*베스트 아이템*/
var swiper = new Swiper(".best_item_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


/*리뷰슬라이드*/
var swiper = new Swiper(".review_out", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".review_out_next",
        prevEl: ".review_out_prev",
    },
});


/*이벤트 슬라이드*/
var swiper = new Swiper(".event_slide", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});