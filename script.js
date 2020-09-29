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
      'something one',
      'something two',
      'something three',
      'something four'
    ],
    correctAnswer: 'whatever the correct text is'
  },
  {
    question: 'this is question two',
    answers: [
      'something one',
      'something two',
      'something three',
      'something four'
    ],
  correctAnswer: 'whatever the correct text is'
  },
  {
    question: 'this is question three',
    answers: [
      'something one',
      'something two',
      'something three',
      'something four'
    ],
  correctAnswer: 'whatever the correct text is'
  },
  {
    question: 'this is question four',
    answers: [
      'something one',
      'something two',
      'something three',
      'something four'
    ],
  correctAnswer: 'whatever the correct text is'
  },
  {
    qustion: 'this is question five',
    answers: [
      'something one',
      'something two',
      'something three',
      'something four'
    ],
  correctAnswer: 'whatever the correct text is'
  },
];

//functions
function createQuestion() {
  for (let i = 0; i < quizQuestions[i].answers.length; i++) {
    var currentQuestion = quizQuestions[i].question;
    var currentAns = quizQuestions[i].answers
    console.log('currentAns:', currentAns)
    
  }
  fillQuestion.textContent = quizQuestions[0].question
  fillAnswers.textContent = currentAns



}
createQuestion()

// //when start button is clicked, begin timer and hide the code quiz jumbotron
// startButton.addEventListener('click', function(setTime) {
//   var timerInterval = setInterval(function() {
//     timeLeft--;
//     timeEl.textContent = timeLeft;
//     if(timeLeft === 0) {
//       clearInterval(timerInterval);
//     }
//   }, 1000);

  //for loop to go through question objects
  // for (let i = 0; i < quizQuestions.length; i++) {


  //   }

    // function createQuestion() {
    //   fillQuestion.textContent = quizQuestions[0].question;
    //   quizQuestions.answers.forEach(answers => {
    //     answerBtn = document.createElement('button')
    //     answerBtn.innerText = 'testing'
    //   })

    // }
  

    //display question as text 
    //create buttons
    //fill inner HTML with text from Answers arrays
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
//how to make buttons out of answers?
//why does forEach not work at all in this?