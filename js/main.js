var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup:2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const resize = () =>{
    if (innerWidth < 800) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup:2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 6,
            spaceBetween: 10,
            slidesPerGroup:2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}

addEventListener('resize', resize)
addEventListener('DOMContentLoader', resize)
