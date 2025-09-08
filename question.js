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
