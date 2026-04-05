var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "5",
    loop: true,
    speed: 3000, 
    autoplay: {
        delay: 1000, 
        disableOnInteraction: true,
    },
    coverflowEffect: {
        rotate: 20,
        stretch: -90, 
        depth: 150, 
        modifier: 1.5,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },
});