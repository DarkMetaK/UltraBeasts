import outsideClick from "./outsideClick.js";

export default function initDropdown(){
    const dropdownMenu = document.querySelectorAll('[data-dropdown]');
    const events = ['touchstart', 'click'];

    dropdownMenu.forEach(menu => {
        events.forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        });
    });


    function handleClick(event){
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, events, () => {
            this.classList.remove('active');
        });
    }
}