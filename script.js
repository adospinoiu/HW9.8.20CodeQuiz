const question = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".time");

//Timer in the upper right hand corner
let secondsLeft = 60;

function setTime() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //sendMessage();
    }

  }, 1000);
}

setTime();

let questionAnswer = [
  {
    Question: "What does HTML stand for?",
    Answers: ["Hard To Master Language",
      "Hat To Mister Lancaster",
      "Have To Many Laughs",
      "Hypertext Markup Language"
    ],
    CorrectAnswer: "Hypertext Markup Language"
  },

  {
    Question: "What does CSS stand for?",
    Answers: ["Clear Sign Security",
      "Cascading Style Sheets",
      "Clean Stop Signs",
      "Come Save Sam"
    ],
    CorrectAnswer: "Cascading Style Sheets"
  },

  {
    Question: "Which of the following is FALSE?",
    Answers: ["1 === 1",
      "TRUE === TRUE",
      "5 < 6",
      "5 != 5"
    ],
    CorrectAnswer: "5 != 5"
  },

  {
    Question: "What is Bootstrap?",
    Answers: ["Famous Bootstrap Bill",
      "You use it to tie your boots",
      "CSS on steroids that can be used",
      "There's a snake in my boot"
    ],
    CorrectAnswer: "CSS on steroids that can be used"
  },

  {
    Question: "An array is surrounded by?",
    Answers: ["Single quotation marks",
      "Double quotation marks",
      "Curly brackets",
      "Square brackets"
    ],
    CorrectAnswer: "Square brackets"
  },

  {
    Question: "What is the first line when pushing to GitHub?",
    Answers: ["git commit -m",
      "git push",
      "git add .",
      "What the heck is GitHub"
    ],
    CorrectAnswer: "git add ."
  },

  {
    Question: "When is an elseif statement executed?",
    Answers: ["When the else is not there",
      "When the if is not there",
      "If it feels like it",
      "When the if is false"
    ],
    CorrectAnswer: "When the if is false"
  },
]



