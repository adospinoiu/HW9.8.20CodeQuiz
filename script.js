const question = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".time");

//Timer in the upper right hand corner
let secondsLeft = 60;

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //sendMessage();
    }

  }, 1000);
}

setTime();

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

nextQuestion();

function nextQuestion() {
  currentQuestion = questionAnswer[index]
  question.textContent = currentQuestion.question;
  button1.textContent = currentQuestion.answers[0];
  button2.textContent = currentQuestion.answers[1];
  button3.textContent = currentQuestion.answers[2];
  button4.textContent = currentQuestion.answers[3];
}

button1.addEventListener("click", function (event) {
  event.preventDefault();
  if (button1.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
  }
  index++;
  nextQuestion();
});

button2.addEventListener("click", function (event) {
  event.preventDefault();
  if (button2.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
  }
  index++;
  nextQuestion();
});

button3.addEventListener("click", function (event) {
  event.preventDefault();
  if (button3.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
  }
  index++;
  nextQuestion();
});

button4.addEventListener("click", function (event) {
  event.preventDefault();
  if (button4.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
  }
  index++;
  nextQuestion();
});