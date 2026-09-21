const quizQuestions = [
  // =========================
  // VARIABLES
  // =========================
  {
    id: 1,
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["var", "let", "const", "define"],
    correct: "let",
  },
  {
    id: 2,
    question: "Which keyword declares a block-scoped variable that cannot be reassigned?",
    options: ["let", "const", "var", "static"],
    correct: "const",
  },
  {
    id: 3,
    question: "Which keyword was commonly used to declare variables before ES6?",
    options: ["var", "let", "const", "value"],
    correct: "var",
  },
  {
    id: 4,
    question: "What is the value of an uninitialized JavaScript variable?",
    options: ["null", "undefined", "false", "0"],
    correct: "undefined",
  },
  {
    id: 5,
    question: "Which is a valid JavaScript variable name?",
    options: ["2student", "student-name", "studentName", "student name"],
    correct: "studentName",
  },

  // =========================
  // VARIABLE SCOPE
  // =========================
  {
    id: 6,
    question: "What is the area where a variable can be accessed called?",
    options: ["Range", "Scope", "Environment", "Block name"],
    correct: "Scope",
  },
  {
    id: 7,
    question: "A variable declared outside every function has which scope?",
    options: ["Local scope", "Block scope", "Global scope", "Function scope"],
    correct: "Global scope",
  },
  {
    id: 8,
    question: "A variable declared inside a function normally has which scope?",
    options: ["Global scope", "Function scope", "Browser scope", "Public scope"],
    correct: "Function scope",
  },
  {
    id: 9,
    question: "Which keywords are block-scoped?",
    options: ["var only", "let and const", "var and let", "function and var"],
    correct: "let and const",
  },
  {
    id: 10,
    question: "Which keyword is function-scoped instead of block-scoped?",
    options: ["let", "const", "var", "static"],
    correct: "var",
  },
  {
    id: 11,
    question: "Can a global variable normally be accessed inside a function?",
    options: ["Yes", "No", "Only inside a loop", "Only when declared with const"],
    correct: "Yes",
  },
  {
    id: 12,
    question: "Can a local (function-scoped) variable normally be accessed outside its function?",
    options: ["Yes", "No", "Only when it contains a number", "Only when declared with let"],
    correct: "No",
  },
  {
    id: 13,
    question: "A variable declared with let inside an if { } block has which scope?",
    options: ["Global scope", "Function scope", "Block scope", "Module scope only"],
    correct: "Block scope",
  },

  // =========================
  // PRIMITIVE DATA TYPES
  // =========================
  {
    id: 14,
    question: "Which of these is a JavaScript primitive data type?",
    options: ["Array", "Object", "String", "Function"],
    correct: "String",
  },
  {
    id: 15,
    question: "Which primitive data type represents text?",
    options: ["Number", "String", "Boolean", "BigInt"],
    correct: "String",
  },
  {
    id: 16,
    question: "What is the data type of `25` in JavaScript?",
    options: ["String", "Number", "Boolean", "BigInt"],
    correct: "Number",
  },
  {
    id: 17,
    question: "What is the data type of `'25'` in JavaScript?",
    options: ["String", "Number", "Boolean", "Undefined"],
    correct: "String",
  },
  {
    id: 18,
    question: "Which data type has only true and false values?",
    options: ["String", "Number", "Boolean", "Undefined"],
    correct: "Boolean",
  },
  {
    id: 19,
    question: "What is the result of `typeof 'Hello'`?",
    options: ["text", "String", "string", "character"],
    correct: "string",
  },
  {
    id: 20,
    question: "Which of these is NOT a primitive data type?",
    options: ["String", "Boolean", "Number", "Array"],
    correct: "Array",
  },

  // =========================
  // FOR LOOP
  // =========================
  {
    id: 21,
    question: "Which part of a for loop runs before the first iteration?",
    options: ["Condition", "Initialization", "Increment", "Body"],
    correct: "Initialization",
  },
  {
    id: 22,
    question: "In `for (let i = 0; i < 5; i++)`, how many times does the loop body run?",
    options: ["4", "5", "6", "0"],
    correct: "5",
  },
  {
    id: 23,
    question: "Which is the correct structure of a for loop?",
    options: [
      "for (condition; init; increment)",
      "for (initialization; condition; increment)",
      "for (increment; condition; initialization)",
      "for (condition; increment)",
    ],
    correct: "for (initialization; condition; increment)",
  },
  {
    id: 24,
    question: "What does the increment expression in a for loop typically do?",
    options: [
      "Ends the program",
      "Updates the loop counter",
      "Declares a new function",
      "Skips the next question",
    ],
    correct: "Updates the loop counter",
  },
  {
    id: 25,
    question: "What happens when a for loop's condition becomes false?",
    options: [
      "The loop continues forever",
      "The loop stops",
      "JavaScript throws an error",
      "The counter resets to 0 automatically",
    ],
    correct: "The loop stops",
  },

  // =========================
  // forEach()
  // =========================
  {
    id: 26,
    question: "What does array.forEach() do?",
    options: [
      "Runs a callback once for each array element",
      "Removes the last element",
      "Creates a new filtered array only",
      "Converts the array to a string",
    ],
    correct: "Runs a callback once for each array element",
  },
  {
    id: 27,
    question: "What is the first parameter of the forEach callback usually?",
    options: ["Index", "Current element", "Array length", "Previous element"],
    correct: "Current element",
  },
  {
    id: 28,
    question: "Does forEach() return a new array by default?",
    options: ["Yes, always", "No, it returns undefined", "Yes, only for numbers", "Only when using map"],
    correct: "No, it returns undefined",
  },
  {
    id: 29,
    question: "Which of these is valid forEach usage?",
    options: [
      "arr.forEach(item => console.log(item))",
      "forEach(arr)",
      "arr.forEach()",
      "for each (item in arr)",
    ],
    correct: "arr.forEach(item => console.log(item))",
  },
  {
    id: 30,
    question: "forEach() is mainly used with which data structure?",
    options: ["Objects only", "Arrays", "Strings only", "Numbers only"],
    correct: "Arrays",
  },

  // =========================
  // push()
  // =========================
  {
    id: 31,
    question: "What does push() do to an array?",
    options: [
      "Adds an element to the beginning",
      "Adds an element to the end",
      "Removes the last element",
      "Removes the first element",
    ],
    correct: "Adds an element to the end",
  },
  {
    id: 32,
    question: "After `let nums = [1, 2]; nums.push(3);`, what is nums?",
    options: ["[1, 2]", "[3, 1, 2]", "[1, 2, 3]", "[1, 3, 2]"],
    correct: "[1, 2, 3]",
  },
  {
    id: 33,
    question: "What does push() return?",
    options: [
      "The removed element",
      "The new length of the array",
      "true or false",
      "A copy of the array",
    ],
    correct: "The new length of the array",
  },
  {
    id: 34,
    question: "Can push() add more than one element at once?",
    options: ["No", "Yes", "Only numbers", "Only strings"],
    correct: "Yes",
  },
  {
    id: 35,
    question: "Which method is the opposite of push() for removing from the end?",
    options: ["shift()", "unshift()", "pop()", "includes()"],
    correct: "pop()",
  },

  // =========================
  // pop()
  // =========================
  {
    id: 36,
    question: "What does pop() do to an array?",
    options: [
      "Removes the first element",
      "Removes the last element",
      "Adds an element to the end",
      "Checks if a value exists",
    ],
    correct: "Removes the last element",
  },
  {
    id: 37,
    question: "After `let nums = [1, 2, 3]; nums.pop();`, what is nums?",
    options: ["[1, 2, 3]", "[2, 3]", "[1, 2]", "[1, 3]"],
    correct: "[1, 2]",
  },
  {
    id: 38,
    question: "What does pop() return?",
    options: [
      "The new array length",
      "The removed element",
      "true",
      "undefined always",
    ],
    correct: "The removed element",
  },
  {
    id: 39,
    question: "Calling pop() on an empty array returns:",
    options: ["0", "null", "undefined", "false"],
    correct: "undefined",
  },
  {
    id: 40,
    question: "Does pop() change the original array?",
    options: ["No", "Yes", "Only if it contains strings", "Only in strict mode"],
    correct: "Yes",
  },

  // =========================
  // shift()
  // =========================
  {
    id: 41,
    question: "What does shift() do to an array?",
    options: [
      "Removes the last element",
      "Removes the first element",
      "Adds an element to the beginning",
      "Adds an element to the end",
    ],
    correct: "Removes the first element",
  },
  {
    id: 42,
    question: "After `let nums = [1, 2, 3]; nums.shift();`, what is nums?",
    options: ["[1, 2]", "[2, 3]", "[1, 3]", "[1, 2, 3]"],
    correct: "[2, 3]",
  },
  {
    id: 43,
    question: "What does shift() return?",
    options: [
      "The removed first element",
      "The new length",
      "The last element",
      "true or false",
    ],
    correct: "The removed first element",
  },
  {
    id: 44,
    question: "Which method is the opposite of shift() for adding at the start?",
    options: ["push()", "pop()", "unshift()", "includes()"],
    correct: "unshift()",
  },

  // =========================
  // unshift()
  // =========================
  {
    id: 45,
    question: "What does unshift() do to an array?",
    options: [
      "Adds an element to the end",
      "Adds an element to the beginning",
      "Removes the first element",
      "Removes the last element",
    ],
    correct: "Adds an element to the beginning",
  },
  {
    id: 46,
    question: "After `let nums = [1, 2]; nums.unshift(0);`, what is nums?",
    options: ["[1, 2, 0]", "[0, 1, 2]", "[1, 0, 2]", "[0, 2]"],
    correct: "[0, 1, 2]",
  },
  {
    id: 47,
    question: "What does unshift() return?",
    options: [
      "The removed element",
      "The new length of the array",
      "A boolean",
      "A new array copy",
    ],
    correct: "The new length of the array",
  },

  // =========================
  // includes()
  // =========================
  {
    id: 48,
    question: "What does includes() check?",
    options: [
      "Whether an array contains a value",
      "The length of an array",
      "Whether an array is empty",
      "The type of each element",
    ],
    correct: "Whether an array contains a value",
  },
  {
    id: 49,
    question: "What does `[1, 2, 3].includes(2)` return?",
    options: ["2", "true", "false", "1"],
    correct: "true",
  },
  {
    id: 50,
    question: "What does `['a', 'b'].includes('c')` return?",
    options: ["'c'", "true", "false", "undefined"],
    correct: "false",
  },
];
