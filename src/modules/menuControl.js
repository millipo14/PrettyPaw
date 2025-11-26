import { gsap } from "gsap";

export const menuControl = () => {
    const navigationButton = document.querySelector('.navigation-button');
    const navigationList = document.querySelector('.navigation-list');
    const navigationItems = document.querySelectorAll('.navigation-item');

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(navigationList,
        { opacity: 0, display: 'none', },
        { opacity: 1, display: 'block' }
    );
    navigationItems.forEach((elem, i) => {
        const x = i % 2 ? 500 : -500;
        tl.from(elem, { opacity: 0, x, duration: 1 }, '-=1')
    })


    const openMenu = () => {
        navigationButton.classList.add('navigation-button--active');
        tl.play();
    }
    const closeMenu = () => {
        tl.reverse();
    }
    tl.eventCallback('onReverseComplete', () => {
        navigationButton.classList.remove('navigation-button--active');
    })


    navigationButton.addEventListener('click', () => {
        if (navigationButton.classList.contains('navigation-button--active')) {
            closeMenu()
        } else {
            openMenu()
        }
    })

    const checkScreenSize = (e) => {
        if (e.matches) {
            gsap.set(navigationList, { opacity: 1, display: 'flex' })
            navigationItems.forEach((elem, i) => {
                const x = i % 2 ? 500 : -500;
                gsap.set(elem, { opacity: 1, x: 0 },)
            })
        } else {
            gsap.set(navigationList, { opacity: 0, display: 'none' })
            navigationItems.forEach((elem, i) => {
                const x = i % 2 ? 500 : -500;
                gsap.set(elem, { opacity: 0, x, duration: 1 })
            })
        }
    }
    const mediaQuery = window.matchMedia('(min-width: 1240px)');
    mediaQuery.addEventListener('change', checkScreenSize)
    checkScreenSize(mediaQuery)
}