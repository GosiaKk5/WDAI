let circle = document.querySelector("#circle");
let container = document.querySelector("#container");
let body = document.querySelector('body');
 
container.addEventListener("click", getClickPosition, false);
body.addEventListener("click", getBodyClicked, false);
 
function getClickPosition(e) {
    
    let xPosition = e.clientX - container.offsetLeft- (circle.clientWidth / 2);
    let yPosition = e.clientY - container.offsetTop- (circle.clientHeight / 2);

    document.querySelector('p').innerHTML = "Naciśnij gdziekolwiek"
     
    circle.style.left = xPosition + "px";
    circle.style.top = yPosition + "px";

    event.stopPropagation();

}

function getBodyClicked(){
    document.querySelector('p').innerHTML = "Kliknij w obrębie wyznaczonego miejsca"
}
