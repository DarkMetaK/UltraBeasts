export default function initSmoothScroll(){
    const links = document.querySelectorAll("[data-menu] a[href^='#']")

    function handleLink(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        console.log(section)

        section.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        })
    }

    links.forEach(item => item.addEventListener('click', handleLink))
}