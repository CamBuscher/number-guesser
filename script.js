// My number generator
var number = Math.floor(Math.random() * 100 + 1);
console.log(number);

// this sets the reset and clear button as disabled by default
document.querySelector('#reset-button').disabled=true;
document.querySelector('#clear-button').disabled=true;

//the submit button -- the bulk of my program
document.querySelector('#submit-button').addEventListener('click', function() {
  var input = parseInt(document.querySelector('#userGuess').value);
  document.querySelector('h2').innerText = input;
  if (input === number) {
    document.querySelector('#indicator').innerText = "BOOM!";
    document.querySelector('#reset-button').innerText = 'Pssssst. Hit me to play again.';
    document.querySelector('#reset-button').disabled=false;
  }
  else if (input < 0 || input > 100) {
    alert("Please enter a number between 1 and 100 :)");
  }
  else if (input > number) {
    document.querySelector('#indicator').innerText = "That guess is too high, try again.";
  }
  else if (input < number) {
    document.querySelector('#indicator').innerText = "That guess is too low, try again.";
  }
  else if (input = "NaN") {
    alert("Please enter an integer :)");
    document.querySelector('h2').innerText = "N/A"
  }
})

// clear button
document.querySelector('#clear-button').addEventListener('click', function() {
  document.querySelector('#userGuess').value ='';
  document.querySelector('#clear-button').disabled=true;
})

document.querySelector('#userGuess').addEventListener('keydown', function() {
  document.querySelector('#clear-button').disabled=false;
})

// reset button
document.querySelector('#reset-button').addEventListener('click', function() {
  document.querySelector('#indicator').innerText = 'Guess again!';
  document.querySelector('h2').innerText = 'N/A';
  number = Math.floor(Math.random() * 100 + 1);
  console.log(number);
  document.querySelector('#userGuess').value ='';
  document.querySelector('#reset-button').disabled=true;
  document.querySelector('#clear-button').disabled=true;
})