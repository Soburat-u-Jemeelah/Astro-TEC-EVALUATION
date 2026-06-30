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

// const quizQuestions = [
//   // What is JavaScript
//   {
//     id: 1,
//     question: "What type of language is JavaScript primarily used as in web browsers?",
//     options: ["Compiled only", "Scripting language", "Markup language", "Database language"],
//     correct: "Scripting language",
//   },
//   {
//     id: 2,
//     question: "Where does JavaScript typically run in a web application?",
//     options: ["Only on the server", "In the browser and/or on servers (Node.js)", "Only in CSS files", "Only in HTML comments"],
//     correct: "In the browser and/or on servers (Node.js)",
//   },
//   {
//     id: 3,
//     question: "Which tag is commonly used to embed JavaScript in an HTML file?",
//     options: ["<script>", "<js>", "<javascript>", "<code>"],
//     correct: "<script>",
//   },
//   {
//     id: 4,
//     question: "What does JavaScript mainly add to a web page?",
//     options: ["Static structure only", "Interactivity and dynamic behavior", "Font styling only", "Database storage only"],
//     correct: "Interactivity and dynamic behavior",
//   },
//   {
//     id: 5,
//     question: "Is JavaScript the same language as Java?",
//     options: ["Yes, they are identical", "No, they are different languages", "JavaScript is a subset of Java", "Java is a subset of JavaScript"],
//     correct: "No, they are different languages",
//   },

//   // Primitive Data Types
//   {
//     id: 6,
//     question: "Which of the following is a primitive data type in JavaScript?",
//     options: ["string", "array", "object", "function"],
//     correct: "string",
//   },
//   {
//     id: 7,
//     question: "What is the typeof operator result for the number 42?",
//     options: ["'number'", "'integer'", "'float'", "'numeric'"],
//     correct: "'number'",
//   },
//   {
//     id: 8,
//     question: "Which primitive type represents true or false values?",
//     options: ["boolean", "binary", "bool", "logical"],
//     correct: "boolean",
//   },
//   {
//     id: 9,
//     question: "What typeof returns for 'hello'?",
//     options: ["'string'", "'text'", "'char'", "'str'"],
//     correct: "'string'",
//   },
//   {
//     id: 10,
//     question: "Which is NOT a primitive data type in JavaScript?",
//     options: ["object", "number", "boolean", "undefined"],
//     correct: "object",
//   },

//   // concat, math, modulus, length, index notation
//   {
//     id: 11,
//     question: "What does 'Hello' + ' World' produce in JavaScript?",
//     options: ["'Hello World'", "Error", "'Hello' ' World'", "NaN"],
//     correct: "'Hello World'",
//   },
//   {
//     id: 12,
//     question: "What is the result of 10 + 5 in JavaScript?",
//     options: ["15", "105", "'105'", "Error"],
//     correct: "15",
//   },
//   {
//     id: 13,
//     question: "What does the modulus operator (%) return for 10 % 3?",
//     options: ["1", "3", "0", "3.33"],
//     correct: "1",
//   },
//   {
//     id: 14,
//     question: "What is 17 % 5?",
//     options: ["2", "3", "5", "0"],
//     correct: "2",
//   },
//   {
//     id: 15,
//     question: "What is the length of the string 'JavaScript'?",
//     options: ["10", "9", "11", "8"],
//     correct: "10",
//   },
//   {
//     id: 16,
//     question: "How do you access the first character of str using index notation?",
//     options: ["str[0]", "str[1]", "str.first", "str(0)"],
//     correct: "str[0]",
//   },
//   {
//     id: 17,
//     question: "What is '5' + 3 in JavaScript (string + number)?",
//     options: ["'53'", "8", "'8'", "Error"],
//     correct: "'53'",
//   },
//   {
//     id: 18,
//     question: "What is 7 * 4?",
//     options: ["28", "11", "74", "3"],
//     correct: "28",
//   },
//   {
//     id: 19,
//     question: "Which operator divides two numbers and returns the quotient?",
//     options: ["/", "%", "//", "div"],
//     correct: "/",
//   },
//   {
//     id: 20,
//     question: "What is the last index of an array with length 5?",
//     options: ["4", "5", "0", "6"],
//     correct: "4",
//   },

