var userInitialSpan = document.querySelector('#user-initials');
var userScoreSpan = document.querySelector('#user-score');

function renderToLeaderboard() {
    var enteredInitial = localStorage.getItem("user initials");
    var enteredScore = localStorage.getItem("user score");
  
    var newInitial = document.createElement('li');
    newInitial.textContent = enteredInitial;
    userInitialSpan.appendChild(newInitial);
  
    var newScore = document.createElement('li');
    newScore.textContent = enteredScore;
    userScoreSpan.appendChild(newScore);
};
  
renderToLeaderboard();