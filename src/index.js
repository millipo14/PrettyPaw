import './index.html';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import { sliderCareer } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';

videoBackgroundInit()


sliderInit('.about-slider', {
        pagination: {
                el: '.about-slider-pagination',
        }
})

sliderCareer('.career-slider', {
        pagination: {
                el: '.career-slider-pagination',
        },
        breakpoints: {
                768: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        pagination: false
                },
                1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 26,
                        pagination: false
                },
                1240: {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                        pagination: false
                }
        }
})


