//variables
var timeLeft = 60;
var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector('#timer');
var score = '';
var clearEl = document.querySelector("#clear");
var fillQuestion = document.querySelector("#question");
// var fillAnswers = document.querySelector("#answer");
var questionContainer = document.querySelector('#question-container')
let currentIndex = 0;
var ansChoice1 = document.querySelector('#answer-1');
var ansChoice2 = document.querySelector('#answer-2');
var ansChoice3 = document.querySelector('#answer-3');
var ansChoice4 = document.querySelector('#answer-4');
//array to hold the quiz questions and answers
var quizQuestions = [
  {
    question: 'this is question one',
    choice1: '1something one',
    choice2: '1something two',
    choice3: '1something three',
    choice4: '1something four',
    correctChoice: '1something two'
  },
  {
    question: 'this is question two',
    choice1: '2something one',
    choice2: '2something two',
    choice3: '2something three',
    choice4: '2something four',
    correctChoice: '2something three'
  },
  {
    question: 'this is question three',
    choice1: '3something one',
    choice2: '3something two',
    choice3: '3something three',
    choice4: '3something four',
    correctChoice: '3something one'
  },
  {
    question: 'this is question four',
    choice1: '4something one',
    choice2: '4something two',
    choice3: '4something three',
    choice4: '4something four',
    correctChoice: '4something two'
  },
];
let lastIndex = quizQuestions.length-1;
var correctAns = quizQuestions[currentIndex].correctChoice;
//functions
function displayQuestion() {
  fillQuestion.textContent = quizQuestions[currentIndex].question;
  ansChoice1.innerHTML = quizQuestions[currentIndex].choice1;
  ansChoice2.innerHTML = quizQuestions[currentIndex].choice2;
  ansChoice3.innerHTML = quizQuestions[currentIndex].choice3;
  ansChoice4.innerHTML = quizQuestions[currentIndex].choice4;
  console.log('correctAns:', correctAns)
  console.log('ansChoice2:', ansChoice2)
  ansChoice1.addEventListener('click', function(){
    if (ansChoice1.innerHTML === correctAns) {
      alert('success')
    } else {
      alert('wrong answer')
    }
  })
  ansChoice2.addEventListener('click', function(){
    if (ansChoice2.innerHTML === correctAns) {
      alert('success')
    }
  })
  ansChoice3.addEventListener('click', function(){
    if (ansChoice3.innerHTML === correctAns) {
      alert('success')
    } else {
      alert('wrong answer')
    }
  })
  ansChoice4.addEventListener('click', function(){
    if (ansChoice4.innerHTML === correctAns) {
      alert('success')
    } else {
      alert('wrong answer')
    }
  })
}
displayQuestion();


function nextQuestion() {
  currentIndex++
}

// function createAnswers(){
//   var correctAns = quizQuestions[0].correctAnswer;
//   for (let i = 0; i < quizQuestions[i].answers.length; i++) {
//     var currentAns = quizQuestions[i].answers[i];
//     var newButton = document.createElement('button');
//     newButton.setAttribute('value', currentAns)
//     newButton.textContent = currentAns;
//     fillAnswers.appendChild(newButton);
//     newButton.addEventListener('click', function(event){
//       if (event.target.value === correctAns) {
//         alert('correct!')
//         questionContainer.children[0].style.visibility = 'hidden';
//         questionContainer.children[1].style.visibility = 'hidden';
//         question2()
//       } else {
//         alert('wrong')
//       }
//     })
//   }
// }
// function question2() {
//   questionContainer.children[0].style.visibility = 'visible';
//   questionContainer.children[1].style.visibility = 'visible';
//   fillQuestion.textContent = quizQuestions[1].question;
//   console.log('fillQuestion:', fillQuestion)
//   createAnswers()
//   function createAnswers(){
//     var correctAns = quizQuestions[1].correctAnswer;
//     console.log('correctAns:', correctAns);
//     for (let i = 1; i < quizQuestions[i].answers.length; i++) {
//       var currentAns = quizQuestions[i].answers[i];
//       var newButton = document.createElement('button');
//       newButton.setAttribute('value', currentAns)
//       newButton.textContent = currentAns;
//       fillAnswers.appendChild(newButton);
//       newButton.addEventListener('click', function(event){
//         console.log("event: ", event.target.value)
//         console.log('correctAnswer:', correctAns)
//         if (event.target.value === correctAns) {
//           alert('correct!')
//           questionContainer.children[0].style.visibility = 'hidden'
//           questionContainer.children[1].style.visibility = 'hidden'
//         } else {
//           alert('wrong')
//         }
//       })
//     }
//   }
// }

// function createQuestion() {
//   fillQuestion.textContent = quizQuestions[0].question;
//   createAnswers()
// }
// // quizQuestions.forEach(createQuestion);

// createQuestion();  //this will go in the start button thing once it works

// //when start button is clicked, begin timer and hide the code quiz jumbotron
// startButton.addEventListener('click', function(setTime) {
//   var timerInterval = setInterval(function() {
//     timeLeft--;
//     timeEl.textContent = timeLeft;
//     if(timeLeft === 0) {
//       clearInterval(timerInterval);
//     }
//   }, 1000);

  
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