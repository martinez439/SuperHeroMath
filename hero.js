var counter = 0;
var score = 0;
var firstNumber = Math.floor(Math.random() *10) +1;
var secondNumber = Math.floor (Math.random() *10) +1;
var correctAnswer;
var wrongAnswer;
var questionText;

document.getElementById('mathproblem').innerHTML = firstNumber + " " + "+" + " " + secondNumber;
var finalAnswer = firstNumber + secondNumber;
 


    function ironMan() {
      var jaydenAnswer = document.getElementById('answer').value;
        if (jaydenAnswer == finalAnswer) {
        document.write("Nice math skills Captain!");
                
      } else {
        document.write("WRONG! Thanos snapped his fingers!")
      }
    }







