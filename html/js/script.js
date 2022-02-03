function moveCard(e)  {
    e = e || window.event;
    var target = e.target || e.srcElement
    if(target.className.includes("card")){
        if(target.style.animationPlayState != 'running') {
            target.style.animationPlayState = 'running';
        }
        else {
            target.style.animationPlayState = 'paused';
        }
    }
}

document.addEventListener('click', moveCard, false);
