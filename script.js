// document.querySelector(".number")
let count = 20;
let randomNumber;
function getRandomInt() {
    return Math.floor(Math.random() * 20) + 1;
}

document.addEventListener('DOMContentLoaded', function() {
    randomNumber = getRandomInt();
    console.log(randomNumber);
});

function again(){
    randomNumber = getRandomInt();
    console.log("random number is ", randomNumber )
    document.querySelector(".number").textContent = "?"
    count = 20
    document.querySelector(".score").textContent = `${count}`;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".guess").value = " ";
    document.querySelector(".message").textContent = "Start guessing..."
}

let highScore = 0;
function guessNumber(){

    if(count !=0){

        function getNumber(){
            return document.querySelector(".guess").value;
        }
        userInput = getNumber();
        console.log("The input is: ",userInput);
        
        if(userInput <= 20 && userInput >0){
            count--;
            if(userInput==randomNumber){
                count++;
                highScore = highScore + count;
                document.querySelector(".number").textContent = `${randomNumber}`
                document.querySelector(".message").textContent = "Correct! Try again to get higher score."
                document.querySelector(".highscore").textContent = `${highScore}`
                document.querySelector("body").style.backgroundColor = "green";
            }
            else if(userInput > randomNumber){
                    document.querySelector(".message").textContent = "too big"
                }
            else {
                document.querySelector(".message").textContent = "too small"
            }    
            document.querySelector(".score").textContent = `${count}`;
        }else{
     document.querySelector(".message").textContent = "Number between 1-20!."
        }
    }else{
        document.querySelector(".message").textContent = "You lose!"
    }      
}


