let count = 0;
let isPropagation = true;
let blueClicked = true;
let redClicked = false;
let yellowClicked = false;
let order = true;

document.querySelector('#propagation').onclick = () =>{
    if(isPropagation) document.querySelector('#propagation').innerHTML = "START PROPAGATION";
    else document.querySelector('#propagation').innerHTML = "STOP PROPAGATION";
    isPropagation = !isPropagation;
}

document.querySelector('#order').onclick = () =>{
    order = !order;
}

function displayLabel1(){

    document.querySelector('#text').innerHTML = "";

    if (blueClicked){
        document.querySelector('#text').innerHTML+= "nacisnąłeś niebieski o wartości 1 <br>";
        blueClicked = false;
    }
    if (redClicked){
        document.querySelector('#text').innerHTML+= "nacisnąłeś czerwony o wartości 2 <br>";
        redClicked = false;
    }   
    if (yellowClicked){
        document.querySelector('#text').innerHTML+= "nacisnąłeś żółty o wartości 5 <br>";
        yellowClicked = false;
    }
}

function displayLabel2(){

    document.querySelector('#text').innerHTML = "";

    if (yellowClicked){
        document.querySelector('#text').innerHTML+= "nacisnąłeś żółty o wartości 5 <br>";
        yellowClicked = false;
    }
    if (redClicked){
        document.querySelector('#text').innerHTML+= "nacisnąłeś czerwony o wartości 2 <br>";
        redClicked = false;
    }   
    if (blueClicked){
        document.querySelector('#text').innerHTML+= "nacisnąłeś niebieski o wartości 1 <br>";
        blueClicked = false;
    }
   
}

function addToCounter(points){
    count += points;
    document.querySelector('#counter').innerHTML = count;
    if(count > 30){
        document.querySelector('#container-2').style.backgroundColor = "grey"; 
        document.querySelector('#container-2').removeEventListener("click", container2);
    }
    if(count > 50){
        document.querySelector('#container-3').style.backgroundColor = "grey";
        document.querySelector('#container-3').removeEventListener("click", container3);
    }
}


function container1(){
    console.log(1);
    addToCounter(1);
    console.log(yellowClicked); 
    document.querySelector('#counter').innerHTML = count;
    blueClicked = true;
    if(order){
        displayLabel1();
    }
    else{
        displayLabel2();
    } 
}

function container2(){
    console.log(2);
    addToCounter(2);
    document.querySelector('#counter').innerHTML = count;
    redClicked = true;
    
    if (!isPropagation){
        
        if(order){
            displayLabel1();
        }
        else{
            displayLabel2();
        } 
        event.stopPropagation();
        
    }
}

function container3(){
    console.log(3);
    addToCounter(5); 
    document.querySelector('#counter').innerHTML = count;
    yellowClicked = true;
    
    
    if (!isPropagation){
        
        if(order){
            displayLabel1();
        }
        else{
            displayLabel2();
        } 
        event.stopPropagation();
        
    }
        
}

document.querySelector('#reset').onclick = () =>{
    count = 0;
    document.querySelector('#counter').innerHTML = count; 
    document.querySelector('#container-2').style.backgroundColor = "red";  
    document.querySelector('#container-3').style.backgroundColor = "yellow";  
    document.querySelector('#container-2').addEventListener("click", container2);
    document.querySelector('#container-3').addEventListener("click", container3);
}

document.querySelector('#container-1').addEventListener("click", container1);
document.querySelector('#container-2').addEventListener("click", container2);
document.querySelector('#container-3').addEventListener("click", container3);