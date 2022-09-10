import outsideClick from "./outsideClick.js";

export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventsTriggers = ['click', 'touchstart']

    if(menuButton){
        function openMenu(event){
            menuList.classList.add('active');
            menuButton.classList.add('active')
            outsideClick(menuList, eventsTriggers, () =>{
                menuList.classList.remove('active');
                menuButton.classList.remove('active')
            })
        }

        eventsTriggers.forEach(trigger => menuButton.addEventListener(trigger, openMenu))
    }
}