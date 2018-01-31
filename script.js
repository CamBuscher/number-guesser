// all my variables
var resetButton = document.querySelector('#reset-button');
var clearButton = document.querySelector('#clear-button');
var submitButton = document.querySelector('#submit-button');
var inputField = document.querySelector('#userGuess');
var indicatorText = document.querySelector('#indicator');
var lastGuess = document.querySelector('h2');
var rangeMinimum = document.querySelector('#user-minimum');
var rangeMaximum = document.querySelector('#user-maximum');
var minInput = document.querySelector('#min-input');
var maxInput = document.querySelector('#max-input');
var minimum = 1;
var maximum = 100;

resetButton.disabled=true;
clearButton.disabled=true;
submitButton.disabled=true;

function randomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min + 1)) + min;
}

function invalidRange() {
  if (minimum >= maximum) {
      submitButton.disabled=true;
  } else if (minimum < maximum) {
      submitButton.disabled=false;
  }}

randomNumber(minimum, maximum);
console.log("correct answer is " + number);

minInput.addEventListener('keyup', function() {
  minimum = parseInt(minInput.value);
  rangeMinimum.innerText = "Min = " + minimum;
  randomNumber(minimum, maximum);
  invalidRange();
}) 

maxInput.addEventListener('keyup', function() {
  maximum = parseInt(maxInput.value);
  rangeMaximum.innerText = "Max = " + maximum;
  randomNumber(minimum, maximum);
  invalidRange();
})

//the submit button -- the bulk of my program
submitButton.addEventListener('click', function() {
  var input = parseInt(inputField.value);
  lastGuess.innerText = input;
  if (input === number) {
    indicatorText.innerText = "BOOM!";
    resetButton.innerText = 'Pssssst. Hit me to play again.';
    resetButton.disabled=false;
    minimum = minimum - 10;
    maximum = maximum + 10;
    submitButton.disabled=true;
  } else if (input < minimum || input > maximum) {
    alert("Please enter a number between " + minimum + " and " + maximum + " :)");
    indicatorText.innerText = "Guess within the range."
  } else if (input > number) {
    indicatorText.innerText = "That guess is too high, try again.";
  } else if (input < number) {
    indicatorText.innerText = "That guess is too low, try again.";
  } else if (input = "NaN") {
    alert("Please enter an integer :)");
    lastGuess.innerText = "N/A"
  }
})

// clear button
clearButton.addEventListener('click', function() {
  inputField.value ='';
  clearButton.disabled=true;
})

inputField.addEventListener('keydown', function() {
  clearButton.disabled=false;
  submitButton.disabled=false;
})

// reset button
resetButton.addEventListener('click', function() {
  indicatorText.innerText = 'Guess again!';
  randomNumber(minimum, maximum); 
  console.log("min = " + minimum);
  console.log("max = " + maximum);
  console.log("correct answer is " + number);
  rangeMinimum.innerText = "Min = " + minimum;
  rangeMaximum.innerText = "Max = " + maximum;
  inputField.value ='';
  resetButton.innerText = 'Reset';
  resetButton.disabled=true;
  clearButton.disabled=true;
  submitButton.disabled=true;
  minInput.value = '';
  maxInput.value = '';
  inputField.focus();
})