function createZombie(){
    let monster = document.createElement("div");
    let startY = -Math.floor(Math.random() * 50)+55;


    monster.addEventListener("click", zombieShot);

    monster.classList.add("zombie");
    monster.style.top = startY + "vh";
    monster.style.left = 100 + "vw";
    monster.style.transform = "scale(" + (Math.random()+0.5) + ")";
    noZombie++;
    monster.setAttribute("id", noZombie);
    board.appendChild(monster);

    move(monster);
}

function move(element) {
     
    let pos = 100
    let speedTab = [30,40,50,60,70];
    let speed = Math.floor(Math.random() * 5); 

    zombieRun[element.id] = setInterval(()=>{
        pos --;
        element.style.left = pos + "vw";
        if(pos === -20){
            element.remove();
            lostLives+=1;
            if(lostLives <= 3){
                document.getElementById("lives").innerHTML ='LIVES: '+ (3-lostLives);
            }
            
            if(lostLives === 3){
                endGame();
            }
            clearInterval(zombieRun[element.id]);
        }
        },speedTab[speed])
}

function zombieShot(){
    displayScore(18);
    clearInterval(zombieRun[this.id]);
    this.remove();
    
}

function boardShot(){
    displayScore(-6);
}

function startGame(){
    score = 0;
    lostLives = 0;
    noZombie = 0
    zombieRun.length = 0;
    document.getElementById("lives").innerHTML ='LIVES: '+ (3-lostLives);
    boardScore.innerHTML = score;
    let shouldAppear;
    gameRunning = setInterval ( () => {
        shouldAppear = Math.floor(Math.random() * 2);
        if(shouldAppear === 0){
            createZombie();
        } 

    }
    , 400);  
}

function endGame(){
    clearInterval(gameRunning);
    startWindowShow();
}

function displayScore(points){
    score+= points;
    boardScore.innerHTML = score;
}

function startWindowHide(){
    startWindow = document.getElementById("start-window");
    startWindow.style.display = "none";
}

function startWindowShow(){
    startWindow = document.getElementById("start-window");
    document.getElementById("window-text").innerHTML = "Your score: " + score +"<br> Try again!"; 
    startWindow.style.display = "block";
}

let lostLives;
let score;
const board = document.getElementById("board");
const startButton = document.querySelector('button');
let noZombie = 0;
let zombieRun = {};
let boardScore = document.getElementById("score");

startButton.addEventListener("click", startGame);
startButton.addEventListener("click", startWindowHide);
board.addEventListener("click", boardShot);









