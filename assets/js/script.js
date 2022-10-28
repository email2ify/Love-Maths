//eventListener wait for the dom to finish loading before runnoing the page
// Get the button elements and add event listeners to them

/*The first, is code that will be executed when the page has  finished loading. And the second kind, which is  
going to be part of the event handler code of the  first one, will be listening for button clicks.
*/


document.addEventListener("DOMContentLoaded", function(){
        let buttons = document.getElementsByTagName("button");
// for (let i = 0; i < buttons.length; i++){ }
      
      for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
            alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                
            }
        })
      }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */


function runGame(){
    
// Create two random numbers between 1 and 25

let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer(){

}

function calculateCorrectAnwer(){

}

function incrementScore(){

}

function calculateWrongAnwer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function diplayMultiplyQuestion(){

}