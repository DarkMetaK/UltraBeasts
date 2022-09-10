export default function initAccordion(){
    const accordion = document.querySelectorAll('[data-accordion] dt')
    const activeClass = 'active';
    
    if(accordion.length){
        function handleAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordion.forEach(item => item.addEventListener('click', handleAccordion))
        accordion[0].classList.add(activeClass);
        accordion[0].nextElementSibling.classList.add(activeClass);
    }
}