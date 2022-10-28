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
            //alert("You clicked Submit!");
            checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                //alert(`You clicked ${gameType}`);
                runGame(gameType);
                
            }
        });
      }
        runGame("addition");     

})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */


function runGame(gameType){

// Create two random numbers between 1 and 25

let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if(gameType === "addition") {
    displayAdditionQuestion(num1, num2);
} else {
     alert(`unknown game type: ${gameType}`);
     throw `unknown game type: ${gameType}.Aborting!`;
}

}

/**
 * checks the answer against the first element in
 * the returned calculateCorrectAnswer
 */
 function checkAnswer() {

  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
      alert("Hey! You got it right! :D");
  } else {
      alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
  }

  runGame(calculatedAnswer[1]);

}


/**
 * Gets the opaerands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */

function calculateCorrectAnwer(){
          let operand1 = parseInt(document.getElementById('operand1').innerText);
          let operand2 = parseInt(document.getElementById('operand2').innerText);
          let operator = ducument.getElementById("operator").innerText;

          if (operator ==="+") {
            return[operand1 + operand2, "addition"]; 
          }else {
            alert(`unimplemented operator ${operator}`);
            throw `unimplemented operator ${operator}.Aborting!`;
          }
}

function incrementScore(){

}

function calculateWrongAnwer(){

}

function displayAdditionQuestion(operand1, operand2){
         document.getElementById('operand1').textContent = operand1;
         document.getElementById('operand2').textContent = operand2;
         document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(){

}

function diplayMultiplyQuestion(){

}