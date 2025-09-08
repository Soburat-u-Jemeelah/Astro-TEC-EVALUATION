const preload = document.querySelector(".preload");
const startBtn = document.querySelector("#btn_start");
const quizRulesCard = document.querySelector("#quiz_rules");
const continueBtn = document.querySelector("#continueBtn");
const countdownContainer = document.querySelector(".count-down-container ");
const exitBtn = document.querySelector("#exitBtn");
let quizCard = document.querySelector("#quiz_card");
let countdownText = document.getElementById("countdownText");
let countdownNum = document.getElementById("countdownNum");
let countdownTime = document.querySelector(".tym");
let questions = document.querySelector("#question");
let optionAnswerBtn = document.querySelector("#answer-option");
let complete = document.querySelector("#complete");
let correctScore = document.querySelector(".correct-score");
let totalQuestion = document.querySelector(".total-question");
let totalQuestion2 = document.querySelector(".total-question2");
let nextQuestion = document.querySelector(".next-question");
let replayBtn = document.querySelector(".replay-btn");
let quitBtn = document.querySelector(".quit-btn");
let questionNextNum = document.querySelector(".questionNextNum");
let percentageScore = document.querySelector(".percentage-score");
let percentageContainer = document.querySelector("#percentage");
const playerForm = document.getElementById("playerForm");
const playerNameInput = document.getElementById("playerName");
const nameContainer = document.querySelector("#nameContainer");
let playerName = "";

// form
let userForm = document.querySelector("#userForm");
let firstName = document.querySelector("#firstNameInput");
let lastName = document.querySelector("#lastNameInput");
let isEventDisabled;

// setting setTimeout for preloading
stopLoad();
function stopLoad() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preload.classList.add("hidden");
      nameContainer.classList.remove("hidden");
      // startBtn.classList.remove("hidden");
    }, 2000);
  });
}

// name submit
playerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  playerName = playerNameInput.value.trim();

  if (playerName === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter your name!",
    });
    return;
  }

  nameContainer.classList.add("hidden");
  startBtn.classList.remove("hidden");

  Swal.fire({
    icon: "success",
    title: `Welcome ${playerName}!`,
    text: "Click Start Quiz when you're ready to begin.",
    confirmButtonText: "OK",
  });
});

function saveQuizResult(score) {
  let results = JSON.parse(localStorage.getItem("quizResults")) || [];

  const newResult = {
    name: playerName,
    score: correctPicked,
    total: quizQuestions.length,
    percentage: ((correctPicked / quizQuestions.length) * 100).toFixed(1),
    date: new Date().toLocaleDateString(),
  };

  results.push(newResult);

  results.sort((a, b) => b.percentage - a.percentage);

  localStorage.setItem("quizResults", JSON.stringify(results));

  // window.location.href = "results.html";
}

// adding Event Listener to start btn
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  preload.style.display = "flex";
  setTimeout(() => {
    preload.classList.add("hidden");
    quizRulesCard.classList.remove("hidden");
  }, 2000);
});

// Start Quiz
continueBtn.addEventListener("click", continueGo);

function continueGo() {
  countdownContainer.classList.remove("hidden");
  quizRulesCard.classList.add("hidden");

  let countdown = 3;
  countdownText.textContent = "Get ready... The game starts in ";
  countdownNum.textContent = "3";

  const interval = setInterval(() => {
    if (countdown > 1) {
      countdown--;
      countdownText.textContent = `Get ready... The game starts in `;
      countdownNum.textContent = countdown;
    } else {
      clearInterval(interval);
      countdownText.textContent = "Go!";
      countdownNum.classList.add("hidden");
      countdownContainer.classList.add("hidden");
      quizCard.classList.remove("hidden");
      startCountDown();
      //   const goInterval = setInterval(() => {

      //   }, 500);
    }
  }, 1000);
}

// Exit Button
exitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to exit?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      // window.close();
      preload.style.display = "flex";
      quizRulesCard.classList.add("hidden");
      window.setTimeout(() => {
        preload.style.display = "none";
        startBtn.classList.remove("hidden");
      }, 1000);
    }
  });
});

