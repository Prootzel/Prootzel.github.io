const scroll_container = document.getElementById("gallery");

const scroll_mul = 0.1;

document.body.onpointermove = event =>{
    
    const {clientX, clientY} = event;
    const height = document.body.clientHeight;
    if(clientY > (height*5) && clientY < (height*15)){
        scroll_container.animate({
            left: `${(-clientX * scroll_mul) + document.body.clientWidth/2 + document.body.clientWidth/2 * (1-scroll_mul)}px`
        }, {duration: 4000, easing:"ease-out", fill:"forwards"});
    }
    
}