//   // Boolean
//   {
//     id: 21,
//     question: "Which value is a boolean in JavaScript?",
//     options: ["true", "'true'", "1", "'false'"],
//     correct: "true",
//   },
//   {
//     id: 22,
//     question: "What is the result of 5 > 3?",
//     options: ["true", "false", "undefined", "5"],
//     correct: "true",
//   },
//   {
//     id: 23,
//     question: "What is the result of 10 === '10'?",
//     options: ["false", "true", "undefined", "null"],
//     correct: "false",
//   },
//   {
//     id: 24,
//     question: "Which expression evaluates to false?",
//     options: ["2 < 1", "3 > 2", "1 === 1", "0 !== 1"],
//     correct: "2 < 1",
//   },
//   {
//     id: 25,
//     question: "What type does typeof true return?",
//     options: ["'boolean'", "'bool'", "'true'", "'object'"],
//     correct: "'boolean'",
//   },

//   // Null
//   {
//     id: 26,
//     question: "What is the value of a variable explicitly set to no object reference?",
//     options: ["null", "undefined", "0", "false"],
//     correct: "null",
//   },
//   {
//     id: 27,
//     question: "What does typeof null return in JavaScript?",
//     options: ["'object'", "'null'", "'undefined'", "'boolean'"],
//     correct: "'object'",
//   },
//   {
//     id: 28,
//     question: "How do you assign null to a variable x?",
//     options: ["x = null;", "x = NULL;", "x = undefined;", "x = void;"],
//     correct: "x = null;",
//   },
//   {
//     id: 29,
//     question: "Is null strictly equal to undefined (===)?",
//     options: ["No", "Yes", "Only in strict mode", "Only with =="],
//     correct: "No",
//   },
//   {
//     id: 30,
//     question: "null represents:",
//     options: ["Intentional absence of any object value", "An uninitialized variable", "A syntax error", "An empty string"],
//     correct: "Intentional absence of any object value",
//   },

//   // Undefined
//   {
//     id: 31,
//     question: "What is the value of a declared variable that has not been assigned?",
//     options: ["undefined", "null", "0", "''"],
//     correct: "undefined",
//   },
//   {
//     id: 32,
//     question: "What does typeof undefined return?",
//     options: ["'undefined'", "'null'", "'object'", "'void'"],
//     correct: "'undefined'",
//   },
//   {
//     id: 33,
//     question: "What is the result of: let a; console.log(a);",
//     options: ["undefined", "null", "0", "ReferenceError"],
//     correct: "undefined",
//   },
//   {
//     id: 34,
//     question: "A function with no return statement returns:",
//     options: ["undefined", "null", "0", "false"],
//     correct: "undefined",
//   },
//   {
//     id: 35,
//     question: "Accessing a non-existent object property returns:",
//     options: ["undefined", "null", "Error always", "false"],
//     correct: "undefined",
//   },

//   // alert, prompt, console.log
//   {
//     id: 36,
//     question: "Which method displays a message box to the user in the browser?",
//     options: ["alert()", "console.log()", "print()", "display()"],
//     correct: "alert()",
//   },
//   {
//     id: 37,
//     question: "Which method asks the user for text input in a dialog?",
//     options: ["prompt()", "alert()", "input()", "ask()"],
//     correct: "prompt()",
//   },
//   {
//     id: 38,
//     question: "Where does console.log() typically output in a browser?",
//     options: ["Developer console", "Alert box", "The page title", "Server logs only"],
//     correct: "Developer console",
//   },
//   {
//     id: 39,
//     question: "What does console.log('Hi') do?",
//     options: ["Prints 'Hi' to the console", "Shows an alert with 'Hi'", "Stops the script", "Returns 'Hi' to the user"],
//     correct: "Prints 'Hi' to the console",
//   },
//   {
//     id: 40,
//     question: "prompt() returns user input as:",
//     options: ["A string (or null if cancelled)", "Always a number", "Always boolean", "Always undefined"],
//     correct: "A string (or null if cancelled)",
//   },

