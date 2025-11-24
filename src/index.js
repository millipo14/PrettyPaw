import './index.html';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import { sliderCareer  } from './modules/sliders';

sliderInit('.about-slider', {
        pagination: {
                el: '.about-slider-pagination',
        }
})

sliderCareer('.career-slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
                el: '.career-slider-pagination',
                clickable: true
        },
        // Добавляем эффект coverflow
        effect: 'coverflow',
        coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
        },
        breakpoints: {
                768: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        centeredSlides: true,
                        coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false
                        }
                },
                1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 26,
                        centeredSlides: true,
                        coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 150,
                                modifier: 1,
                                slideShadows: false
                        }
                },
                1240: {
                        slidesPerView: 'auto',
                        centeredSlides: true,
                        spaceBetween: 30,
                        coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 200,
                                modifier: 1,
                                slideShadows: false
                        }
                }
        }
})


const videoBG = document.querySelector('.video-bg')
videoBG.innerHTML = `
        <source src="video/video.webm" type="video/webm">
        <source src="video/video.mp4" type="video/mp4">
        `;