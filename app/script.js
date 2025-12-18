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
  // HTML QUESTIONS (1–15)
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "HTML stands for HyperText Markup Language.",
      "HTML stands for HighText Machine Language.",
      "HTML stands for Hyperlink Text Management Language.",
      "HTML stands for Home Tool Markup Language."
    ],
    correct: "HTML stands for HyperText Markup Language."
  },
  {
    id: 2,
    question: "What is the purpose of the <head> tag in HTML?",
    options: [
      "The <head> tag contains metadata about the document.",
      "The <head> tag displays visible content on the page.",
      "The <head> tag creates navigation menus.",
      "The <head> tag holds images and videos."
    ],
    correct: "The <head> tag contains metadata about the document."
  },
  {
    id: 3,
    question: "What does the <title> tag do?",
    options: [
      "The <title> tag defines the title shown in the browser tab.",
      "The <title> tag displays large headings on the page.",
      "The <title> tag creates tooltips.",
      "The <title> tag styles text content."
    ],
    correct: "The <title> tag defines the title shown in the browser tab."
  },
  {
    id: 4,
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "The <a> tag is used to create hyperlinks.",
      "The <link> tag is used to create hyperlinks.",
      "The <href> tag is used to create hyperlinks.",
      "The <nav> tag is used to create hyperlinks."
    ],
    correct: "The <a> tag is used to create hyperlinks."
  },
  {
    id: 5,
    question: "What is the purpose of the alt attribute in images?",
    options: [
      "The alt attribute provides alternative text for an image.",
      "The alt attribute changes image size.",
      "The alt attribute applies image animation.",
      "The alt attribute loads images faster."
    ],
    correct: "The alt attribute provides alternative text for an image."
  },
  {
    id: 6,
    question: "Which tag is used to create an ordered list?",
    options: [
      "The <ol> tag is used to create an ordered list.",
      "The <ul> tag is used to create an ordered list.",
      "The <li> tag is used to create an ordered list.",
      "The <list> tag is used to create an ordered list."
    ],
    correct: "The <ol> tag is used to create an ordered list."
  },
  {
    id: 7,
    question: "What does the <meta charset='UTF-8'> tag do?",
    options: [
      "It defines the character encoding for the document.",
      "It sets the page background color.",
      "It enables responsive layout.",
      "It loads external scripts."
    ],
    correct: "It defines the character encoding for the document."
  },
  {
    id: 8,
    question: "Which tag is used to create a form in HTML?",
    options: [
      "The <form> tag is used to create a form.",
      "The <input> tag is used to create a form.",
      "The <fieldset> tag is used to create a form.",
      "The <data> tag is used to create a form."
    ],
    correct: "The <form> tag is used to create a form."
  },
  {
    id: 9,
    question: "What is semantic HTML?",
    options: [
      "Semantic HTML uses meaningful tags that describe content.",
      "Semantic HTML uses only div tags.",
      "Semantic HTML removes all styling.",
      "Semantic HTML is used only for JavaScript."
    ],
    correct: "Semantic HTML uses meaningful tags that describe content."
  },
  {
    id: 10,
    question: "Which tag represents the main content of a page?",
    options: [
      "The <main> tag represents the main content of a page.",
      "The <section> tag represents the main content.",
      "The <body> tag represents the main content.",
      "The <article> tag represents the main content."
    ],
    correct: "The <main> tag represents the main content of a page."
  },

  // CSS QUESTIONS (11–25)
  {
    id: 11,
    question: "What does CSS stand for?",
    options: [
      "CSS stands for Cascading Style Sheets.",
      "CSS stands for Computer Style Sheets.",
      "CSS stands for Colorful Style System.",
      "CSS stands for Creative Styling Syntax."
    ],
    correct: "CSS stands for Cascading Style Sheets."
  },
  {
    id: 12,
    question: "What is the purpose of CSS?",
    options: [
      "CSS is used to style and layout web pages.",
      "CSS is used to create database connections.",
      "CSS is used to structure web content.",
      "CSS is used to handle server logic."
    ],
    correct: "CSS is used to style and layout web pages."
  },
  {
    id: 13,
    question: "Which property is used to change text color?",
    options: [
      "The color property is used to change text color.",
      "The font property is used to change text color.",
      "The text-style property is used to change text color.",
      "The background property is used to change text color."
    ],
    correct: "The color property is used to change text color."
  },
  {
    id: 14,
    question: "What does display: flex do?",
    options: [
      "It enables a flexible layout system.",
      "It hides the element.",
      "It fixes an element to the screen.",
      "It centers text automatically."
    ],
    correct: "It enables a flexible layout system."
  },
  {
    id: 15,
    question: "What is the CSS box model?",
    options: [
      "The box model includes margin, border, padding, and content.",
      "The box model includes width and height only.",
      "The box model controls animations.",
      "The box model manages JavaScript behavior."
    ],
    correct: "The box model includes margin, border, padding, and content."
  },
  {
    id: 16,
    question: "Which unit is relative to the viewport width?",
    options: [
      "The vw unit is relative to the viewport width.",
      "The px unit is relative to the viewport width.",
      "The em unit is relative to the viewport width.",
      "The rem unit is relative to the viewport width."
    ],
    correct: "The vw unit is relative to the viewport width."
  },
  {
    id: 17,
    question: "What does position: absolute do?",
    options: [
      "It positions an element relative to its nearest positioned ancestor.",
      "It positions an element relative to the viewport.",
      "It fixes an element permanently.",
      "It aligns text automatically."
    ],
    correct: "It positions an element relative to its nearest positioned ancestor."
  },
  {
    id: 18,
    question: "What is the purpose of media queries?",
    options: [
      "Media queries make layouts responsive.",
      "Media queries connect to databases.",
      "Media queries improve SEO.",
      "Media queries load JavaScript files."
    ],
    correct: "Media queries make layouts responsive."
  },
  {
    id: 19,
    question: "Which property controls element transparency?",
    options: [
      "The opacity property controls transparency.",
      "The visibility property controls transparency.",
      "The display property controls transparency.",
      "The filter property controls transparency."
    ],
    correct: "The opacity property controls transparency."
  },
  {
    id: 20,
    question: "What does z-index control?",
    options: [
      "z-index controls the vertical stacking order of elements.",
      "z-index controls font size.",
      "z-index controls animation speed.",
      "z-index controls element width."
    ],
    correct: "z-index controls the vertical stacking order of elements."
  },

  // JAVASCRIPT QUESTIONS (21–40)
  {
    id: 21,
    question: "What is JavaScript mainly used for?",
    options: [
      "JavaScript is used to add interactivity to web pages.",
      "JavaScript is used only for styling.",
      "JavaScript is used for database storage.",
      "JavaScript is used for HTML structure."
    ],
    correct: "JavaScript is used to add interactivity to web pages."
  },
  {
    id: 22,
    question: "What is a variable in JavaScript?",
    options: [
      "A variable is a container for storing data values.",
      "A variable is a function parameter.",
      "A variable is a loop condition.",
      "A variable is a style rule."
    ],
    correct: "A variable is a container for storing data values."
  },
  {
    id: 23,
    question: "Which keyword is used to declare a constant?",
    options: [
      "The const keyword is used to declare a constant.",
      "The let keyword is used to declare a constant.",
      "The var keyword is used to declare a constant.",
      "The static keyword is used to declare a constant."
    ],
    correct: "The const keyword is used to declare a constant."
  },
  {
    id: 24,
    question: "What does typeof return?",
    options: [
      "typeof returns the data type of a value.",
      "typeof returns the value itself.",
      "typeof returns a boolean only.",
      "typeof returns an array."
    ],
    correct: "typeof returns the data type of a value."
  },
  {
    id: 25,
    question: "What is an array?",
    options: [
      "An array stores multiple values in a single variable.",
      "An array stores only strings.",
      "An array stores key-value pairs.",
      "An array stores HTML elements only."
    ],
    correct: "An array stores multiple values in a single variable."
  },
  {
    id: 26,
    question: "What is a function?",
    options: [
      "A function is a reusable block of code.",
      "A function is a data type.",
      "A function is a loop statement.",
      "A function is a CSS rule."
    ],
    correct: "A function is a reusable block of code."
  },
  {
    id: 27,
    question: "What does addEventListener do?",
    options: [
      "It listens for events and runs code when they occur.",
      "It adds HTML elements dynamically.",
      "It styles interactive elements.",
      "It connects JavaScript to a server."
    ],
    correct: "It listens for events and runs code when they occur."
  },
  {
    id: 28,
    question: "What is a promise?",
    options: [
      "A promise represents a value that will be available later.",
      "A promise runs code instantly.",
      "A promise is a loop structure.",
      "A promise is a CSS feature."
    ],
    correct: "A promise represents a value that will be available later."
  },
  {
    id: 29,
    question: "What does JSON stand for?",
    options: [
      "JSON stands for JavaScript Object Notation.",
      "JSON stands for Java Source Object Network.",
      "JSON stands for JavaScript Online Node.",
      "JSON stands for Java Standard Object Name."
    ],
    correct: "JSON stands for JavaScript Object Notation."
  },
  {
    id: 30,
    question: "What is localStorage used for?",
    options: [
      "localStorage is used to store data in the browser.",
      "localStorage is used to store server data.",
      "localStorage is used to style components.",
      "localStorage is used to create APIs."
    ],
    correct: "localStorage is used to store data in the browser."
  },

  // VUE QUESTIONS (31–50)
  {
    id: 31,
    question: "What is Vue.js?",
    options: [
      "Vue.js is a JavaScript framework for building user interfaces.",
      "Vue.js is a database management system.",
      "Vue.js is a CSS library.",
      "Vue.js is a backend programming language."
    ],
    correct: "Vue.js is a JavaScript framework for building user interfaces."
  },
  {
    id: 32,
    question: "What is a Vue component?",
    options: [
      "A Vue component is a reusable piece of UI.",
      "A Vue component is a database table.",
      "A Vue component is a CSS class.",
      "A Vue component is a server route."
    ],
    correct: "A Vue component is a reusable piece of UI."
  },
  {
    id: 33,
    question: "What does v-bind do?",
    options: [
      "v-bind dynamically binds attributes to data.",
      "v-bind creates loops.",
      "v-bind handles events.",
      "v-bind styles elements."
    ],
    correct: "v-bind dynamically binds attributes to data."
  },
  {
    id: 34,
    question: "What does v-model do?",
    options: [
      "v-model creates two-way data binding.",
      "v-model handles routing.",
      "v-model fetches API data.",
      "v-model controls animations."
    ],
    correct: "v-model creates two-way data binding."
  },
  {
    id: 35,
    question: "What is computed property used for?",
    options: [
      "Computed properties calculate values based on data.",
      "Computed properties store static values.",
      "Computed properties handle API requests.",
      "Computed properties replace methods completely."
    ],
    correct: "Computed properties calculate values based on data."
  },
  {
    id: 36,
    question: "What does v-if do?",
    options: [
      "v-if conditionally renders elements.",
      "v-if styles elements.",
      "v-if binds input values.",
      "v-if listens for events."
    ],
    correct: "v-if conditionally renders elements."
  },
  {
    id: 37,
    question: "What does v-for do?",
    options: [
      "v-for loops through data and renders elements.",
      "v-for handles events.",
      "v-for styles elements.",
      "v-for binds attributes."
    ],
    correct: "v-for loops through data and renders elements."
  },
  {
    id: 38,
    question: "What is props used for?",
    options: [
      "Props pass data from parent to child components.",
      "Props store local state.",
      "Props handle API calls.",
      "Props replace Vuex."
    ],
    correct: "Props pass data from parent to child components."
  },
  {
    id: 39,
    question: "What is Vue Router used for?",
    options: [
      "Vue Router handles page navigation in Vue apps.",
      "Vue Router manages state.",
      "Vue Router styles components.",
      "Vue Router connects databases."
    ],
    correct: "Vue Router handles page navigation in Vue apps."
  },
  {
    id: 40,
    question: "What is reactive data in Vue?",
    options: [
      "Reactive data automatically updates the UI when it changes.",
      "Reactive data never changes.",
      "Reactive data is static HTML.",
      "Reactive data runs only once."
    ],
    correct: "Reactive data automatically updates the UI when it changes."
  },
    {
    id: 41,
    question: "What is the purpose of the mounted lifecycle hook in Vue?",
    options: [
      "The mounted hook runs after the component is added to the DOM.",
      "The mounted hook runs before data is created.",
      "The mounted hook styles the component.",
      "The mounted hook replaces computed properties."
    ],
    correct: "The mounted hook runs after the component is added to the DOM."
  },
  {
    id: 42,
    question: "What is Vuex mainly used for?",
    options: [
      "Vuex is used for centralized state management.",
      "Vuex is used for routing pages.",
      "Vuex is used for styling components.",
      "Vuex is used for form validation."
    ],
    correct: "Vuex is used for centralized state management."
  },
  {
    id: 43,
    question: "What does emit do in Vue?",
    options: [
      "Emit sends custom events from child to parent components.",
      "Emit updates the DOM directly.",
      "Emit fetches API data.",
      "Emit creates reactive variables."
    ],
    correct: "Emit sends custom events from child to parent components."
  },
  {
    id: 44,
    question: "What is the purpose of scoped styles in Vue?",
    options: [
      "Scoped styles apply CSS only to a specific component.",
      "Scoped styles apply globally to all components.",
      "Scoped styles improve JavaScript performance.",
      "Scoped styles control routing behavior."
    ],
    correct: "Scoped styles apply CSS only to a specific component."
  },
  {
    id: 45,
    question: "What does ref do in Vue?",
    options: [
      "Ref provides direct access to DOM elements or component instances.",
      "Ref stores global state.",
      "Ref replaces props.",
      "Ref handles API requests."
    ],
    correct: "Ref provides direct access to DOM elements or component instances."
  },
  {
    id: 46,
    question: "What is the purpose of slots in Vue?",
    options: [
      "Slots allow components to receive and display custom content.",
      "Slots manage application routing.",
      "Slots store component data.",
      "Slots replace event listeners."
    ],
    correct: "Slots allow components to receive and display custom content."
  },
  {
    id: 47,
    question: "What is the difference between methods and computed properties?",
    options: [
      "Computed properties are cached while methods run every time they are called.",
      "Methods are cached while computed properties are not.",
      "Methods are reactive while computed properties are not.",
      "There is no difference between them."
    ],
    correct: "Computed properties are cached while methods run every time they are called."
  },
  {
    id: 48,
    question: "What does watch do in Vue?",
    options: [
      "Watch observes data changes and reacts to them.",
      "Watch styles components dynamically.",
      "Watch replaces lifecycle hooks.",
      "Watch handles user authentication."
    ],
    correct: "Watch observes data changes and reacts to them."
  },
  {
    id: 49,
    question: "What is the purpose of key in v-for?",
    options: [
      "The key helps Vue efficiently track and update list items.",
      "The key styles list elements.",
      "The key binds input values.",
      "The key prevents loops from running."
    ],
    correct: "The key helps Vue efficiently track and update list items."
  },
  {
    id: 50,
    question: "Why is Vue suitable for frontend development?",
    options: [
      "Vue is lightweight, reactive, and easy to integrate into projects.",
      "Vue replaces HTML and CSS completely.",
      "Vue works only on backend servers.",
      "Vue does not support components."
    ],
    correct: "Vue is lightweight, reactive, and easy to integrate into projects."
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
