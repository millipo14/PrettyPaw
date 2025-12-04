const showSection = () => {
    const hash = window.location.hash.substring(1);
    const sections = document.querySelectorAll('.page')
    const links = document.querySelectorAll('.navigation-link, .page-nav--link')

    for (const section of sections) {
        section.style.display = section.id === hash ? 'block' : 'none'
    }

    for (const link of links) {
        const linkUrl = link.getAttribute('href');
        const hashIndex = linkUrl.indexOf('#');
        const linkHash = hashIndex !== -1 ? linkUrl.substring(hashIndex + 1) : '';

        let classActive = '';

        if (link.classList.contains('navigation-link')) {
            classActive = 'navigation-link--active'
        }
        if (link.classList.contains('page-nav--link')) {
            classActive = 'page-nav--link_active'
        }
        if (linkHash === hash) {
            link.classList.add(classActive);
        } else {
            link.classList.remove(classActive);
        }
    }
}
export const pageControlInit = () => {
    window.addEventListener('load', showSection);
    window.addEventListener('hashchange', showSection);
}