const preload = document.querySelector(".preload");
const startBtn = document.querySelector("#btn_start");
const quizRulesCard = document.querySelector("#quiz_rules");
const continueBtn = document.querySelector("#continueBtn");
const countdownContainer = document.querySelector(".count-down-container ");
const exitBtn = document.querySelector("#exitBtn");
const quizCard = document.querySelector("#quiz_card");
const countdownText = document.getElementById("countdownText");
const countdownNum = document.getElementById("countdownNum");
const countdownTime = document.querySelector(".tym");
const questions = document.querySelector("#question");
const optionAnswerBtn = document.querySelector("#answer-option");
const complete = document.querySelector("#complete");
const correctScore = document.querySelector(".correct-score");
const totalQuestion = document.querySelector(".total-question");
const totalQuestion2 = document.querySelector(".total-question2");
const nextQuestion = document.querySelector(".next-question");
const replayBtn = document.querySelector(".replay-btn");
const quitBtn = document.querySelector(".quit-btn");
const questionNextNum = document.querySelector(".questionNextNum");
const percentageScore = document.querySelector(".percentage-score");
const percentageContainer = document.querySelector("#percentage");
const playerForm = document.getElementById("playerForm");
const playerNameInput = document.getElementById("playerName");
const nameContainer = document.querySelector("#nameContainer");
const nextBtn = document.querySelector("#nextBtn");

let playerName = "";
let isEventDisabled = true;
let wrongPicked = 0;
let correctPicked = 0;
let askedQuestionIndex = [];
let remainingQuestion = [];
let quizEnded = false;
let quizTimerInterval = null;
let autoAdvanceTimeout = null;

const QUIZ_DURATION_SECONDS = 30 * 60; // 30 minutes for the whole quiz
let quizTimeRemaining = QUIZ_DURATION_SECONDS;

if (typeof quizQuestions === "undefined" || !Array.isArray(quizQuestions)) {
  console.error("quizQuestions not found. Load questions.js before script.js.");
} else {
  remainingQuestion = [...quizQuestions];
  totalQuestion2.textContent = quizQuestions.length;
}

stopLoad();
function stopLoad() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preload.classList.add("hidden");
      nameContainer.classList.remove("hidden");
    }, 2000);
  });
}

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

function saveQuizResult() {
  const results = JSON.parse(localStorage.getItem("htmlQuizResults")) || [];
  const total = quizQuestions.length;
  const percentage = total
    ? ((correctPicked / total) * 100).toFixed(1)
    : "0.0";

  const newResult = {
    name: playerName,
    score: correctPicked,
    total: total,
    percentage: percentage,
    date: new Date().toLocaleDateString(),
  };

  results.push(newResult);
  results.sort((a, b) => b.percentage - a.percentage);
  localStorage.setItem("htmlQuizResults", JSON.stringify(results));
}

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  preload.style.display = "flex";
  setTimeout(() => {
    preload.classList.add("hidden");
    quizRulesCard.classList.remove("hidden");
  }, 2000);
});

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
      countdownText.textContent = "Get ready... The game starts in ";
      countdownNum.textContent = countdown;
    } else {
      clearInterval(interval);
      countdownText.textContent = "Go!";
      countdownNum.classList.add("hidden");
      countdownContainer.classList.add("hidden");
      quizCard.classList.remove("hidden");
      if (nextBtn) nextBtn.classList.add("hidden");
      startQuizTimer();
      displayQuestion();
    }
  }, 1000);
}

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
      preload.style.display = "flex";
      quizRulesCard.classList.add("hidden");
      window.setTimeout(() => {
        preload.style.display = "none";
        startBtn.classList.remove("hidden");
      }, 1000);
    }
  });
});

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startQuizTimer() {
  quizTimeRemaining = QUIZ_DURATION_SECONDS;
  countdownTime.innerHTML = formatTime(quizTimeRemaining);

  quizTimerInterval = setInterval(() => {
    quizTimeRemaining--;
    countdownTime.innerHTML = formatTime(Math.max(quizTimeRemaining, 0));

    if (quizTimeRemaining <= 0) {
      clearInterval(quizTimerInterval);
      quizTimerInterval = null;
      endQuiz();
    }
  }, 1000);
}

function stopQuizTimer() {
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
  if (autoAdvanceTimeout) {
    clearTimeout(autoAdvanceTimeout);
    autoAdvanceTimeout = null;
  }
}

function getRandomNumber() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * remainingQuestion.length);
  } while (askedQuestionIndex.includes(randomIndex));

  askedQuestionIndex.push(randomIndex);
  return randomIndex;
}

function endQuiz() {
  if (quizEnded) return;
  quizEnded = true;
  stopQuizTimer();

  quizCard.classList.add("hidden");
  preload.style.display = "flex";

  setTimeout(() => {
    preload.classList.add("hidden");
    complete.classList.remove("hidden");
  }, 1500);

  const total = quizQuestions.length;
  const correctPercentage = total
    ? ((correctPicked / total) * 100).toFixed(1)
    : "0.0";

  correctScore.textContent = correctPicked;
  totalQuestion.textContent = total;
  percentageScore.textContent = correctPercentage;

  if (correctPercentage >= 70) {
    percentageContainer.style.color = "#00cc00";
  } else if (correctPercentage >= 50) {
    percentageContainer.style.color = "#cca300";
  } else {
    percentageContainer.style.color = "#e62e00";
  }

  saveQuizResult();
}

function displayQuestion() {
  if (quizEnded) return;

  if (askedQuestionIndex.length === remainingQuestion.length) {
    endQuiz();
    return;
  }

  const randomOptionIndex = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
  const currentQuestionIndex = getRandomNumber();
  const currentQuestion = remainingQuestion[currentQuestionIndex];

  questions.textContent = currentQuestion.question;
  optionAnswerBtn.innerHTML = "";

  currentQuestion.options.forEach((option, i) => {
    const button = document.createElement("p");
    button.classList.add("answer-option");
    button.textContent = currentQuestion.options[randomOptionIndex[i]];
    optionAnswerBtn.appendChild(button);

    isEventDisabled = true;

    button.addEventListener("click", () => {
      if (!isEventDisabled || quizEnded) return;

      if (button.textContent === currentQuestion.correct) {
        correctAns();
        correctPicked++;
      } else {
        correctAns();
        wrongPicked++;
        button.classList.add("wrong");
      }

      isEventDisabled = false;

      // Auto-advance after 3 seconds (quiz timer keeps running)
      autoAdvanceTimeout = setTimeout(() => {
        if (!quizEnded) {
          displayQuestion();
        }
      }, 3000);
    });
  });

  const optionAnswerBtnNew = document.querySelectorAll(".answer-option");

  function correctAns() {
    optionAnswerBtnNew.forEach((btn) => {
      if (btn.textContent === currentQuestion.correct) {
        btn.classList.add("success");
      }
    });
  }

  questionNextNum.textContent = `${askedQuestionIndex.length}. `;
  nextQuestion.textContent = askedQuestionIndex.length;
}

replayBtn.addEventListener("click", () => {
  window.location.reload();
});

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
      window.location.href = "../index.html";
    }
  });
});
