var time = 60;
var startButton = document.getElementById(startbutton);
console.log('startButton:', startButton)

var timeEl = document.getElementsByClassName('.timer')

startButton.addEventListener("click", function() {
    time--;
    counter.textContent = count;
  
  });


  //if rightAnswer is clicked, score ++ and nextquestion, else nextquestion