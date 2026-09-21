const quizQuestions = [
  // ==========================================
  // SECTION A — HTML (Questions 1 to 30)
  // ==========================================
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "What is HTML primarily used for?",
    options: [
      "Styling webpages",
      "Structuring webpage content",
      "Creating databases",
      "Programming servers"
    ],
    correct: "Structuring webpage content"
  },
  {
    id: 3,
    question: "Which tag is used to create the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correct: "<h1>"
  },
  {
    id: 4,
    question: "Which tag is used to create a paragraph?",
    options: ["<paragraph>", "<p>", "<para>", "<text>"],
    correct: "<p>"
  },
  {
    id: 5,
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: "<a>"
  },
  {
    id: 6,
    question: "Which attribute specifies the destination of a hyperlink?",
    options: ["src", "link", "href", "url"],
    correct: "href"
  },
  {
    id: 7,
    question: "Which tag is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correct: "<img>"
  },
  {
    id: 8,
    question: "Which attribute specifies the location of an image?",
    options: ["href", "link", "src", "alt"],
    correct: "src"
  },
  {
    id: 9,
    question: "What is the purpose of the alt attribute on an image?",
    options: [
      "Changes the image size",
      "Provides alternative text for the image",
      "Changes the image color",
      "Creates an image link"
    ],
    correct: "Provides alternative text for the image"
  },
  {
    id: 10,
    question: "Which HTML tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: "<ul>"
  },
  {
    id: 11,
    question: "Which HTML tag creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<order>"],
    correct: "<ol>"
  },
  {
    id: 12,
    question: "Which tag represents an item in a list?",
    options: ["<item>", "<list>", "<li>", "<i>"],
    correct: "<li>"
  },
  {
    id: 13,
    question: "Which tag is used to create a line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    correct: "<br>"
  },
  {
    id: 14,
    question: "Which tag is used to make text bold semantically?",
    options: ["<bold>", "<b>", "<strong>", "Both B and C"],
    correct: "<strong>"
  },
  {
    id: 15,
    question: "Which tag is commonly used for emphasized text?",
    options: ["<em>", "<italic>", "<i-text>", "<emphasis>"],
    correct: "<em>"
  },
  {
    id: 16,
    question: "Which section contains information about the HTML document that is not normally displayed on the page?",
    options: ["<body>", "<main>", "<head>", "<footer>"],
    correct: "<head>"
  },
  {
    id: 17,
    question: "Which tag contains the visible content of a webpage?",
    options: ["<head>", "<body>", "<html-head>", "<content>"],
    correct: "<body>"
  },
  {
    id: 18,
    question: "Which declaration tells the browser that the document uses HTML5?",
    options: ["<html5>", "<!HTML5>", "<!DOCTYPE html>", "<doctype html>"],
    correct: "<!DOCTYPE html>"
  },
  {
    id: 19,
    question: "Which attribute is commonly used to uniquely identify an HTML element?",
    options: ["class", "id", "name", "unique"],
    correct: "id"
  },
  {
    id: 20,
    question: "Which attribute can be applied to multiple HTML elements?",
    options: ["id", "class", "unique", "single"],
    correct: "class"
  },
  {
    id: 21,
    question: "Which tag is used to create a form?",
    options: ["<input>", "<form>", "<formbox>", "<data>"],
    correct: "<form>"
  },
  {
    id: 22,
    question: "Which HTML element is used to collect user input?",
    options: ["<input>", "<collect>", "<text>", "<user>"],
    correct: "<input>"
  },
  {
    id: 23,
    question: "Which input type is used for entering a password?",
    options: ['type="text"', 'type="password"', 'type="hidden"', 'type="secure"'],
    correct: 'type="password"'
  },
  {
    id: 24,
    question: "Which input type allows a user to select one option from a group?",
    options: ["checkbox", "radio", "select-one", "option"],
    correct: "radio"
  },
  {
    id: 25,
    question: "Which input type allows multiple selections?",
    options: ["radio", "multiple", "checkbox", "select"],
    correct: "checkbox"
  },
  {
    id: 26,
    question: "Which tag is used to create a table row?",
    options: ["<td>", "<tr>", "<row>", "<table-row>"],
    correct: "<tr>"
  },
  {
    id: 27,
    question: "Which tag represents a table data cell?",
    options: ["<td>", "<tr>", "<data>", "<cell>"],
    correct: "<td>"
  },
  {
    id: 28,
    question: "Which tag represents a table heading cell?",
    options: ["<heading>", "<th>", "<thead-cell>", "<tdh>"],
    correct: "<th>"
  },
  {
    id: 29,
    question: "Which HTML element is a generic block-level container?",
    options: ["<span>", "<div>", "<section-block>", "<container>"],
    correct: "<div>"
  },
  {
    id: 30,
    question: "Which HTML element is commonly used as an inline container?",
    options: ["<div>", "<section>", "<span>", "<inline>"],
    correct: "<span>"
  },

  // ==========================================
  // SECTION B — CSS (Questions 31 to 60)
  // ==========================================
  {
    id: 31,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Colorful Style Sheets"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    id: 32,
    question: "What is CSS mainly used for?",
    options: [
      "Structuring webpages",
      "Styling webpages",
      "Creating databases",
      "Writing server-side code"
    ],
    correct: "Styling webpages"
  },
  {
    id: 33,
    question: "Which HTML element can be used to write internal CSS?",
    options: ["<css>", "<style>", "<stylesheet>", "<design>"],
    correct: "<style>"
  },
  {
    id: 34,
    question: "Which HTML element is used to connect an external CSS file?",
    options: ["<css>", "<style>", "<link>", "<script>"],
    correct: "<link>"
  },
  {
    id: 35,
    question: "Which attribute specifies the CSS file in a <link> element?",
    options: ["src", "href", "file", "style"],
    correct: "href"
  },
  {
    id: 36,
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    correct: "color"
  },
  {
    id: 37,
    question: "Which CSS property changes the background color?",
    options: [
      "background-color",
      "bg-color",
      "color-background",
      "background-style"
    ],
    correct: "background-color"
  },
  {
    id: 38,
    question: "Which property changes the size of text?",
    options: ["text-size", "font-size", "size", "font-height"],
    correct: "font-size"
  },
  {
    id: 39,
    question: "Which property makes text bold?",
    options: ["font-weight", "font-bold", "text-weight", "bold-text"],
    correct: "font-weight"
  },
  {
    id: 40,
    question: "Which property changes the font family?",
    options: ["font-type", "font-family", "text-family", "typeface"],
    correct: "font-family"
  },
  {
    id: 41,
    question: "Which property aligns text horizontally?",
    options: ["text-align", "align-text", "horizontal-align", "font-align"],
    correct: "text-align"
  },
  {
    id: 42,
    question: "Which value centers text?",
    options: ["middle", "center", "central", "align-center"],
    correct: "center"
  },
  {
    id: 43,
    question: "Which CSS property adds space inside an element?",
    options: ["margin", "padding", "spacing", "inside-space"],
    correct: "padding"
  },
  {
    id: 44,
    question: "Which CSS property adds space outside an element?",
    options: ["padding", "margin", "outside-space", "border-spacing"],
    correct: "margin"
  },
  {
    id: 45,
    question: "Which property adds a border around an element?",
    options: ["outline-border", "border", "element-border", "box-border"],
    correct: "border"
  },
  {
    id: 46,
    question: "Which CSS property controls the width of an element?",
    options: ["element-width", "width", "size-width", "box-width"],
    correct: "width"
  },
  {
    id: 47,
    question: "Which CSS property controls the height of an element?",
    options: ["height", "element-height", "box-height", "size-height"],
    correct: "height"
  },
  {
    id: 48,
    question: "Which selector selects all <p> elements?",
    options: [".p", "#p", "p", "*p"],
    correct: "p"
  },
  {
    id: 49,
    question: "Which selector selects an element with a specific class?",
    options: ["#className", ".className", "className", "@className"],
    correct: ".className"
  },
  {
    id: 50,
    question: "Which selector selects an element with a specific ID?",
    options: [".myId", "#myId", "myId", "@myId"],
    correct: "#myId"
  },
  {
    id: 51,
    question: "What does the * selector represent?",
    options: ["Only paragraphs", "Only classes", "All elements", "Only IDs"],
    correct: "All elements"
  },
  {
    id: 52,
    question: "Which CSS property is used to control how an element is displayed?",
    options: ["display", "show", "visibility-type", "element-type"],
    correct: "display"
  },
  {
    id: 53,
    question: "Which display value makes an element a block-level element?",
    options: ["inline", "block", "flexible", "box"],
    correct: "block"
  },
  {
    id: 54,
    question: "Which display value allows elements to appear next to each other while behaving like inline elements?",
    options: ["inline", "block", "inline-block", "side-block"],
    correct: "inline-block"
  },
  {
    id: 55,
    question: "Which CSS unit is relative to the font size of the root HTML element?",
    options: ["px", "em", "rem", "%"],
    correct: "rem"
  },
  {
    id: 56,
    question: "If the root font size is 16px, what is 2rem?",
    options: ["8px", "16px", "24px", "32px"],
    correct: "32px"
  },
  {
    id: 57,
    question: "If the root font size is 16px, what is 1.5rem?",
    options: ["20px", "24px", "26px", "32px"],
    correct: "24px"
  },
  {
    id: 58,
    question: "Which CSS property controls the space between lines of text?",
    options: ["line-spacing", "line-height", "text-spacing", "height-line"],
    correct: "line-height"
  },
  {
    id: 59,
    question: "Which property rounds the corners of an element?",
    options: ["corner-radius", "border-radius", "radius-border", "round-corner"],
    correct: "border-radius"
  },
  {
    id: 60,
    question: "Which CSS property controls transparency?",
    options: ["opacity", "transparent", "visibility", "alpha-color"],
    correct: "opacity"
  },

  // ==========================================
  // SECTION C — JAVASCRIPT FUNDAMENTALS (Questions 61 to 80)
  // ==========================================
  {
    id: 61,
    question: "What is JavaScript primarily used for on webpages?",
    options: [
      "Creating the structure",
      "Styling the webpage",
      "Adding behavior and interactivity",
      "Creating HTML files"
    ],
    correct: "Adding behavior and interactivity"
  },
  {
    id: 62,
    question: "Which tag is used to add JavaScript to an HTML document?",
    options: ["<javascript>", "<js>", "<script>", "<code>"],
    correct: "<script>"
  },
  {
    id: 63,
    question: "Which keyword declares a variable that can be reassigned?",
    options: ["const", "let", "fixed", "varible"],
    correct: "let"
  },
  {
    id: 64,
    question: "Which keyword declares a variable that should not be reassigned?",
    options: ["let", "change", "const", "fixed"],
    correct: "const"
  },
  {
    id: 65,
    question: "Which is a valid JavaScript variable declaration?",
    options: [
      'let name = "John";',
      'variable name = "John";',
      'let = name "John";',
      'name let = "John";'
    ],
    correct: 'let name = "John";'
  },
  {
    id: 66,
    question: "Which symbol is commonly used to assign a value to a variable?",
    options: ["==", "===", "=", "=>"],
    correct: "="
  },
  {
    id: 67,
    question: "Which data type represents text?",
    options: ["Number", "Boolean", "String", "Object"],
    correct: "String"
  },
  {
    id: 68,
    question: "Which of the following is a string?",
    options: ["25", "true", '"Hello"', "null"],
    correct: '"Hello"'
  },
  {
    id: 69,
    question: "Which data type represents true or false?",
    options: ["String", "Boolean", "Number", "Array"],
    correct: "Boolean"
  },
  {
    id: 70,
    question: "Which of the following is a Boolean?",
    options: ['"true"', "true", '"false"', "1"],
    correct: "true"
  },
  {
    id: 71,
    question: "Which data type is used for numeric values?",
    options: ["Number", "String", "Boolean", "Text"],
    correct: "Number"
  },
  {
    id: 72,
    question: "Which operator is used for addition?",
    options: ["&", "+", "*", "%"],
    correct: "+"
  },
  {
    id: 73,
    question: "What is the result of 10 - 3?",
    options: ["5", "6", "7", "8"],
    correct: "7"
  },
  {
    id: 74,
    question: "What is the result of 5 * 4?",
    options: ["9", "15", "20", "25"],
    correct: "20"
  },
  {
    id: 75,
    question: "What is the result of 10 / 2?",
    options: ["2", "5", "10", "20"],
    correct: "5"
  },
  {
    id: 76,
    question: "Which operator checks whether two values are strictly equal?",
    options: ["=", "==", "===", "!="],
    correct: "==="
  },
  {
    id: 77,
    question: "Which symbol starts a single-line comment in JavaScript?",
    options: ["<!--", "//", "#", "**"],
    correct: "//"
  },
  {
    id: 78,
    question: "Which function displays a message in the browser console?",
    options: [
      "console.message()",
      "console.log()",
      "browser.log()",
      "log.console()"
    ],
    correct: "console.log()"
  },
  {
    id: 79,
    question: 'What will console.log("Hello"); do?',
    options: [
      "Display Hello in the HTML page",
      "Display Hello in the browser console",
      "Create a button",
      "Change the webpage title"
    ],
    correct: "Display Hello in the browser console"
  },
  {
    id: 80,
    question: "Which statement is used to make a decision in JavaScript?",
    options: ["if", "decide", "check", "when"],
    correct: "if"
  },

  // ==========================================
  // SECTION D — JAVASCRIPT + DOM (Questions 81 to 100)
  // ==========================================
  {
    id: 81,
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Document Oriented Method",
      "Digital Object Model"
    ],
    correct: "Document Object Model"
  },
  {
    id: 82,
    question: "What does the DOM represent?",
    options: [
      "Only CSS styles",
      "The webpage as objects that JavaScript can interact with",
      "Only JavaScript variables",
      "The computer's operating system"
    ],
    correct: "The webpage as objects that JavaScript can interact with"
  },
  {
    id: 83,
    question: "Which object represents the webpage document in JavaScript?",
    options: ["html", "page", "document", "webpage"],
    correct: "document"
  },
  {
    id: 84,
    question: "Which method selects an element using a CSS selector?",
    options: [
      "document.select()",
      "document.querySelector()",
      "document.findElement()",
      "document.getSelector()"
    ],
    correct: "document.querySelector()"
  },
  {
    id: 85,
    question: "How would you select an element with the ID title?",
    options: [
      'document.querySelector("title")',
      'document.querySelector("#title")',
      'document.querySelector(".title")',
      'document.querySelector("@title")'
    ],
    correct: 'document.querySelector("#title")'
  },
  {
    id: 86,
    question: "How would you select an element with the class box?",
    options: [
      'document.querySelector("#box")',
      'document.querySelector("box")',
      'document.querySelector(".box")',
      'document.querySelector("@box")'
    ],
    correct: 'document.querySelector(".box")'
  },
  {
    id: 87,
    question: "Which property can be used to change the text content of an element?",
    options: ["textContent", "textChange", "changeText", "innerStyle"],
    correct: "textContent"
  },
  {
    id: 88,
    question: 'Consider this HTML:\n<h1 id="title">Hello</h1>\n\nWhich code changes the text to Welcome?',
    options: [
      'document.querySelector("#title").textContent = "Welcome";',
      'document.querySelector("#title").text = "Welcome";',
      'document.title("#title") = "Welcome";',
      '#title.textContent = "Welcome";'
    ],
    correct: 'document.querySelector("#title").textContent = "Welcome";'
  },
  {
    id: 89,
    question: "What does textContent do?",
    options: [
      "Changes the CSS",
      "Gets or changes the text content of an element",
      "Creates a new HTML document",
      "Removes an element"
    ],
    correct: "Gets or changes the text content of an element"
  },
  {
    id: 90,
    question: "Which property allows JavaScript to modify CSS styles directly?",
    options: ["style", "css", "design", "stylesheets"],
    correct: "style"
  },
  {
    id: 91,
    question: 'Consider:\nconst heading = document.querySelector("h1");\nheading.style.color = "red";\n\nWhat does this do?',
    options: [
      "Changes the heading text",
      "Changes the heading's color to red",
      "Creates a red heading",
      "Removes the heading"
    ],
    correct: "Changes the heading's color to red"
  },
  {
    id: 92,
    question: "How would you change the background color using JavaScript?",
    options: [
      'element.style.backgroundColor = "blue";',
      'element.css.background = "blue";',
      'element.background = "blue";',
      'element.style.background-colour = "blue";'
    ],
    correct: 'element.style.backgroundColor = "blue";'
  },
  {
    id: 93,
    question: "Which method creates a new HTML element?",
    options: [
      "document.newElement()",
      "document.createElement()",
      "document.addElement()",
      "document.makeElement()"
    ],
    correct: "document.createElement()"
  },
  {
    id: 94,
    question: "Which code creates a new paragraph element?",
    options: [
      'document.createElement("p")',
      'document.new("p")',
      'document.create("paragraph")',
      'document.addElement("p")'
    ],
    correct: 'document.createElement("p")'
  },
  {
    id: 95,
    question: "After creating an element, which method can be used to add it inside another element?",
    options: ["appendChild()", "insertElement()", "addHTML()", "placeChild()"],
    correct: "appendChild()"
  },
  {
    id: 96,
    question: "What does classList allow you to do?",
    options: [
      "Create JavaScript classes",
      "Manage the CSS classes of an element",
      "Create HTML documents",
      "Change JavaScript variables"
    ],
    correct: "Manage the CSS classes of an element"
  },
  {
    id: 97,
    question: "Which method adds a class to an element?",
    options: ["classList.add()", "classList.insert()", "class.add()", "add.class()"],
    correct: "classList.add()"
  },
  {
    id: 98,
    question: "Which method removes a class from an element?",
    options: [
      "classList.delete()",
      "classList.remove()",
      "class.remove()",
      "remove.class()"
    ],
    correct: "classList.remove()"
  },
  {
    id: 99,
    question: "Which method removes an element from the DOM?",
    options: [
      "element.delete()",
      "element.remove()",
      "document.deleteElement()",
      "element.destroy()"
    ],
    correct: "element.remove()"
  },
  {
    id: 100,
    question: "Which statement about rem is correct?",
    options: [
      "rem is relative to the parent element's font size",
      "rem is relative to the root element's font size",
      "rem always equals 10px",
      "rem is a JavaScript unit"
    ],
    correct: "rem is relative to the root element's font size"
  }
];
