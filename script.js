//variables
var timeLeft = 60;
var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector('#timer');
var score = '';
var clearEl = document.querySelector("#clear");
var fillQuestion = document.querySelector("#question");
var questionContainer = document.querySelector('#question-container')
let currentIndex = 0;
var ansChoice1 = document.querySelector('#answer-1');
var ansChoice2 = document.querySelector('#answer-2');
var ansChoice3 = document.querySelector('#answer-3');
var ansChoice4 = document.querySelector('#answer-4');
//array to hold the quiz questions and answers
var quizQuestions = [
  {
    question: 'What Does HTML stand for?',
    choice1: 'A: Hyper Text Miniature Language',
    choice2: 'B: Hyper Text Markup Language',
    choice3: 'C: Hyper Type Markup Language',
    choice4: 'D: Hyper Type Miniature Language',
    correctChoice: 'B: Hyper Text Markup Language'
  },
  {
    question: 'In Javascript, what pair of characters immediately follow a function?',
    choice1: 'A: {}',
    choice2: 'B: []',
    choice3: 'C: ()',
    choice4: 'D:<>',
    correctChoice: 'C: ()'
  },
  {
    question: 'If you want to use Javascript to find an HTML element with a specific class name, which would you use?',
    choice1: 'document.getElementsByClassName()',
    choice2: 'document.querySelector()',
    choice3: 'Both',
    choice4: 'Neither',
    correctChoice: 'Both'
  },
  {
    question: 'In an array, the fourth item would have an index of:',
    choice1: '4',
    choice2: '3',
    choice3: '5',
    choice4: '-4',
    correctChoice: '3'
  },
];
let lastIndex = quizQuestions.length-1;

//functions
function displayQuestion() {
  let correctAns = quizQuestions[currentIndex].correctChoice;
  fillQuestion.textContent = quizQuestions[currentIndex].question;

  ansChoice1.innerHTML = quizQuestions[currentIndex].choice1;
  ansChoice2.innerHTML = quizQuestions[currentIndex].choice2;
  ansChoice3.innerHTML = quizQuestions[currentIndex].choice3;
  ansChoice4.innerHTML = quizQuestions[currentIndex].choice4;
}

//answer choice click events
ansChoice1.addEventListener('click', function(){
  if (ansChoice1.innerHTML === quizQuestions[currentIndex].correctChoice) {
    alert('Correct!');
    nextQuestion()
  } else {
    alert('wrong answer. -10 Seconds');
    timeLeft=timeLeft-10;
    nextQuestion()
  }
})
ansChoice2.addEventListener('click', function(){
  if (ansChoice2.innerHTML === quizQuestions[currentIndex].correctChoice) {
    alert('Correct!');
    nextQuestion()
  } else {
    alert('Wrong Answer. -10 Seconds');
    timeLeft=timeLeft-10;
    nextQuestion()
  }
})
ansChoice3.addEventListener('click', function(){
  if (ansChoice3.innerHTML === quizQuestions[currentIndex].correctChoice) {
    alert('Correct!');
    nextQuestion()
  } else {
    alert('Wrong Answer. -10 Seconds');
    timeLeft=timeLeft-10;
    nextQuestion()
  }
})
ansChoice4.addEventListener('click', function(){
  if (ansChoice4.innerHTML === quizQuestions[currentIndex].correctChoice) {
    alert('Correct!');
    nextQuestion()
  } else {
    alert('Wrong Answer. -10 Seconds');
    timeLeft=timeLeft-10;
    nextQuestion()
  }
})

function nextQuestion() {
  if (currentIndex != lastIndex){
    currentIndex++
  }else {
    alert('game over!')
  };
  displayQuestion()
}
displayQuestion();

//when start button is clicked, begin timer 
startButton.addEventListener('click', function(setTime) {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if(timeLeft === 0) {
      clearInterval(timerInterval);
      alert('game over!')
    }
  }, 1000)
});

    //your score is timeLeft, enter initials
    //save score to leaderboard/local storage
    //end game


//click clear button to clear the quiz and prevent default
clearEl.addEventListener("click", function(event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function(element) {
    element.textContent = "";
  });
});