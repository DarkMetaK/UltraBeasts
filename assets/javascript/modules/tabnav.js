export default function initTabNav(){
    const menu = document.querySelectorAll('[data-tab="menu"] li')
    const desc = document.querySelectorAll('[data-tab="content"] section')

    if(menu.length && desc.length){
        desc[0].classList.add('active')

        function handleImage(e){
            menu.forEach((item, index) => {
                if(e.currentTarget === item)
                    desc[index].classList.add('active', desc[index].dataset.anime)
                else
                    desc[index].classList.remove('active')
            })
        }

        menu.forEach((item) => item.addEventListener('click', handleImage))  
    }  
}