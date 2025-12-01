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

videoBackgroundInit()
menuControl()
locationHover()


sliderInit('.about-slider', {
        pagination: {
                el: '.about-slider-pagination',
        }
})

const careerImageItems = document.querySelectorAll('.career-image-item')
careerImageItems.forEach((item, i) => {
        item.classList.add(`career-image-item${i % 2 ? '_even' : '_odd'}`)
})
sliderCareer('.career-slider', {
        pagination: {
                el: '.career-slider-pagination',
        },
        breakpoints: {
                576: {
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


