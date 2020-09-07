//Refers to the main body of the HTML
const body = document.body;

//Refers to where the timer is displayed in the HTML
const timeEl = document.querySelector(".time");

//Refers to where the questions are displayed and the section the START button is in the HTML
const question = document.querySelector("#question");
const startButtonSection = document.querySelector("#startButtonSection");
const startButton = document.querySelector("#startButton");

//Refers to the the section where the buttons are which will have the answers in the HTML
const buttons = document.querySelector("#buttons");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

//Refers to the section where the intials are entered and submited in the HTML
const initialsScore = document.querySelector("#initialsScore");
const inlineFormInput = document.querySelector("#inlineFormInput");
const submitScore = document.querySelector("#submitScore");

//Start page of the quiz
function startQuiz() {
  question.textContent = "Test your coding knowledge with this quiz.";

  //Listen for the START button to be clicked. Start the timer; display the questions/answers; hide the START button
  startButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
    if (event) {
      startButtonSection.setAttribute("style", "display:none");
      buttons.setAttribute("style", "display:block");
      setTime();
      nextQuestion();
    }
  });
}

startQuiz();

// Timer in the upper right hand corner
let secondsLeft = 90;
let timerInterval = 0;

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

// All the questions and answers in a large array of objects
let questionAnswer = [
  {
    question: "What does HTML stand for?",
    answers: ["Hard To Master Language",
      "Hat To Mister Lancaster",
      "Have To Many Laughs",
      "Hypertext Markup Language"
    ],
    correctAnswer: "Hypertext Markup Language"
  },

  {
    question: "What does CSS stand for?",
    answers: ["Clear Sign Security",
      "Cascading Style Sheets",
      "Clean Stop Signs",
      "Come Save Sam"
    ],
    correctAnswer: "Cascading Style Sheets"
  },

  {
    question: "Which of the following is FALSE?",
    answers: ["1 === 1",
      "TRUE === TRUE",
      "5 < 6",
      "5 != 5"
    ],
    correctAnswer: "5 != 5"
  },

  {
    question: "What is Bootstrap?",
    answers: ["Famous Bootstrap Bill",
      "You use it to tie your boots",
      "CSS on steroids that can be used",
      "There's a snake in my boot"
    ],
    correctAnswer: "CSS on steroids that can be used"
  },

  {
    question: "An array is surrounded by?",
    answers: ["Single quotation marks",
      "Double quotation marks",
      "Curly brackets",
      "Square brackets"
    ],
    correctAnswer: "Square brackets"
  },

  {
    question: "What is the first line when pushing to GitHub?",
    answers: ["git commit -m",
      "git push",
      "git add .",
      "What the heck is GitHub"
    ],
    correctAnswer: "git add ."
  },

  {
    question: "When is an elseif statement executed?",
    answers: ["When the else is not there",
      "When the if is not there",
      "If it feels like it",
      "When the if is false"
    ],
    correctAnswer: "When the if is false"
  },
]

let index = 0;
let currentQuestion = questionAnswer[0]

// Calls the questions and all the answers associated with the questions. After the last question, hides the buttons and displays where to record the intials.
function nextQuestion() {
  if (index != questionAnswer.length) {
    currentQuestion = questionAnswer[index]
    question.textContent = currentQuestion.question;
    button1.textContent = currentQuestion.answers[0];
    button2.textContent = currentQuestion.answers[1];
    button3.textContent = currentQuestion.answers[2];
    button4.textContent = currentQuestion.answers[3];
  } else {
    question.textContent = "Your Score Is: " + secondsLeft;
    buttons.setAttribute("style", "display:none");
    initialsScore.setAttribute("style", "display:block");
    clearInterval(timerInterval);
  }
}

//Evaluates the user button clicked and determines if it is the correct answer. 
button1.addEventListener("click", function (event) {
  event.preventDefault();
  if (button1.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
    secondsLeft = secondsLeft - 10;
  }
  index++;
  nextQuestion();
});

//Evaluates the user button clicked and determines if it is the correct answer. 
button2.addEventListener("click", function (event) {
  event.preventDefault();
  if (button2.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
    secondsLeft = secondsLeft - 10;
  }
  index++;
  nextQuestion();
});

//Evaluates the user button clicked and determines if it is the correct answer. 
button3.addEventListener("click", function (event) {
  event.preventDefault();
  if (button3.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
    secondsLeft = secondsLeft - 10;
  }
  index++;
  nextQuestion();
});

//Evaluates the user button clicked and determines if it is the correct answer. 
button4.addEventListener("click", function (event) {
  event.preventDefault();
  if (button4.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
    secondsLeft = secondsLeft - 10;
  }
  index++;
  nextQuestion();
});

//Listen for Submit button being pushed to record the score and initials at the end of the quiz
submitScore.addEventListener("click", function (event) {
  event.preventDefault();

  let initials = inlineFormInput.value.trim();
  let score = secondsLeft;
  
  let scoreHistory = JSON.parse(window.localStorage.getItem("highScores")) || [];

  let newScore = initials + "---" + score;
  scoreHistory.push(newScore);

  localStorage.setItem("highScores", JSON.stringify(scoreHistory));
  loadScores(scoreHistory);
})

//Loads the previously stored scores and keeps adding to the list
function loadScores(scores) {
  for (let i = 0; i < scores.length; i++) {
    const h4El = document.createElement("h4");
    h4El.textContent = scores[i];
    initialsScore.appendChild(h4El);
  }
}