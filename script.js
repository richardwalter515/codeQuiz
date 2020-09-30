//variables
var timeLeft = 60;
var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector('#timer');
var score = '';
var clearEl = document.querySelector("#clear");
var fillQuestion = document.querySelector("#question");
var fillAnswers = document.querySelector("#answer");
//array to hold the quiz questions
var quizQuestions = [
  {
    question: 'this is question one',
    answers: [
      '1something one',
      'something two',
      'something three',
      'something four'
    ],
    correctAnswer: 'something two'
  },
  {
    question: 'this is question two',
    answers: [
      '2something one',
      'something two',
      'something three',
      'something four'
    ],
  correctAnswer: 'whatever the correct text is'
  },
  {
    question: 'this is question three',
    answers: [
      '3something one',
      'something two',
      'something three',
      'something four'
    ],
  correctAnswer: 'whatever the correct text is'
  },
  {
    question: 'this is question four',
    answers: [
      '4something one',
      'something two',
      'something three',
      'something four'
    ],
  correctAnswer: 'whatever the correct text is'
  },
  {
    qustion: 'this is question five',
    answers: [
      '5something one',
      'something two',
      'something three',
      'something four'
    ],
  correctAnswer: 'whatever the correct text is'
  },
];

//functions
function nextQuestion() {
  
}

function createAnswers(){
  var correctAns = quizQuestions[0].correctAnswer;
  console.log('correctAns:', correctAns);
  for (let i = 0; i < quizQuestions[i].answers.length; i++) {
    var currentAns = quizQuestions[i].answers[i];
    console.log('currentAns:', currentAns);
    var newButton = document.createElement('button');
    //
    newButton.setAttribute('value', currentAns)
    newButton.textContent = currentAns;
    fillAnswers.appendChild(newButton);
    newButton.addEventListener('click', function(event){
      console.log("event: ", event.target.value)
      console.log('correctAnswer:', correctAns)
      if (event.target.value === correctAns) {
        alert('correct')
      } else {
        alert('wrong')
      }
    })
  }
}

function createQuestion() {
  fillQuestion.textContent = quizQuestions[0].question;
  createAnswers()
}

//for loop to go through question objects
// for (let i = 0; i < quizQuestions.length; i++) {

//   }
createQuestion()  //this will go in the start button thing once it works

// //when start button is clicked, begin timer and hide the code quiz jumbotron
// startButton.addEventListener('click', function(setTime) {
//   var timerInterval = setInterval(function() {
//     timeLeft--;
//     timeEl.textContent = timeLeft;
//     if(timeLeft === 0) {
//       clearInterval(timerInterval);
//     }
//   }, 1000);


    // function createQuestion() {

    //   quizQuestions.answers.forEach(answers => {
    //     answerBtn = document.createElement('button')
    //     answerBtn.innerText = 'testing'
    //   })

    // }
  
    //if correct answer is clicked, then move to next question
    //else timeLeft -10; then move to next question
    //if (timeLeft === 0 || there are no questions left to display)
    //your score is timeLeft, enter initials
    //save score to leaderboard/local storage
    //end game
    
//   if (timeLeft === 0) // or no more questions?
//   score = timeLeft
// })


//click clear button to clear the quiz and prevent default
// clearEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   textAreaEl.value = "";
//   elements.forEach(function(element) {
//     element.textContent = "";
//   });
// });

//how to cycle through questions?