//   // Comparison Operators
//   {
//     id: 41,
//     question: "Which operator checks both value and type equality?",
//     options: ["===", "==", "=", "!="],
//     correct: "===",
//   },
//   {
//     id: 42,
//     question: "What is 5 == '5' with loose equality?",
//     options: ["true", "false", "undefined", "null"],
//     correct: "true",
//   },
//   {
//     id: 43,
//     question: "Which operator means 'not equal' (loose)?",
//     options: ["!=", "!==", "<>", "not="],
//     correct: "!=",
//   },
//   {
//     id: 44,
//     question: "What is 3 >= 3?",
//     options: ["true", "false", "undefined", "3"],
//     correct: "true",
//   },
//   {
//     id: 45,
//     question: "Which compares if a is less than b?",
//     options: ["a < b", "a > b", "a <= b", "a << b"],
//     correct: "a < b",
//   },

//   // Logical Operators
//   {
//     id: 46,
//     question: "Which operator returns true only if BOTH operands are true?",
//     options: ["&&", "||", "!", "??"],
//     correct: "&&",
//   },
//   {
//     id: 47,
//     question: "Which operator returns true if AT LEAST ONE operand is true?",
//     options: ["||", "&&", "!", "xor"],
//     correct: "||",
//   },
//   {
//     id: 48,
//     question: "What is !true?",
//     options: ["false", "true", "undefined", "0"],
//     correct: "false",
//   },
//   {
//     id: 49,
//     question: "What is true && false?",
//     options: ["false", "true", "undefined", "null"],
//     correct: "false",
//   },
//   {
//     id: 50,
//     question: "What is false || true?",
//     options: ["true", "false", "undefined", "null"],
//     correct: "true",
//   },

//   // Truthy and Falsy Values
//   {
//     id: 51,
//     question: "Which value is falsy in JavaScript?",
//     options: ["0", "1", "'hello'", "[]"],
//     correct: "0",
//   },
//   {
//     id: 52,
//     question: "Which value is falsy?",
//     options: ["'' (empty string)", "'0'", "[]", "{}"],
//     correct: "'' (empty string)",
//   },
//   {
//     id: 53,
//     question: "Is the string 'false' truthy or falsy?",
//     options: ["Truthy", "Falsy", "Neither", "Error"],
//     correct: "Truthy",
//   },
//   {
//     id: 54,
//     question: "Which is a falsy value?",
//     options: ["null", "'text'", "42", "-1"],
//     correct: "null",
//   },
//   {
//     id: 55,
//     question: "In an if statement, which value will NOT run the block?",
//     options: ["undefined", "'yes'", "1", "[1]"],
//     correct: "undefined",
//   },

//   // Variables: var, let, const
//   {
//     id: 56,
//     question: "Which keyword declares a block-scoped variable that can be reassigned?",
//     options: ["let", "var", "const", "static"],
//     correct: "let",
//   },
//   {
//     id: 57,
//     question: "Which keyword declares a constant that cannot be reassigned?",
//     options: ["const", "let", "var", "final"],
//     correct: "const",
//   },
//   {
//     id: 58,
//     question: "Which keyword was the original way to declare variables in JavaScript?",
//     options: ["var", "let", "const", "define"],
//     correct: "var",
//   },
//   {
//     id: 59,
//     question: "What happens if you try to reassign a const variable?",
//     options: ["TypeError", "It works fine", "It becomes var", "It becomes undefined"],
//     correct: "TypeError",
//   },
//   {
//     id: 60,
//     question: "Which declaration is hoisted but remains in Temporal Dead Zone until initialized?",
//     options: ["let", "const only", "Neither let nor const", "function expression only"],
//     correct: "let",
//   },

