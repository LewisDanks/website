function moveCard(e)  {
    e = e || window.event;
    var target = e.target || e.srcElement
    if(target.className === 'card'){
        if (target.className.includes("card")) {
            if (target.style.animation.includes('moveRight') && target.style.animationPlayState != 'running') {
                target.style.animationPlayState = 'running';
            }
            else if (target.style.animation.includes('moveLeft') && target.style.animationPlayState != 'running') {
                target.style.animationPlayState = 'running';
            }
            else if (target.style.animation.includes('moveRight') && target.style.animationPlayState === 'running') {
                target.style.animation = 'moveLeft 1s ease-out forwards';
            }
            else {
                target.style.animation = 'moveRight 1s ease-out forwards';
            }
        }
    }
}


$(document).ready(function () {    
    for (var i = 0; i < 51; i++) {
        jQuery('<div>', {
            id: 'card-' + i,
            class: 'card'
        }).appendTo('#deck')
    }
});
document.addEventListener('click', moveCard, false);
