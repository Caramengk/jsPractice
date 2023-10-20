let count = 20;
let highScore = 0;
let randomNumber;

const getRandomInt = () => Math.floor(Math.random() * 20) + 1;

const getNumber = () => document.querySelector(".guess").value;

document.addEventListener('DOMContentLoaded', function() {
    randomNumber = getRandomInt();
    console.log(randomNumber);
});

function changeContent(selector, newContent){
    document.querySelector(selector).textContent = newContent;
    document.querySelector(selector).value = newContent;
}

function again(){
    randomNumber = getRandomInt();
    console.log("random number is ", randomNumber )
    document.querySelector(".number").textContent = "?"
    count = 20
    changeContent(".score", `${count}`);
    changeContent(".guess", " ");
    changeContent(".message", "Start guessing...")
    document.querySelector("body").style.backgroundColor = "black";
}

function guessNumber(){
    userInput = getNumber();
    if(count == 0 ){
        changeContent(".message", "You Lose!");
        return;
    }
    if(userInput > 20 || userInput <= 0 || userInput == " "){
        changeContent(".message", "between1-20!")
        return
    }
    count --;
    if(userInput == randomNumber){
        count++;
        highScore = highScore + count;
        changeContent(".number", `${randomNumber}`);
        changeContent(".highscore",`${highScore}`);
        changeContent(".message", "Correct! Try again to get higher score.")         
        document.querySelector("body").style.backgroundColor = "green";
    }else if(userInput > randomNumber){
        changeContent(".message", "too big")
    }else{
        changeContent(".message", "too small")
    }
    changeContent(".score", `${count}`)    
}


