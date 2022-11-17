let count = 0;
let isPropagation = true;
let blueClicked = true;
let redClicked = false;
let yellowClicked = false;

document.querySelector('#propagation').onclick = () =>{
    if(isPropagation) document.querySelector('#propagation').innerHTML = "START PROPAGATION";
    else document.querySelector('#propagation').innerHTML = "STOP PROPAGATION";
    isPropagation = !isPropagation;
}

function displayLabel(){
    document.querySelector('#yellow-text').innerHTML = ".";
    document.querySelector('#red-text').innerHTML = ".";
    document.querySelector('#blue-text').innerHTML = ".";

    if (blueClicked){
        document.querySelector('#blue-text').innerHTML= "nacisnąłeś niebieski o wartości 1"
        blueClicked = false;
    }
    if (redClicked){
        document.querySelector('#red-text').innerHTML= "nacisnąłeś czerwony o wartości 2"
        redClicked = false;
    }   
    if (yellowClicked){
        document.querySelector('#yellow-text').innerHTML= "nacisnąłeś żółty o wartości 5"
        yellowClicked = false
    }
}

function addToCounter(points){
    count += points;
    document.querySelector('#counter').innerHTML = count;
    if(count > 30){
        document.querySelector('#container-2').style.backgroundColor = "grey"; 
        document.querySelector('#container-2').style.pointerEvents = 'none';
    }
    if(count > 50){
        document.querySelector('#container-3').style.backgroundColor = "grey";
        document.querySelector('#container-3').style.pointerEvents = 'none';
    }
}


document.querySelector('#container-1').onclick = () =>{
    addToCounter(1); 
    blueClicked = true;
    displayLabel();
}

document.querySelector('#container-2').onclick = () =>{
    addToCounter(2);
    redClicked = true;
    if (!isPropagation){
        displayLabel();
        event.stopPropagation();
    } 
           
}

document.querySelector('#container-3').onclick = () =>{
    addToCounter(5); 
    document.querySelector('#counter').innerHTML = count;
    yellowClicked = true;
    if (!isPropagation){
        displayLabel();
        event.stopPropagation();
    }
        
}

document.querySelector('#reset').onclick = () =>{
    count = 0;
    document.querySelector('#counter').innerHTML = count;
    document.querySelector('#container-2').style.pointerEvents = 'auto'; 
    document.querySelector('#container-2').style.backgroundColor = "red"; 
    document.querySelector('#container-3').style.pointerEvents = 'auto'; 
    document.querySelector('#container-3').style.backgroundColor = "yellow";
}

