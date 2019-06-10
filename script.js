var firstNumber = Math.floor(Math.random() * 15) +1;
var secondNumber = Math.floor(Math.random() * 10) +1;
var finalAnswer = firstNumber + secondNumber;
var score = 0;
var guessBox = document.getElementById('inputForm');
var submitBtn = document.getElementById('submitBtn');


function randomEquation(){
    document.getElementById('equation').innerHTML = firstNumber +" " + "+" + " " + secondNumber;
}
randomEquation();


function check() {
    if (document.getElementById("inputForm").value == firstNumber + secondNumber) {
      document.getElementById("inputForm").value = "Correct!"
      score = score+1;
      document.getElementById("score").innerHTML = "" + score;
      setTimeout(function() {
        document.getElementById("inputForm").value = "";
        randomize();
      }, 1000);
      
    } else {
      document.getElementById("inputForm").value = "Incorrect!"
      setTimeout(function() {
        document.getElementById("inputForm").value = "";
        randomize();
      }, 1000);
      
    }
  }
  setInterval(function() {
    document.getElementById("equation").innerHTML = "What is " + firstNumber + "+" + secondNumber;
  }, 1000);
  function randomize() {
    firstNumber = Math.floor(Math.random() * 15) +1;
    secondNumber = Math.floor(Math.random() * 10) +1;
  }
