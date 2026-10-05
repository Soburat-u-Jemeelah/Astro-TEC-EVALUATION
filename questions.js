const quizQuestions = [
  // ==========================================
  // SECTION A: JavaScript Basics (1–10)
  // ==========================================
  {
    id: 1,
    question: "What is JavaScript?",
    options: [
      "A database",
      "A programming language",
      "A markup language",
      "A styling language"
    ],
    correct: "A programming language"
  },
  {
    id: 2,
    question: "Which HTML tag is used to add JavaScript to a webpage?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: "<script>"
  },
  {
    id: 3,
    question: "Which method is commonly used to display information in the browser console?",
    options: ["print()", "console.log()", "display()", "show()"],
    correct: "console.log()"
  },
  {
    id: 4,
    question: "Which symbol is used for a single-line comment in JavaScript?",
    options: ["//", "<!--", "##", "**"],
    correct: "//"
  },
  {
    id: 5,
    question: "Which file extension is normally used for JavaScript files?",
    options: [".html", ".css", ".js", ".java"],
    correct: ".js"
  },
  {
    id: 6,
    question: "Which attribute is used to connect an external JavaScript file?",
    options: ["href", "src", "link", "file"],
    correct: "src"
  },
  {
    id: 7,
    question: "JavaScript is mainly used to make webpages:",
    options: ["Interactive", "Smaller", "Printed", "Static"],
    correct: "Interactive"
  },
  {
    id: 8,
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No", "Only in HTML", "Only in CSS"],
    correct: "Yes"
  },
  {
    id: 9,
    question: "Which is a valid JavaScript statement?",
    options: [
      'let name = "John";',
      "variable name = John;",
      'name let "John";',
      'let = name "John";'
    ],
    correct: 'let name = "John";'
  },
  {
    id: 10,
    question: "Which of the following is an external JavaScript file connection?",
    options: [
      '<script href="app.js"></script>',
      '<script src="app.js"></script>',
      '<js src="app.js">',
      '<javascript file="app.js">'
    ],
    correct: '<script src="app.js"></script>'
  },

  // ==========================================
  // SECTION B: Variables (11–20)
  // ==========================================
  {
    id: 11,
    question: "Which keyword is used to declare a variable that can be reassigned?",
    options: ["let", "fixed", "constant", "define"],
    correct: "let"
  },
  {
    id: 12,
    question: "Which keyword is used to declare a constant?",
    options: ["let", "const", "constant", "static"],
    correct: "const"
  },
  {
    id: 13,
    question: "Which of the following correctly declares a variable?",
    options: [
      "let age = 20;",
      "age let = 20;",
      "variable age = 20;",
      "let = age 20;"
    ],
    correct: "let age = 20;"
  },
  {
    id: 14,
    question: "What will this code produce?\n\nlet age = 20;\nage = 25;",
    options: ["An error", "20", "25", "undefined"],
    correct: "25"
  },
  {
    id: 15,
    question: "What happens when you try to reassign a const variable?",
    options: [
      "Its value changes",
      "JavaScript produces an error",
      "It becomes let",
      "Nothing happens"
    ],
    correct: "JavaScript produces an error"
  },
  {
    id: 16,
    question: "Which is NOT a valid variable name?",
    options: ["firstName", "user_age", "2name", "studentName"],
    correct: "2name"
  },
  {
    id: 17,
    question: "Which variable naming style is commonly used for multiple words in JavaScript?",
    options: ["first-name", "first name", "firstName", "First Name"],
    correct: "firstName"
  },
  {
    id: 18,
    question: "What is the purpose of a variable?",
    options: [
      "To store data",
      "To style HTML",
      "To create CSS",
      "To open a browser"
    ],
    correct: "To store data"
  },
  {
    id: 19,
    question: "What does let allow you to do?",
    options: [
      "Reassign the variable",
      "Never change the variable",
      "Create HTML",
      "Create CSS"
    ],
    correct: "Reassign the variable"
  },
  {
    id: 20,
    question: "Which declaration creates a constant?",
    options: [
      'let country = "Nigeria";',
      'var country = "Nigeria";',
      'const country = "Nigeria";',
      'constant country = "Nigeria";'
    ],
    correct: 'const country = "Nigeria";'
  },

  // ==========================================
  // SECTION C: Data Types (21–30)
  // ==========================================
  {
    id: 21,
    question: 'Which data type is "Hello"?',
    options: ["Number", "String", "Boolean", "Object"],
    correct: "String"
  },
  {
    id: 22,
    question: "Which data type is 25?",
    options: ["String", "Boolean", "Number", "Character"],
    correct: "Number"
  },
  {
    id: 23,
    question: "Which data type can have the value true or false?",
    options: ["String", "Number", "Boolean", "Array"],
    correct: "Boolean"
  },
  {
    id: 24,
    question: 'What is the data type of "25"?',
    options: ["Number", "String", "Boolean", "Null"],
    correct: "String"
  },
  {
    id: 25,
    question: 'What is the difference between 25 and "25"?',
    options: [
      "They are exactly the same",
      "The first is a number and the second is a string",
      "The first is a string and the second is a number",
      "Both are Boolean"
    ],
    correct: "The first is a number and the second is a string"
  },
  {
    id: 26,
    question: "Which operator is used to check the type of a value?",
    options: ["type", "typeof", "checkType", "datatype"],
    correct: "typeof"
  },
  {
    id: 27,
    question: 'What does typeof "Hello" return?',
    options: ["number", "boolean", "string", "text"],
    correct: "string"
  },
  {
    id: 28,
    question: "What does typeof 100 return?",
    options: ["string", "number", "integer", "boolean"],
    correct: "number"
  },
  {
    id: 29,
    question: "Which value is a Boolean?",
    options: ['"true"', "true", '"false"', "1"],
    correct: "true"
  },
  {
    id: 30,
    question: "Which value represents an intentional absence of a value?",
    options: ["null", "empty", "none", "blank"],
    correct: "null"
  },

  // ==========================================
  // SECTION D: Operators (31–40)
  // ==========================================
  {
    id: 31,
    question: "Which operator is used for addition?",
    options: ["+", "*", "/", "%"],
    correct: "+"
  },
  {
    id: 32,
    question: "Which operator is used for multiplication?",
    options: ["+", "-", "*", "/"],
    correct: "*"
  },
  {
    id: 33,
    question: "Which operator is used for division?",
    options: ["+", "/", "%", "*"],
    correct: "/"
  },
  {
    id: 34,
    question: "What does % return?",
    options: [
      "The percentage",
      "The remainder",
      "The quotient",
      "The total"
    ],
    correct: "The remainder"
  },
  {
    id: 35,
    question: "What is the result of 10 + 5?",
    options: ["15", "50", "5", "105"],
    correct: "15"
  },
  {
    id: 36,
    question: "What is the result of 10 % 3?",
    options: ["3", "1", "0", "10"],
    correct: "1"
  },
  {
    id: 37,
    question: "Which operator checks equality without performing type conversion?",
    options: ["=", "==", "===", "!="],
    correct: "==="
  },
  {
    id: 38,
    question: "What does = mean in JavaScript?",
    options: [
      "Equal comparison",
      "Assignment",
      "Not equal",
      "Greater than"
    ],
    correct: "Assignment"
  },
  {
    id: 39,
    question: "What does > mean?",
    options: ["Less than", "Greater than", "Equal to", "Not equal"],
    correct: "Greater than"
  },
  {
    id: 40,
    question: "What does && represent?",
    options: ["OR", "NOT", "AND", "Equal"],
    correct: "AND"
  },

  // ==========================================
  // SECTION E: Strings and Type Conversion (41–50)
  // ==========================================
  {
    id: 41,
    question: "Which method converts a string to uppercase?",
    options: ["toUpperCase()", "upper()", "uppercase()", "makeUpper()"],
    correct: "toUpperCase()"
  },
  {
    id: 42,
    question: "Which method converts a string to lowercase?",
    options: ["lower()", "toLowerCase()", "lowerCase()", "makeLower()"],
    correct: "toLowerCase()"
  },
  {
    id: 43,
    question: 'What does "Hello".length return?',
    options: ["4", "5", "6", "10"],
    correct: "5"
  },
  {
    id: 44,
    question: "Which symbol is used for template literals?",
    options: ["' '", '" "', "` `", "( )"],
    correct: "` `"
  },
  {
    id: 45,
    question: "Which syntax is used to insert a variable inside a template literal?",
    options: ["$(name)", "${name}", "#{name}", "@{name}"],
    correct: "${name}"
  },
  {
    id: 46,
    question: 'What does Number("20") do?',
    options: [
      "Converts the number to a string",
      "Converts the string to a number",
      "Converts it to Boolean",
      "Deletes the value"
    ],
    correct: "Converts the string to a number"
  },
  {
    id: 47,
    question: "What does String(50) return?",
    options: [
      "50 as a number",
      '"50" as a string',
      "true",
      "null"
    ],
    correct: '"50" as a string'
  },
  {
    id: 48,
    question: 'What does parseInt("25") generally return?',
    options: ['"25"', "25", "true", "null"],
    correct: "25"
  },
  {
    id: 49,
    question: "What will this produce?\n\nlet name = \"John\";\nconsole.log(`Hello ${name}`);",
    options: ["Hello name", "Hello John", "${name}", "John Hello"],
    correct: "Hello John"
  },
  {
    id: 50,
    question: "What does the + operator do when used with two strings?",
    options: [
      "Divides them",
      "Multiplies them",
      "Concatenates them",
      "Removes them"
    ],
    correct: "Concatenates them"
  },

  // ==========================================
  // SECTION F: Conditional Statements (51–60)
  // ==========================================
  {
    id: 51,
    question: "Which statement is used to make a decision based on a condition?",
    options: ["if", "for", "function", "return"],
    correct: "if"
  },
  {
    id: 52,
    question: "Which keyword is used when the if condition is false?",
    options: ["otherwise", "else", "then", "default"],
    correct: "else"
  },
  {
    id: 53,
    question: "Which keyword allows you to check another condition?",
    options: ["else if", "another", "check", "next"],
    correct: "else if"
  },
  {
    id: 54,
    question: "What will this code print?\n\nlet age = 20;\n\nif (age >= 18) {\n    console.log(\"Adult\");\n}",
    options: ["Child", "Adult", "20", "Nothing"],
    correct: "Adult"
  },
  {
    id: 55,
    question: "What will this code print?\n\nlet age = 15;\n\nif (age >= 18) {\n    console.log(\"Adult\");\n} else {\n    console.log(\"Child\");\n}",
    options: ["Adult", "15", "Child", "Error"],
    correct: "Child"
  },
  {
    id: 56,
    question: 'Which symbol means "greater than or equal to"?',
    options: ["=>", ">=", "=<", "=="],
    correct: ">="
  },
  {
    id: 57,
    question: 'Which symbol means "less than or equal to"?',
    options: ["<=", "=<", "<<", "=="],
    correct: "<="
  },
  {
    id: 58,
    question: "What does ! generally mean when used as a logical operator?",
    options: ["AND", "OR", "NOT", "Equal"],
    correct: "NOT"
  },
  {
    id: 59,
    question: "Which condition checks if age is exactly 18?",
    options: ["age = 18", "age == 18", "age === 18", "Both B and C"],
    correct: "Both B and C"
  },
  {
    id: 60,
    question: "What is the purpose of an else block?",
    options: [
      "To run code when the if condition is false",
      "To declare a variable",
      "To create a function",
      "To select an HTML element"
    ],
    correct: "To run code when the if condition is false"
  },

  // ==========================================
  // SECTION G: Functions (61–70)
  // ==========================================
  {
    id: 61,
    question: "What is a function?",
    options: [
      "A reusable block of code",
      "A CSS property",
      "An HTML tag",
      "A database"
    ],
    correct: "A reusable block of code"
  },
  {
    id: 62,
    question: "Which keyword is used to declare a normal function?",
    options: ["function", "func", "method", "define"],
    correct: "function"
  },
  {
    id: 63,
    question: "How do you call a function named greet?",
    options: ["call greet", "greet()", "function greet", "run.greet"],
    correct: "greet()"
  },
  {
    id: 64,
    question: "What is a parameter?",
    options: [
      "A value passed when calling a function",
      "A variable listed in a function definition",
      "A CSS property",
      "An HTML element"
    ],
    correct: "A variable listed in a function definition"
  },
  {
    id: 65,
    question: "What is an argument?",
    options: [
      "A value passed to a function",
      "A function name",
      "A variable declaration",
      "An HTML attribute"
    ],
    correct: "A value passed to a function"
  },
  {
    id: 66,
    question: "What does return do in a function?",
    options: [
      "Stops the browser",
      "Sends a value back from the function",
      "Creates an event",
      "Creates an HTML element"
    ],
    correct: "Sends a value back from the function"
  },
  {
    id: 67,
    question: "What will this function return?\n\nfunction add(a, b) {\n    return a + b;\n}",
    options: [
      "Nothing",
      "The sum of a and b",
      "The difference",
      "The product"
    ],
    correct: "The sum of a and b"
  },
  {
    id: 68,
    question: "How do you call the add function with 5 and 3?",
    options: ["add(5, 3)", "add[5, 3]", "function add(5, 3)", "call add(5, 3)"],
    correct: "add(5, 3)"
  },
  {
    id: 69,
    question: 'What will greet() do if it contains console.log("Hello")?',
    options: [
      "Display Hello in the console",
      "Display Hello in CSS",
      "Delete Hello",
      "Return an error"
    ],
    correct: "Display Hello in the console"
  },
  {
    id: 70,
    question: "Why are functions useful?",
    options: [
      "They allow code to be reused",
      "They only work with HTML",
      "They replace CSS",
      "They prevent variables from working"
    ],
    correct: "They allow code to be reused"
  },

  // ==========================================
  // SECTION H: Arrays and Objects (71–80)
  // ==========================================
  {
    id: 71,
    question: "What is an array?",
    options: [
      "A collection of values",
      "A CSS selector",
      "A function",
      "An event"
    ],
    correct: "A collection of values"
  },
  {
    id: 72,
    question: "Which is a valid array?",
    options: [
      'let fruits = ["Apple", "Mango", "Orange"];',
      'let fruits = {"Apple", "Mango"};',
      "let fruits = (Apple, Mango);",
      "array fruits = Apple;"
    ],
    correct: 'let fruits = ["Apple", "Mango", "Orange"];'
  },
  {
    id: 73,
    question: "What is the index of the first item in a JavaScript array?",
    options: ["0", "1", "-1", "2"],
    correct: "0"
  },
  {
    id: 74,
    question: 'What will fruits[0] return?\n\nlet fruits = ["Apple", "Mango", "Orange"];',
    options: ["Mango", "Orange", "Apple", "0"],
    correct: "Apple"
  },
  {
    id: 75,
    question: "Which property gives the number of items in an array?",
    options: ["size", "count", "length", "items"],
    correct: "length"
  },
  {
    id: 76,
    question: "Which method adds an item to the end of an array?",
    options: ["add()", "push()", "insert()", "appendItem()"],
    correct: "push()"
  },
  {
    id: 77,
    question: "What is an object in JavaScript?",
    options: [
      "A collection of related data using key-value pairs",
      "Only a number",
      "Only a string",
      "An HTML tag"
    ],
    correct: "A collection of related data using key-value pairs"
  },
  {
    id: 78,
    question: "Which is a valid JavaScript object?",
    options: [
      'let student = {name: "John", age: 20};',
      'let student = [name: "John"];',
      'object student = "John";',
      'let student = (name = "John");'
    ],
    correct: 'let student = {name: "John", age: 20};'
  },
  {
    id: 79,
    question: "How can you access the name property of student?",
    options: ["student->name", "student.name", "student/name", "student[name()]"],
    correct: "student.name"
  },
  {
    id: 80,
    question: 'In {name: "John"}, what is name?',
    options: ["Value", "Key/property", "Function", "Array"],
    correct: "Key/property"
  },

  // ==========================================
  // SECTION I: DOM Manipulation (81–90)
  // ==========================================
  {
    id: 81,
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Document Online Model",
      "Digital Object Management"
    ],
    correct: "Document Object Model"
  },
  {
    id: 82,
    question: "What does the DOM allow JavaScript to do?",
    options: [
      "Interact with HTML elements",
      "Create CSS files only",
      "Connect to Wi-Fi",
      "Replace the browser"
    ],
    correct: "Interact with HTML elements"
  },
  {
    id: 83,
    question: "Which method selects an element using a CSS selector?",
    options: [
      "querySelector()",
      "selectElement()",
      "getCSS()",
      "findHTML()"
    ],
    correct: "querySelector()"
  },
  {
    id: 84,
    question: "What does document represent?",
    options: [
      "The HTML document/page",
      "The browser console",
      "A JavaScript variable",
      "A CSS file"
    ],
    correct: "The HTML document/page"
  },
  {
    id: 85,
    question: "Which code selects an element with the ID title?",
    options: [
      'document.querySelector("#title")',
      'document.querySelector(".title")',
      'document.querySelector("title")',
      'document.getElement("title")'
    ],
    correct: 'document.querySelector("#title")'
  },
  {
    id: 86,
    question: "Which selector represents a class in CSS?",
    options: ["#", ".", "@", "*"],
    correct: "."
  },
  {
    id: 87,
    question: "Which selector represents an ID in CSS?",
    options: [".", "#", "@", "&"],
    correct: "#"
  },
  {
    id: 88,
    question: "Which property can be used to change the text of an element?",
    options: ["textContent", "textChange", "changeText", "innerTextOnly"],
    correct: "textContent"
  },
  {
    id: 89,
    question: 'What does this code do?\n\ndocument.querySelector("h1").textContent = "Welcome";',
    options: [
      "Creates a new h1",
      "Changes the text of the h1",
      "Deletes the h1",
      "Changes the CSS file"
    ],
    correct: "Changes the text of the h1"
  },
  {
    id: 90,
    question: "Which property can be used to change an element's CSS style directly?",
    options: ["style", "css", "design", "appearance"],
    correct: "style"
  },

  // ==========================================
  // SECTION J: Events and Event Listeners (91–96)
  // ==========================================
  {
    id: 91,
    question: "What is an event in JavaScript?",
    options: [
      "An action that happens on a webpage",
      "A variable",
      "A data type",
      "A CSS rule"
    ],
    correct: "An action that happens on a webpage"
  },
  {
    id: 92,
    question: "Which is an example of a JavaScript event?",
    options: ["click", "color", "margin", "font-size"],
    correct: "click"
  },
  {
    id: 93,
    question: "Which method is used to attach an event listener?",
    options: [
      "addEventListener()",
      "addEvent()",
      "listenEvent()",
      "eventListener()"
    ],
    correct: "addEventListener()"
  },
  {
    id: 94,
    question: "What event occurs when a user clicks an element?",
    options: ["press", "click", "mouseClicking", "button"],
    correct: "click"
  },
  {
    id: 95,
    question: "Which code correctly listens for a click?",
    options: [
      'button.addEventListener("click", function() {})',
      'button.clickListener(function() {})',
      'button.listen("click")',
      'button.add("click")'
    ],
    correct: 'button.addEventListener("click", function() {})'
  },
  {
    id: 96,
    question: "Which event is commonly used when the value of an input changes while the user types?",
    options: ["click", "input", "submit", "changeText"],
    correct: "input"
  },

  // ==========================================
  // SECTION K: Forms and Validation (97–100)
  // ==========================================
  {
    id: 97,
    question: "What is form validation?",
    options: [
      "Checking whether user input is valid",
      "Designing a form",
      "Creating a database",
      "Changing the form's color"
    ],
    correct: "Checking whether user input is valid"
  },
  {
    id: 98,
    question: "Which event is commonly used to handle form submission?",
    options: ["click", "input", "submit", "send"],
    correct: "submit"
  },
  {
    id: 99,
    question: "What does event.preventDefault() do when used during form submission?",
    options: [
      "Prevents the browser's default form submission behavior",
      "Deletes the form",
      "Refreshes the page",
      "Clears all JavaScript"
    ],
    correct: "Prevents the browser's default form submission behavior"
  },
  {
    id: 100,
    question: "Why is form validation important?",
    options: [
      "To ensure users provide acceptable/required information",
      "To make JavaScript faster",
      "To change HTML into CSS",
      "To remove all forms from a webpage"
    ],
    correct: "To ensure users provide acceptable/required information"
  }
];
