const choices = ["rock", "paper", "scissor"];

const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");

let result;
function playgame(playerchoice){
    computerchoice = choices[Math.floor(Math.random()*3)];
    if(playerchoice === computerchoice){
        result = "Tie";
    }
    else{
         switch(playerchoice){
             case "rock":
                 result = (computerchoice === "scissor")? "You Win": "You Lose";
                 break;
             case "paper":
                 result = (computerchoice === "rock")? "You Win": "You Lose";
                 break;
             case "scissor":
                 result = (computerchoice === "paper")? "You Win": "You Lose";
                 break;   
     
            }   
        }
        playerdisplay.textContent = "Player: " + playerchoice;
        computerdisplay.textContent = "Computer: " + computerchoice;
        resultdisplay.textContent = "Result: " + result;
        
        if (result === "You Win") {
            resultdisplay.style.animation = "winAnimation 1s";
            setTimeout(function(){ resultdisplay.style.animation = ""; }, 1000);
        } else if (result === "You Lose") {
            resultdisplay.style.animation = "lossAnimation 1s";
            setTimeout(function(){ resultdisplay.style.animation = ""; }, 1000);
        } else {
            resultdisplay.style.animation = "";
        }
}



