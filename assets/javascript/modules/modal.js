export default function initModal(){
    const openButton = document.querySelector('[data-modal="open"]');
    const closeButton = document.querySelector('[data-modal="close"]');
    const modalSection = document.querySelector('[data-modal="container"]');

    if(openButton && closeButton && modalSection){
        function openModal(e){
            e.preventDefault();
            modalSection.classList.add("active");
        }

        function closeModal(e){
            e.preventDefault();
            modalSection.classList.remove("active");
        }

        function outsideClick(e){
            if(e.target === e.currentTarget)
                closeModal(e);
        }

        openButton.addEventListener('click', openModal);
        closeButton.addEventListener('click', closeModal);
        modalSection.addEventListener('click', outsideClick)
    }
}