//   // Scope: Global, Function, Block
//   {
//     id: 61,
//     question: "Variables declared outside any function have which scope?",
//     options: ["Global scope", "Function scope", "Block scope", "Local scope only"],
//     correct: "Global scope",
//   },
//   {
//     id: 62,
//     question: "Variables declared with var inside a function have:",
//     options: ["Function scope", "Block scope only", "Global scope only", "No scope"],
//     correct: "Function scope",
//   },
//   {
//     id: 63,
//     question: "let and const inside { } blocks are limited to:",
//     options: ["Block scope", "Global scope", "Function scope only", "Module scope only"],
//     correct: "Block scope",
//   },
//   {
//     id: 64,
//     question: "Can you access a let variable declared inside an if block from outside that block?",
//     options: ["No", "Yes, always", "Only with var", "Only in strict mode"],
//     correct: "No",
//   },
//   {
//     id: 65,
//     question: "A variable declared with var inside an if block (not inside a function) is accessible:",
//     options: ["Outside the if block", "Only inside the if block", "Never in the script", "Only in strict mode"],
//     correct: "Outside the if block",
//   },

//   // Functions: Parameters, Arguments, Return
//   {
//     id: 66,
//     question: "What are the named inputs in a function definition called?",
//     options: ["Parameters", "Arguments", "Returns", "Variables"],
//     correct: "Parameters",
//   },
//   {
//     id: 67,
//     question: "What are the actual values passed when calling a function called?",
//     options: ["Arguments", "Parameters", "Returns", "Properties"],
//     correct: "Arguments",
//   },
//   {
//     id: 68,
//     question: "Which keyword sends a value back from a function?",
//     options: ["return", "break", "exit", "output"],
//     correct: "return",
//   },
//   {
//     id: 69,
//     question: "function add(a, b) { return a + b; } — add(2, 3) returns:",
//     options: ["5", "23", "undefined", "NaN"],
//     correct: "5",
//   },
//   {
//     id: 70,
//     question: "How do you call a function named greet?",
//     options: ["greet()", "call greet", "greet[]", "function.greet"],
//     correct: "greet()",
//   },

//   // Function Expressions, Arrow Functions, Default Parameters, Callbacks
//   {
//     id: 71,
//     question: "const fn = function() {}; is an example of:",
//     options: ["Function expression", "Function declaration", "Arrow function", "Callback only"],
//     correct: "Function expression",
//   },
//   {
//     id: 72,
//     question: "Which syntax defines an arrow function?",
//     options: ["const fn = () => {};", "function fn => {}", "arrow fn() {}", "fn <- ()"],
//     correct: "const fn = () => {};",
//   },
//   {
//     id: 73,
//     question: "Arrow functions do NOT have their own:",
//     options: ["this binding (lexical this)", "ability to be called", "parameters", "return capability"],
//     correct: "this binding (lexical this)",
//   },
//   {
//     id: 74,
//     question: "function greet(name = 'Guest') {} — greet() uses name:",
//     options: ["'Guest'", "undefined", "null", "Error"],
//     correct: "'Guest'",
//   },
//   {
//     id: 75,
//     question: "A function passed as an argument to another function is called a:",
//     options: ["Callback function", "Return function", "Global function", "Block function"],
//     correct: "Callback function",
//   },
//   {
//     id: 76,
//     question: "[1,2,3].forEach(x => console.log(x)) — forEach is often used with:",
//     options: ["A callback function", "Only return values", "No arguments", "break statements"],
//     correct: "A callback function",
//   },
//   {
//     id: 77,
//     question: "Function declaration: function foo() {}. Hoisting means foo can be called:",
//     options: ["Before its line in the same scope", "Only after export", "Never", "Only in classes"],
//     correct: "Before its line in the same scope",
//   },
//   {
//     id: 78,
//     question: "const double = n => n * 2; double(4) returns:",
//     options: ["8", "24", "undefined", "NaN"],
//     correct: "8",
//   },

