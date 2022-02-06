let animating = false;
let firstTime = true;

function moveCard(e) {
    if(!animating || firstTime){
        
        e = e || window.event;
        var target = e.target || e.srcElement
        if (target.className === 'card') {
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
        if(firstTime) firstTime = false;
    }
}

function appendNCopies(n, element, appendTo) {
    for(var i = 0; i < n; i++) {
        var clone = element.cloneNode(true);
        appendTo.appendChild(clone);
    }
}


$(document).ready(function () { 
    animating = false;
    firstTime = true;
    var card = document.getElementsByClassName('card')[0];
    var deck = document.getElementsByClassName('deck')[0];
    appendNCopies(51, card, deck);
    $('.card').on("animationstart", () => {
        animating = true;
        console.log("Animation Starting: " + animating); 
    });
    $('.card').on("animationend", () => {
        animating = false;
        console.log("Animation Starting: " + animating); 
    });
});

document.addEventListener('click', moveCard, false);
