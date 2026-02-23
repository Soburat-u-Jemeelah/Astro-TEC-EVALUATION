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

const quizQuestions = [
  {
    id: 1,
    question: "Which HTML tag is used to define important text with strong emphasis?",
    options: ["<strong>", "<b>", "<em>", "<mark>"],
    correct: "<strong>",
  },
  {
    id: 2,
    question: "Which HTML attribute specifies a unique identifier for an element?",
    options: ["id", "class", "name", "key"],
    correct: "id",
  },
  {
    id: 3,
    question: "Which HTML tag is used to define a section in a document?",
    options: ["<section>", "<div>", "<area>", "<part>"],
    correct: "<section>",
  },
  {
    id: 4,
    question: "Which HTML tag is used to display preformatted text exactly as written?",
    options: ["<pre>", "<code>", "<text>", "<format>"],
    correct: "<pre>",
  },
  {
    id: 5,
    question: "Which HTML tag is used to define a caption for a table?",
    options: ["<caption>", "<title>", "<thead>", "<label>"],
    correct: "<caption>",
  },
  {
    id: 6,
    question: "Which CSS property is used to transform text to uppercase letters?",
    options: ["text-transform", "uppercase", "font-case", "case"],
    correct: "text-transform",
  },
  {
    id: 7,
    question: "Which CSS property controls whether element content overflows its box?",
    options: ["overflow", "clip", "scroll", "wrap"],
    correct: "overflow",
  },
  {
    id: 8,
    question: "Which CSS value makes an element display as inline block?",
    options: ["inline-block", "block", "inline", "flex"],
    correct: "inline-block",
  },
  {
    id: 9,
    question: "Which CSS property is used to change list item marker style?",
    options: ["list-style", "marker", "bullet", "list-type"],
    correct: "list-style",
  },
  {
    id: 10,
    question: "Which CSS property is used to set maximum width of element?",
    options: ["max-width", "width", "limit", "max-size"],
    correct: "max-width",
  },
  {
    id: 11,
    question: "Which Bootstrap class is used to create a fluid container?",
    options: ["container-fluid", "container", "fluid", "wrapper"],
    correct: "container-fluid",
  },
  {
    id: 12,
    question: "Which Bootstrap class adds primary background color utility?",
    options: ["bg-primary", "primary-bg", "bg-blue", "bg-main"],
    correct: "bg-primary",
  },
  {
    id: 13,
    question: "Which Bootstrap class is used to align items center in flexbox?",
    options: ["align-items-center", "items-center", "align-center", "flex-center"],
    correct: "align-items-center",
  },
  {
    id: 14,
    question: "Which Bootstrap class creates a collapsible navigation menu?",
    options: ["collapse", "dropdown", "toggle", "expand"],
    correct: "collapse",
  },
  {
    id: 15,
    question: "Which Bootstrap class styles a table with borders?",
    options: ["table-bordered", "border-table", "table-border", "bordered"],
    correct: "table-bordered",
  },
  {
    id: 16,
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["let", "var", "const", "int"],
    correct: "let",
  },
  {
    id: 17,
    question: "Which JavaScript method is used to select element by ID?",
    options: ["getElementById", "querySelector", "getById", "selectId"],
    correct: "getElementById",
  },
  {
    id: 18,
    question: "Which JavaScript method is used to write output in browser console?",
    options: ["console.log", "print", "log", "write"],
    correct: "console.log",
  },
  {
    id: 19,
    question: "Which JavaScript operator is used for strict equality comparison?",
    options: ["===", "==", "=", "!="],
    correct: "===",
  },
  {
    id: 20,
    question: "Which JavaScript keyword is used to define a function?",
    options: ["function", "def", "method", "func"],
    correct: "function",
  },
  {
    id: 21,
    question: "Which JavaScript method converts JSON string into object?",
    options: ["JSON.parse", "JSON.stringify", "parse", "convert"],
    correct: "JSON.parse",
  },
  {
    id: 22,
    question: "Which JavaScript loop is used to iterate over array elements?",
    options: ["for", "while", "loop", "foreach"],
    correct: "for",
  },
  {
    id: 23,
    question: "Which JavaScript event occurs when user clicks element?",
    options: ["onclick", "onhover", "onchange", "onload"],
    correct: "onclick",
  },
  {
    id: 24,
    question: "Which JavaScript method adds element to end of array?",
    options: ["push", "pop", "shift", "unshift"],
    correct: "push",
  },
  {
    id: 25,
    question: "Which JavaScript method removes last element from array?",
    options: ["pop", "push", "shift", "splice"],
    correct: "pop",
  },
  {
    id: 26,
    question: "Which JavaScript keyword is used to create constant variable?",
    options: ["const", "let", "var", "static"],
    correct: "const",
  },
  {
    id: 27,
    question: "Which JavaScript method delays execution for specific time?",
    options: ["setTimeout", "setInterval", "delay", "wait"],
    correct: "setTimeout",
  },
  {
    id: 28,
    question: "Which JavaScript method repeats execution at intervals?",
    options: ["setInterval", "setTimeout", "repeat", "loop"],
    correct: "setInterval",
  },
  {
    id: 29,
    question: "Which JavaScript keyword is used for conditional branching?",
    options: ["if", "switch", "case", "when"],
    correct: "if",
  },
  {
    id: 30,
    question: "Which JavaScript statement handles multiple conditions efficiently?",
    options: ["switch", "if", "case", "else"],
    correct: "switch",
  },
  {
    id: 31,
    question: "Which HTML tag is used to define video content in webpage?",
    options: ["<video>", "<media>", "<movie>", "<clip>"],
    correct: "<video>",
  },
  {
    id: 32,
    question: "Which HTML tag is used to define audio content in webpage?",
    options: ["<audio>", "<sound>", "<music>", "<media>"],
    correct: "<audio>",
  },
  {
    id: 33,
    question: "Which CSS property is used to apply transition effects?",
    options: ["transition", "transform", "animate", "effect"],
    correct: "transition",
  },
  {
    id: 34,
    question: "Which CSS property is used to rotate an element?",
    options: ["transform", "rotate", "spin", "transition"],
    correct: "transform",
  },
  {
    id: 35,
    question: "Which Bootstrap class creates a progress bar component?",
    options: ["progress", "progress-bar", "bar", "loading"],
    correct: "progress",
  },
  {
    id: 36,
    question: "Which Bootstrap class styles a list group component?",
    options: ["list-group", "group-list", "list-style", "group"],
    correct: "list-group",
  },
  {
    id: 37,
    question: "Which JavaScript method selects first matching CSS selector?",
    options: ["querySelector", "getElementById", "getElements", "selectOne"],
    correct: "querySelector",
  },
  {
    id: 38,
    question: "Which JavaScript property returns length of an array?",
    options: ["length", "size", "count", "index"],
    correct: "length",
  },
  {
    id: 39,
    question: "Which JavaScript keyword is used to exit a loop?",
    options: ["break", "stop", "exit", "return"],
    correct: "break",
  },
  {
    id: 40,
    question: "Which JavaScript keyword skips current loop iteration?",
    options: ["continue", "break", "skip", "next"],
    correct: "continue",
  },
  {
    id: 41,
    question: "Which HTML tag defines a form input field for password?",
    options: ["password", "text", "email", "number"],
    correct: "password",
  },
  {
    id: 42,
    question: "Which CSS unit is relative to root element font size?",
    options: ["rem", "em", "px", "%"],
    correct: "rem",
  },
  {
    id: 43,
    question: "Which CSS property controls element transparency level?",
    options: ["opacity", "visibility", "alpha", "display"],
    correct: "opacity",
  },
  {
    id: 44,
    question: "Which Bootstrap class makes element display flex?",
    options: ["d-flex", "flex", "display-flex", "flexbox"],
    correct: "d-flex",
  },
  {
    id: 45,
    question: "Which JavaScript method converts object into JSON string?",
    options: ["JSON.stringify", "JSON.parse", "stringify", "convert"],
    correct: "JSON.stringify",
  },
  {
    id: 46,
    question: "Which JavaScript function displays alert dialog box?",
    options: ["alert", "prompt", "confirm", "message"],
    correct: "alert",
  },
  {
    id: 47,
    question: "Which JavaScript function asks user for input?",
    options: ["prompt", "alert", "confirm", "input"],
    correct: "prompt",
  },
  {
    id: 48,
    question: "Which JavaScript function confirms user decision with OK or Cancel?",
    options: ["confirm", "alert", "prompt", "verify"],
    correct: "confirm",
  },
  {
    id: 49,
    question: "Which CSS property is used to change mouse pointer to hand?",
    options: ["cursor", "pointer", "hover", "icon"],
    correct: "cursor",
  },
  {
    id: 50,
    question: "Which Bootstrap class creates rounded corners utility?",
    options: ["rounded", "radius", "round", "border-radius"],
    correct: "rounded",
  },
  {
    id: 51,
    question: "Which HTML tag defines a label for form input element?",
    options: ["<label>", "<input>", "<form>", "<tag>"],
    correct: "<label>",
  },
  {
    id: 52,
    question: "Which JavaScript method removes element from DOM?",
    options: ["remove", "delete", "detach", "pop"],
    correct: "remove",
  },
  {
    id: 53,
    question: "Which CSS property applies grid layout to container?",
    options: ["grid", "flex", "block", "inline"],
    correct: "grid",
  },
  {
    id: 54,
    question: "Which Bootstrap class centers block element horizontally?",
    options: ["mx-auto", "m-auto", "center", "auto"],
    correct: "mx-auto",
  },
  {
    id: 55,
    question: "Which JavaScript data type represents true or false values?",
    options: ["boolean", "string", "number", "object"],
    correct: "boolean",
  },
  {
    id: 56,
    question: "Which JavaScript operator concatenates two strings?",
    options: ["+", "&&", "||", "*"],
    correct: "+",
  },
  {
    id: 57,
    question: "Which CSS property sets element border thickness?",
    options: ["border-width", "border", "outline", "thickness"],
    correct: "border-width",
  },
  {
    id: 58,
    question: "Which Bootstrap class creates breadcrumb navigation?",
    options: ["breadcrumb", "nav", "pagination", "path"],
    correct: "breadcrumb",
  },
  {
    id: 59,
    question: "Which JavaScript method finds element in array?",
    options: ["find", "filter", "map", "search"],
    correct: "find",
  },
  {
    id: 60,
    question: "Which CSS property sets element minimum height?",
    options: ["min-height", "height", "min-width", "size"],
    correct: "min-height",
  },
  {
    id: 61,
    question: "Which HTML tag is used to create canvas for drawing graphics?",
    options: ["<canvas>", "<svg>", "<draw>", "<graphic>"],
    correct: "<canvas>",
  },
  {
    id: 62,
    question: "Which JavaScript method attaches event listener to element?",
    options: ["addEventListener", "onclick", "listen", "attach"],
    correct: "addEventListener",
  },
  {
    id: 63,
    question: "Which Bootstrap class creates pagination component?",
    options: ["pagination", "pages", "pager", "nav-pages"],
    correct: "pagination",
  },
  {
    id: 64,
    question: "Which CSS property sets font family of text?",
    options: ["font-family", "font-style", "font-type", "family"],
    correct: "font-family",
  },
  {
    id: 65,
    question: "Which JavaScript array method creates new array from existing?",
    options: ["map", "filter", "reduce", "slice"],
    correct: "map",
  },
  {
    id: 66,
    question: "Which HTML tag defines metadata about HTML document?",
    options: ["<meta>", "<head>", "<data>", "<info>"],
    correct: "<meta>",
  },
  {
    id: 67,
    question: "Which CSS property changes element display to none?",
    options: ["display", "visibility", "hidden", "remove"],
    correct: "display",
  },
  {
    id: 68,
    question: "Which Bootstrap class adds shadow utility to element?",
    options: ["shadow", "box-shadow", "shadow-sm", "shadow-lg"],
    correct: "shadow",
  },
  {
    id: 69,
    question: "Which JavaScript method sorts elements of an array?",
    options: ["sort", "order", "arrange", "filter"],
    correct: "sort",
  },
  {
    id: 70,
    question: "Which CSS property changes element background image?",
    options: ["background-image", "bg-image", "image", "background"],
    correct: "background-image",
  }
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