//   // Arrays: accessing, modifying, methods, length
//   {
//     id: 79,
//     question: "How do you access the third element of arr?",
//     options: ["arr[2]", "arr[3]", "arr(2)", "arr.third"],
//     correct: "arr[2]",
//   },
//   {
//     id: 80,
//     question: "How do you change the first element of arr to 10?",
//     options: ["arr[0] = 10;", "arr[1] = 10;", "arr.set(0, 10) only", "arr.first = 10 only"],
//     correct: "arr[0] = 10;",
//   },
//   {
//     id: 81,
//     question: "Which creates an array of numbers 1, 2, 3?",
//     options: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "<1, 2, 3>"],
//     correct: "[1, 2, 3]",
//   },
//   {
//     id: 82,
//     question: "push() adds elements to the:",
//     options: ["End of the array", "Beginning of the array", "Middle only", "Removes elements"],
//     correct: "End of the array",
//   },
//   {
//     id: 83,
//     question: "pop() removes and returns the:",
//     options: ["Last element", "First element", "All elements", "Second element only"],
//     correct: "Last element",
//   },
//   {
//     id: 84,
//     question: "shift() removes the:",
//     options: ["First element", "Last element", "Middle element", "Nothing"],
//     correct: "First element",
//   },
//   {
//     id: 85,
//     question: "unshift() adds elements to the:",
//     options: ["Beginning of the array", "End of the array", "Random position", "Outside the array"],
//     correct: "Beginning of the array",
//   },
//   {
//     id: 86,
//     question: "const arr = [10, 20, 30]; arr.length is:",
//     options: ["3", "2", "30", "0"],
//     correct: "3",
//   },
//   {
//     id: 87,
//     question: "After arr.push(4) on [1, 2, 3], arr is:",
//     options: ["[1, 2, 3, 4]", "[4, 1, 2, 3]", "[1, 2, 3]", "[1, 2, 4]"],
//     correct: "[1, 2, 3, 4]",
//   },
//   {
//     id: 88,
//     question: "After arr.pop() on [1, 2, 3], arr becomes:",
//     options: ["[1, 2]", "[2, 3]", "[1, 2, 3]", "[]"],
//     correct: "[1, 2]",
//   },

//   // Looping and forEach
//   {
//     id: 89,
//     question: "Which loop runs a block while i is less than 5?",
//     options: ["for (let i = 0; i < 5; i++)", "while (i > 5)", "do only once", "foreach i in 5"],
//     correct: "for (let i = 0; i < 5; i++)",
//   },
//   {
//     id: 90,
//     question: "A for loop typically uses which three parts?",
//     options: ["Initialization; condition; increment", "Only condition", "Only return", "import, export, default"],
//     correct: "Initialization; condition; increment",
//   },
//   {
//     id: 91,
//     question: "forEach() is a method on:",
//     options: ["Arrays", "Strings only", "Numbers only", "Booleans"],
//     correct: "Arrays",
//   },
//   {
//     id: 92,
//     question: "What does forEach provide as the first argument to its callback?",
//     options: ["Current element", "Array length only", "Index only", "Nothing"],
//     correct: "Current element",
//   },
//   {
//     id: 93,
//     question: "[1, 2, 3].forEach(n => sum += n) — forEach:",
//     options: ["Runs the callback once per element", "Returns a new array", "Stops at first element", "Sorts the array"],
//     correct: "Runs the callback once per element",
//   },
//   {
//     id: 94,
//     question: "Which loop might run at least once even if the condition is false initially?",
//     options: ["do...while", "for only", "forEach only", "None"],
//     correct: "do...while",
//   },
//   {
//     id: 95,
//     question: "To loop over array indices 0 to arr.length - 1, you often use:",
//     options: ["for (let i = 0; i < arr.length; i++)", "for (let i = 1; i <= arr.length; i++) only", "while false", "arr.for"],
//     correct: "for (let i = 0; i < arr.length; i++)",
//   },

//   // Mixed review
//   {
//     id: 96,
//     question: "What is the result of typeof NaN?",
//     options: ["'number'", "'NaN'", "'undefined'", "'object'"],
//     correct: "'number'",
//   },
//   {
//     id: 97,
//     question: "Which combines strings: firstName and lastName?",
//     options: ["firstName + ' ' + lastName", "firstName . lastName", "concat only, + never works", "merge(firstName)"],
//     correct: "firstName + ' ' + lastName",
//   },
//   {
//     id: 98,
//     question: "if (!user) checks whether user is:",
//     options: ["Falsy", "Truthy only", "Always true", "A number"],
//     correct: "Falsy",
//   },
//   {
//     id: 99,
//     question: "const nums = [1, 2]; nums.unshift(0); nums is now:",
//     options: ["[0, 1, 2]", "[1, 2, 0]", "[1, 2]", "[2, 1, 0]"],
//     correct: "[0, 1, 2]",
//   },
//   {
//     id: 100,
//     question: "Which best describes JavaScript?",
//     options: [
//       "A versatile language for web interactivity, with dynamic typing and functions as first-class values",
//       "A styling language for layout",
//       "A database query language only",
//       "A replacement for HTML",
//     ],
//     correct: "A versatile language for web interactivity, with dynamic typing and functions as first-class values",
//   },
// ];

