var firstNumber = Math.floor(Math.random() * 15) +1;
var secondNumber = Math.floor(Math.random() * 10) +1;
var finalAnswer = firstNumber + secondNumber;

var btn = document.querySelector('button');
btn.onclick = function() {
  displayMessage('Good Luck!');

}   
function displayMessage(msgText, msgType) {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);
    
    var msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);
    
    var newContent = document.createElement('h1'); 
    newContent.textContent = firstNumber +" " + "+" + " " + secondNumber;
    panel.appendChild(newContent);  

    var guessBox = document.createElement('input');
    guessBox.setAttribute("value", "Answer here");
    panel.appendChild(guessBox);
  
    var submitBtn = document.createElement('submit');
    submitBtn.setAttribute("name", "SUBMIT");
    submitBtn.textContent = 'SUBMIT';
    panel.appendChild(submitBtn);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);
    
    closeBtn.onclick = function() {
      panel.parentNode.removeChild(panel);
    }
    
}


/*
function ironMan() {
  var jaydenAnswer = document.getElementById('answer').value;
   if (jaydenAnswer == finalAnswer) {
   alert("Nice math skills Captain!");
 } else {
   btn.onclick = function() {
     modal.style.display = "block";
 }
}







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    */