// Next question counting down
let isClicked = false;
function startCountDown() {
  countingDown = 30;

  countdownTime.innerHTML = countingDown;

  let countingDownInterval = setInterval(() => {
    countingDown--;
    // console.log(countingDown);

    countdownTime.innerHTML = countingDown;
    if (countingDown === 0) {
      // isClicked = false;
      clearInterval(countingDownInterval);
      load();
      // next();
      return;
    } else if (isClicked) {
      isClicked = false;
      clearInterval(countingDownInterval);
      next();
      return;
    }
  }, 2000);
}

// ======================
// ======================
// Questions
// ======================
// ======================

// JavaScript
const quizQuestions = [
  {
    id: 1,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correct: "All of the above",
  },
  {
    id: 2,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    correct: "//",
  },
  {
    id: 3,
    question: "What will `typeof null` return?",
    options: ["null", "undefined", "object", "boolean"],
    correct: "object",
  },
  {
    id: 4,
    question:
      "Which method is used to convert JSON data to a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.convert()",
    ],
    correct: "JSON.parse()",
  },
  {
    id: 5,
    question: "Which operator is used to compare both value and type?",
    options: ["==", "===", "!=", "!=="],
    correct: "===",
  },
  {
    id: 6,
    question:
      "What is the default value of uninitialized variables in JavaScript?",
    options: ["null", "undefined", "0", "false"],
    correct: "undefined",
  },
  {
    id: 7,
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()",
  },
  {
    id: 8,
    question: "Which method removes the last element of an array?",
    options: ["shift()", "pop()", "slice()", "splice()"],
    correct: "pop()",
  },
  {
    id: 9,
    question: "Which function is used to print messages to the console?",
    options: ["console.log()", "print()", "echo()", "write()"],
    correct: "console.log()",
  },
  {
    id: 10,
    question: "Which keyword is used to create a constant variable?",
    options: ["const", "let", "var", "constant"],
    correct: "const",
  },
  {
    id: 11,
    question: "Which loop is guaranteed to run at least once?",
    options: ["for", "while", "do...while", "for...of"],
    correct: "do...while",
  },
  {
    id: 12,
    question: "Which built-in method converts a string to uppercase?",
    options: ["toUpper()", "upperCase()", "toUpperCase()", "makeUpper()"],
    correct: "toUpperCase()",
  },
  {
    id: 13,
    question: "Which object is used to work with dates in JavaScript?",
    options: ["Date", "Time", "Calendar", "Moment"],
    correct: "Date",
  },
  {
    id: 14,
    question: "Which keyword is used to exit a loop prematurely?",
    options: ["return", "exit", "stop", "break"],
    correct: "break",
  },
  {
    id: 15,
    question: "Which keyword is used to skip to the next iteration in a loop?",
    options: ["break", "continue", "skip", "pass"],
    correct: "continue",
  },
  {
    id: 16,
    question: "Which function converts a number to a string?",
    options: ["String()", "toString()", "Both", "Number()"],
    correct: "Both",
  },
  {
    id: 17,
    question: "What is the result of `2 + '2'` in JavaScript?",
    options: ["22", "4", "NaN", "Error"],
    correct: "22",
  },
  {
    id: 18,
    question:
      "Which array method creates a new array with elements that pass a test?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correct: "filter()",
  },
  {
    id: 19,
    question:
      "Which array method executes a function on each element without returning a new array?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    correct: "forEach()",
  },
  {
    id: 20,
    question: "Which array method reduces an array to a single value?",
    options: ["reduce()", "map()", "filter()", "slice()"],
    correct: "reduce()",
  },
  {
    id: 21,
    question: "Which keyword defines a class in JavaScript?",
    options: ["function", "object", "class", "prototype"],
    correct: "class",
  },
  {
    id: 22,
    question:
      "Which keyword is used inside a class to refer to the current object?",
    options: ["this", "self", "object", "current"],
    correct: "this",
  },
  {
    id: 23,
    question: "Which method is used to combine two or more arrays?",
    options: ["concat()", "combine()", "merge()", "append()"],
    correct: "concat()",
  },
  {
    id: 24,
    question: "Which keyword is used to handle exceptions in JavaScript?",
    options: ["error", "try...catch", "throw...catch", "catch"],
    correct: "try...catch",
  },
  {
    id: 25,
    question: "Which keyword is used to throw a custom error?",
    options: ["throw", "error", "raise", "exception"],
    correct: "throw",
  },
  {
    id: 26,
    question: "Which type of scope is created inside a function?",
    options: ["Global", "Local", "Block", "Lexical"],
    correct: "Local",
  },
  {
    id: 27,
    question:
      "Which type of scope is created inside curly braces with 'let' or 'const'?",
    options: ["Global", "Local", "Block", "Lexical"],
    correct: "Block",
  },
  {
    id: 28,
    question: "Which keyword is used to declare asynchronous functions?",
    options: ["async", "await", "promise", "defer"],
    correct: "async",
  },
  {
    id: 29,
    question: "Which keyword is used to wait for a Promise to resolve?",
    options: ["async", "wait", "await", "resolve"],
    correct: "await",
  },
  {
    id: 30,
    question:
      "Which method is used to fetch data from an API in modern JavaScript?",
    options: ["XMLHttpRequest", "fetch()", "get()", "request()"],
    correct: "fetch()",
  },
];

