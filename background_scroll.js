const background_image = document.getElementById("background_image");

const originalX = background_image.style.left;
const originalY = background_image.style.top;

const mul = 0.3;

document.body.onpointermove = event =>{
    const {clientX, clientY} = event;
    background_image.animate({
        left: `${clientX * mul}px`,
        top: `${clientY * mul}px`
    }, {duration: 25000, easing:"ease-out", fill:"forwards"});
}