const quizQuestions = [
  // Variables
  {
    id: 1,
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    options: ["var", "let", "const", "define"],
    correct: "let",
  },
  {
    id: 2,
    question: "Which keyword is used to declare a constant that cannot be reassigned?",
    options: ["let", "const", "var", "static"],
    correct: "const",
  },
  {
    id: 3,
    question: "Which keyword was used to declare variables before ES6?",
    options: ["const", "let", "var", "new"],
    correct: "var",
  },
  {
    id: 4,
    question: "Which of the following is a valid JavaScript variable name?",
    options: ["2name", "user-name", "userName", "let"],
    correct: "userName",
  },

  // Data Types
  {
    id: 5,
    question: "Which of the following is NOT a JavaScript primitive data type?",
    options: ["String", "Object", "Boolean", "Number"],
    correct: "Object",
  },
  {
    id: 6,
    question: "Which primitive data type is used to represent text?",
    options: ["Boolean", "Number", "String", "Null"],
    correct: "String",
  },
  {
    id: 7,
    question: "Which primitive data type represents true or false values?",
    options: ["Boolean", "Number", "String", "Undefined"],
    correct: "Boolean",
  },
  {
    id: 8,
    question: "What is the data type of the value 25?",
    options: ["String", "Boolean", "Number", "Object"],
    correct: "Number",
  },
  {
    id: 9,
    question: "What is the value of a variable that has been declared but not assigned?",
    options: ["null", "0", "undefined", "false"],
    correct: "undefined",
  },
  {
    id: 10,
    question: "Which primitive value represents the intentional absence of any value?",
    options: ["undefined", "false", "null", "0"],
    correct: "null",
  },
  {
    id: 11,
    question: "Which primitive data type is used to represent very large integers?",
    options: ["Number", "BigInt", "Boolean", "Symbol"],
    correct: "BigInt",
  },
  {
    id: 12,
    question: "Which primitive data type is commonly used to create unique identifiers?",
    options: ["String", "BigInt", "Symbol", "Object"],
    correct: "Symbol",
  },

  // Scope
  {
    id: 13,
    question: "A variable declared outside any function or block has what type of scope?",
    options: ["Block Scope", "Function Scope", "Global Scope", "Local Scope"],
    correct: "Global Scope",
  },
  {
    id: 14,
    question: "Which keyword creates a block-scoped variable?",
    options: ["var", "let", "const", "Both let and const"],
    correct: "Both let and const",
  },
  {
    id: 15,
    question: "Variables declared with 'var' inside a function are available where?",
    options: ["Only inside the block", "Throughout the function", "Globally", "Nowhere"],
    correct: "Throughout the function",
  },
  {
    id: 16,
    question: "What type of scope does a variable declared inside a function have?",
    options: ["Global Scope", "Function Scope", "Block Scope", "Module Scope"],
    correct: "Function Scope",
  },
  {
    id: 17,
    question: "A variable declared inside an if statement using 'let' can be accessed where?",
    options: ["Anywhere in the program", "Only inside that block", "Inside every function", "Globally"],
    correct: "Only inside that block",
  },
  {
    id: 18,
    question: "Which keyword ignores block scope?",
    options: ["let", "const", "var", "class"],
    correct: "var",
  },

  // Mixed Questions
  {
    id: 19,
    question: "Which of the following is a primitive data type?",
    options: ["Array", "Object", "Boolean", "Function"],
    correct: "Boolean",
  },
  {
    id: 20,
    question: "Which variable declaration keyword can be reassigned but is block-scoped?",
    options: ["const", "var", "let", "static"],
    correct: "let",
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
