let inputDir={x:0,y:0};

const foodSound = new Audio  ('food.mp3');
const gameOverSound = new Audio ('game-over.mp3');
const moveSound = new Audio ('move.mp3');
const musicSound = new Audio ();

let right = document.querySelector("#right")
let left = document.querySelector("#left")
let up = document.querySelector("#up")

let down= document.querySelector("#down")
let button = document.querySelectorAll(".button")
let buttons = document.querySelectorAll(".subBtn")
let gameover =document.querySelector (".gameover");
let newgame=document.querySelector  (".newbtn")
let blur=document.querySelector(".blur");

let counter = document.querySelector('#counter')
let score =0;
let lastPaintTime=0;
let snakeArr=[{x:13,y:15}];
food = {x: 6, y: 7};
 let count =5.;
 
   
       function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime-lastPaintTime)/1000<1/count ) {
    return;
  }
lastPaintTime=ctime;
gameEngine();

}
     
   
 

function isCollide(snake) {

   
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;

}
function gameov(){
  gameover.classList.add("show");
  
blur.classList.add("show");

}
function gameEngine() {
  
  if(isCollide(snakeArr)){

        gameOverSound.play();

        //musicSound.pause();
        inputDir =  {x: 0, y: 0}; 
    gameov();
  
      
        snakeArr = [{x: 13, y: 15}];
       // musicSound.play();
        score = 0; 
       
    }
   
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){

        foodSound.play();

        score += 1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("High Score", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "High Score: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    
}

    
    for (let i = snakeArr.length - 2; i>=0; i--) { 

        snakeArr[i+1] = {...snakeArr[i]};

    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
   
      
    //snake and food
    
board.innerHTML = "";
  snakeArr.forEach((e,index)=>{
    snakeElem=document.createElement('div');
    snakeElem.style.gridRowStart=e.y;
    snakeElem.style.gridColumnStart=e.x;
    if(index === 0){

            snakeElem.classList.add('head');

        }
        else{
            snakeElem.classList.add('snake');
        }
        board.appendChild(snakeElem);
  });
  foodElement = document.createElement('div');

    foodElement.style.gridRowStart = food.y;

    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
  
}

//musicSound.play();
//scores 

let hiscore = localStorage.getItem("hiscore");

if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "High Score: " + hiscore;
}


//arrows buuton
window.requestAnimationFrame(main);
//inputDir = {x: 0, y: 1} 
const ups = ()=>{
  
  inputDir.x = 0;
            inputDir.y = -1;
            
}

up.addEventListener("click",ups);


const downs = ()=>{
  
  inputDir.x = 0;
            inputDir.y = 1;
}

down.addEventListener("click",downs);

const lefts = ()=>{
  
  inputDir.x = -1;
            inputDir.y = 0;
}

left.addEventListener("click",lefts);


const rights = ()=>{
  
  inputDir.x = 1;
            inputDir.y = 0;
}

right.addEventListener("click",rights);

const ch = function change() {
 
gameover.classList.remove("show");
  
blur.classList.remove("show");
  
  let score=0;
  scoreBox.innerHTML = "Score: " + score;
}
newgame.addEventListener("click",ch );
/*
window.addEventListener('keydown', e =>{

    inputDir = {x: 0, y: 1} // Start the game

   // moveSound.play();
    switch (e.key) {
        case "ArrowUp":
       
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
          
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
        
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
           
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }

});*/