let remainingQuestion = [...quizQuestions];
// console.log(remainingQuestion);

let wrongPicked = 0;
let correctPicked = 0;
let askedQuestionIndex = [];
totalQuestion2.textContent = quizQuestions.length;

function getRandomNumber() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * remainingQuestion.length);
  } while (askedQuestionIndex.includes(randomIndex));
  askedQuestionIndex.push(randomIndex);

  return randomIndex;
}

displayQuestion();
function displayQuestion() {
  if (askedQuestionIndex.length === remainingQuestion.length) {
    quizCard.classList.add("hidden");
    preload.style.display = "flex";
    setTimeout(() => {
      preload.classList.add("hidden");
      complete.classList.remove("hidden");
    }, 3000);

    // Calculate scores
    const correctPercentage = (
      (correctPicked / remainingQuestion.length) *
      100
    ).toFixed(1);
    correctScore.textContent = correctPicked;
    totalQuestion.textContent = quizQuestions.length;
    percentageScore.textContent = correctPercentage;

    if (correctPercentage >= 70) {
      percentageContainer.style.color = "#00cc00";
    } else if (correctPercentage >= 50) {
      percentageContainer.style.color = "#cca300";
    } else {
      percentageContainer.style.color = "#e62e00";
    }

    console.log("Complete!" + correctPercentage);
    console.log("Wrong Answers: " + wrongPicked);
    console.log("Correct Answers: " + correctPicked);

    // Save results
    saveQuizResult();

    return;
  }

  let randomOptionIndex = [0, 1, 2, 3];
  randomOptionIndex.sort(() => Math.random() - 0.5);
  randomOptionIndex.forEach((num) => {
    num;
  });

  const currentQuestionIndex = getRandomNumber();
  const currentQuestion = remainingQuestion[currentQuestionIndex];
  questions.textContent = currentQuestion.question;
  optionAnswerBtn.innerHTML = "";

  currentQuestion.options.forEach((option, i) => {
    const button = document.createElement("p");
    button.textContent = option;
    button.classList.add("answer-option");
    optionAnswerBtn.appendChild(button);
    button.textContent = currentQuestion.options[randomOptionIndex[i]];

    isEventDisabled = true;

    button.addEventListener("click", () => {
      if (isEventDisabled) {
        if (button.textContent === currentQuestion.correct) {
          correctAns();
          correctPicked++;
        } else {
          correctAns();
          wrongPicked++;
          button.classList.add("wrong");
        }
        isEventDisabled = false;
      }
    });
  });

  let optionAnswerBtnNew = document.querySelectorAll(".answer-option");
  // ====================
  // Correct Function
  // ====================
  function correctAns() {
    optionAnswerBtnNew.forEach((btn) => {
      if (btn.textContent === currentQuestion.correct) {
        btn.classList.add("success");
      }
    });
    isClicked = true;
  }

  questionNextNum.textContent = `${askedQuestionIndex.length}. `;
  nextQuestion.textContent = askedQuestionIndex.length;
  console.log(askedQuestionIndex);
}

function next() {
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  load();
});

function load() {
  displayQuestion();
  startCountDown();
  nextBtn.classList.add("hidden");
}

replayBtn.addEventListener("click", () => {
  // complete.classList.add("hidden");
  window.location.reload();
});

// Quit Button
quitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to quit the game?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../ttaJavaScript.html";
    }
  });
});
