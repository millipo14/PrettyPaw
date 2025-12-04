import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';


const params = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    pagination: {
        el: '.slider-pagination',
        enabled: true,
    },
    modules: [Autoplay, Pagination]
};

export const sliderInit = (selectorSlider, newParams) => {
    new Swiper(selectorSlider, {
        ...params,
        ...newParams
    })
};

export const sliderCareer = (selectorSlider, newParams) => {
    new Swiper(selectorSlider, {
        ...params,
        ...newParams
    })
};