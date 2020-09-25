var timeLeft = 60;
var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector('#timer');
var questions = [

];

//when start button is clicked, begin timer
startButton.addEventListener('click', function(setTime) {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    console.log('timeEl:', timeEl)
  
    if(timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
})

function askQuestion() {

}

//while time is > 0, ask questions
while (timeLeft > 0) {
  askQuestion();
}
//if rightAnswer is clicked, score ++ and nextquestion, else time -10 and nextquestion
//store score in highscores local storage

//questions - should the questions be in an Array?
//How many questions should there be?
//how to cycle through questions?