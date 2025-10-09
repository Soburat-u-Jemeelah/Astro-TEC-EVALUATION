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
    question: "What is the data type of 42 in JavaScript?",
    options: [
      "It is a number data type.",
      "It is a string data type.",
      "It is a boolean data type.",
      "It is an undefined data type."
    ],
    correct: "It is a number data type.",
  },
  {
    id: 2,
    question: "What type of value is returned by typeof 'Hello'?",
    options: [
      "It returns a string data type.",
      "It returns a number data type.",
      "It returns an object data type.",
      "It returns an undefined data type."
    ],
    correct: "It returns a string data type.",
  },
  {
    id: 3,
    question: "What does typeof true return in JavaScript?",
    options: [
      "It returns a boolean data type.",
      "It returns a string data type.",
      "It returns a number data type.",
      "It returns an object data type."
    ],
    correct: "It returns a boolean data type.",
  },
  {
    id: 4,
    question: "Which of the following represents an undefined value in JavaScript?",
    options: [
      "It represents a variable declared but not assigned a value.",
      "It represents a string with no characters.",
      "It represents zero in a numeric context.",
      "It represents false in a condition."
    ],
    correct: "It represents a variable declared but not assigned a value.",
  },
  {
    id: 5,
    question: "What is the result of typeof null in JavaScript?",
    options: [
      "It returns object due to a historical bug in JavaScript.",
      "It returns null because that’s its type.",
      "It returns undefined because it’s empty.",
      "It returns boolean because it’s false-like."
    ],
    correct: "It returns object due to a historical bug in JavaScript.",
  },
  {
    id: 6,
    question: "Which of the following is a primitive data type in JavaScript?",
    options: [
      "It is a string data type.",
      "It is an array data type.",
      "It is an object data type.",
      "It is a function data type."
    ],
    correct: "It is a string data type.",
  },
  {
    id: 7,
    question: "What is the output of typeof undefined?",
    options: [
      "It returns undefined as its data type.",
      "It returns null as its data type.",
      "It returns object as its data type.",
      "It returns boolean as its data type."
    ],
    correct: "It returns undefined as its data type.",
  },
  {
    id: 8,
    question: "Which statement best describes a Boolean in JavaScript?",
    options: [
      "It represents a logical value of true or false.",
      "It represents a number that can be positive or negative.",
      "It represents a sequence of characters.",
      "It represents an empty object."
    ],
    correct: "It represents a logical value of true or false.",
  },
  {
    id: 9,
    question: "What happens when you use typeof on a variable that has not been declared?",
    options: [
      "It returns undefined as a string.",
      "It throws an error immediately.",
      "It returns null as a string.",
      "It returns number as a string."
    ],
    correct: "It returns undefined as a string.",
  },
  {
    id: 10,
    question: "How does JavaScript treat numbers like 3.14 and 42?",
    options: [
      "They are both treated as number data type.",
      "They are treated as float and integer respectively.",
      "They are treated as string values.",
      "They are treated as boolean values."
    ],
    correct: "They are both treated as number data type.",
  },
  {
    id: 11,
    question: "What is a string in JavaScript?",
    options: [
      "It is a sequence of characters enclosed in quotes.",
      "It is a numerical value used in calculations.",
      "It is a boolean value representing true or false.",
      "It is an undefined variable."
    ],
    correct: "It is a sequence of characters enclosed in quotes.",
  },
  {
    id: 12,
    question: "What is the default value of a variable that is declared but not assigned in JavaScript?",
    options: [
      "It is undefined by default.",
      "It is null by default.",
      "It is zero by default.",
      "It is false by default."
    ],
    correct: "It is undefined by default.",
  },
  {
    id: 13,
    question: "Which statement is true about null in JavaScript?",
    options: [
      "It is a special value that represents intentional absence of any object value.",
      "It is a string value representing emptiness.",
      "It is a number equal to zero.",
      "It is a boolean representing false."
    ],
    correct: "It is a special value that represents intentional absence of any object value.",
  },
  {
    id: 14,
    question: "What happens when you concatenate a string with a number in JavaScript?",
    options: [
      "The number is converted to a string and concatenated.",
      "The operation throws an error.",
      "The number is ignored in the result.",
      "The result becomes NaN."
    ],
    correct: "The number is converted to a string and concatenated.",
  },
  {
    id: 15,
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: [
      "It is an object, which is non-primitive.",
      "It is a string, which is primitive.",
      "It is a number, which is primitive.",
      "It is a boolean, which is primitive."
    ],
    correct: "It is an object, which is non-primitive.",
  },
  {
    id: 16,
    question: "What is the result of Boolean('') in JavaScript?",
    options: [
      "It returns false because an empty string is falsy.",
      "It returns true because strings are truthy.",
      "It returns undefined because it is empty.",
      "It returns null because there is no value."
    ],
    correct: "It returns false because an empty string is falsy.",
  },
  {
    id: 17,
    question: "What does Number('123') return in JavaScript?",
    options: [
      "It returns 123 as a number data type.",
      "It returns '123' as a string.",
      "It returns NaN because it is not a valid number.",
      "It returns undefined because it is converted incorrectly."
    ],
    correct: "It returns 123 as a number data type.",
  },
  {
    id: 18,
    question: "What will Boolean(0) return in JavaScript?",
    options: [
      "It returns false because 0 is a falsy value.",
      "It returns true because 0 is a number.",
      "It returns undefined because 0 is empty.",
      "It returns null because it represents nothing."
    ],
    correct: "It returns false because 0 is a falsy value.",
  },
  {
    id: 19,
    question: "What does String(true) return in JavaScript?",
    options: [
      "It returns 'true' as a string.",
      "It returns 1 as a number.",
      "It returns undefined as a string.",
      "It returns null as a string."
    ],
    correct: "It returns 'true' as a string.",
  },
  {
    id: 20,
    question: "What is the difference between null and undefined in JavaScript?",
    options: [
      "Undefined means a variable has been declared but not assigned, while null means a variable is assigned no value intentionally.",
      "Null and undefined mean the same thing in JavaScript.",
      "Undefined is a number and null is a string.",
      "Both represent boolean false values."
    ],
    correct: "Undefined means a variable has been declared but not assigned, while null means a variable is assigned no value intentionally.",
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
