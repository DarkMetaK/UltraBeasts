export default function initToolTip(){
    const tooltips = document.querySelectorAll("[data-tooltip]")

    if(tooltips.length){

        tooltips.forEach((item) => {
            item.addEventListener("mouseover", onMouseOver)
        })
        
        function onMouseOver(){
            const tooltip = createToolTipBox(this)
            
            onmousemove.tooltipBox = tooltip;
            onmouseleave.tooltipBox = tooltip;
            onmouseleave.element = this;
        
            this.addEventListener('mouseleave', onmouseleave)
        
            this.addEventListener('mousemove', onmousemove)
        }
        
        const onmouseleave = {
            handleEvent(){
                this.tooltipBox.remove();
                this.element.removeEventListener('mouseleave', onmouseleave);
                this.element.removeEventListener('mousemove', onmousemove);
            }
        }
        
        const onmousemove = {
            handleEvent(e){
                this.tooltipBox.style.top = e.pageY + 20 + "px";
                this.tooltipBox.style.left = e.pageX + 20 + "px";
            }
        }
        
        function createToolTipBox(element){
            const tooltipBox = document.createElement('div');
            tooltipBox.classList.add('tooltip');
        
            const text = element.getAttribute('aria-label')
            tooltipBox.innerText = text
            document.body.appendChild(tooltipBox)
            return tooltipBox;
        }
    }
}