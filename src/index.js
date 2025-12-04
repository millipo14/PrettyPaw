import './index.html';
import './page.html';
//new modules
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import { sliderCareer } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';
import { initScrollTopButton } from './modules/scrolTopButton';
import { pageControlInit } from './modules/pageControl';

videoBackgroundInit()
menuControl()
locationHover()
initScrollTopButton('arrow-top', {
        hover: false,
})
pageControlInit()


sliderInit('.about-slider', {
        pagination: {
                el: '.about-slider-pagination',
                enabled: true,
        }
})

const careerImageItems = document.querySelectorAll('.career-image-item')
careerImageItems.forEach((item, i) => {
        item.classList.add(`career-image-item${i % 2 ? '_even' : '_odd'}`)
})
sliderCareer('.career-slider', {
        pagination: {
                el: '.career-slider-pagination',
                enabled: true,
        },
        breakpoints: {
                576: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        pagination: {
                                enabled: false,
                        }
                },
                1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 26,
                        pagination: {
                                enabled: false,
                        }
                },
                1240: {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                        pagination: {
                                enabled: false,
                        }
                }
        }
})


