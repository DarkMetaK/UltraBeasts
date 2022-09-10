export default function initScrollAnimation(){
    const sections = document.querySelectorAll('[data-scroll]')
    sections[0].classList.add('active')
    
    if(sections.length){
        function animationScroll(){
            const halfscreen = window.innerHeight*0.6;

            sections.forEach(item => {
                const top = item.getBoundingClientRect().top
                const sectionIsVisible = top - halfscreen < 0
                if(sectionIsVisible){
                    item.classList.add('active')
                } else if(item.classList.contains('active')){
                    item.classList.remove('active')
                }
            })
        }

        window.addEventListener('scroll', animationScroll)
    }
}