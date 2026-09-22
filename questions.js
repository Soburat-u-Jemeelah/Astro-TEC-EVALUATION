const quizQuestions = [
  // ==========================================
  // HTML EVALUATION — 60 CBT QUESTIONS
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
    question: "What is the main purpose of HTML?",
    options: [
      "To style webpages",
      "To structure webpage content",
      "To create databases",
      "To add animations"
    ],
    correct: "To structure webpage content"
  },
  {
    id: 3,
    question: "Which declaration defines an HTML5 document?",
    options: ["<html5>", "<!DOCTYPE html>", "<doctype html>", "<!HTML5>"],
    correct: "<!DOCTYPE html>"
  },
  {
    id: 4,
    question: "Which element is the root element of an HTML document?",
    options: ["<body>", "<head>", "<html>", "<main>"],
    correct: "<html>"
  },
  {
    id: 5,
    question: "Which element contains the visible content of a webpage?",
    options: ["<head>", "<body>", "<html>", "<main>"],
    correct: "<body>"
  },
  {
    id: 6,
    question: "Which element contains metadata and information about the webpage?",
    options: ["<body>", "<main>", "<head>", "<meta-data>"],
    correct: "<head>"
  },
  {
    id: 7,
    question: "Which tag creates the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: "<h1>"
  },
  {
    id: 8,
    question: "Which tag is used to create a paragraph?",
    options: ["<para>", "<p>", "<paragraph>", "<text>"],
    correct: "<p>"
  },
  {
    id: 9,
    question: "Which tag creates a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: "<a>"
  },
  {
    id: 10,
    question: "Which attribute specifies where a hyperlink points?",
    options: ["src", "href", "link", "target"],
    correct: "href"
  },
  {
    id: 11,
    question: "Which tag is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<photo>"],
    correct: "<img>"
  },
  {
    id: 12,
    question: "Which attribute specifies the image file?",
    options: ["href", "src", "file", "source"],
    correct: "src"
  },
  {
    id: 13,
    question: "What is the purpose of the alt attribute?",
    options: [
      "To change an image's size",
      "To provide alternative text for an image",
      "To add a border",
      "To link an image"
    ],
    correct: "To provide alternative text for an image"
  },
  {
    id: 14,
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: "<ul>"
  },
  {
    id: 15,
    question: "Which tag creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<order>"],
    correct: "<ol>"
  },
  {
    id: 16,
    question: "Which tag represents an item in a list?",
    options: ["<item>", "<li>", "<list-item>", "<i>"],
    correct: "<li>"
  },
  {
    id: 17,
    question: "Which tag creates a line break?",
    options: ["<break>", "<br>", "<lb>", "<newline>"],
    correct: "<br>"
  },
  {
    id: 18,
    question: "Which element creates a horizontal line?",
    options: ["<line>", "<hr>", "<horizontal>", "<br>"],
    correct: "<hr>"
  },
  {
    id: 19,
    question: "Which element is used to create a generic block container?",
    options: ["<span>", "<div>", "<container>", "<block>"],
    correct: "<div>"
  },
  {
    id: 20,
    question: "Which element is commonly used as an inline container?",
    options: ["<div>", "<span>", "<inline>", "<text>"],
    correct: "<span>"
  },
  {
    id: 21,
    question: "Which attribute gives an element a unique identifier?",
    options: ["class", "id", "name", "unique"],
    correct: "id"
  },
  {
    id: 22,
    question: "Which attribute can be shared by multiple elements?",
    options: ["id", "class", "unique", "identifier"],
    correct: "class"
  },
  {
    id: 23,
    question: "Which HTML element represents the main content of a webpage?",
    options: ["<content>", "<main>", "<primary>", "<body-content>"],
    correct: "<main>"
  },
  {
    id: 24,
    question: "Which semantic element represents navigation links?",
    options: ["<navigation>", "<nav>", "<links>", "<menu>"],
    correct: "<nav>"
  },
  {
    id: 25,
    question: "Which element represents the footer of a webpage?",
    options: ["<bottom>", "<footer>", "<end>", "<foot>"],
    correct: "<footer>"
  },
  {
    id: 26,
    question: "Which element represents a standalone piece of content such as a blog post?",
    options: ["<article>", "<post>", "<content>", "<blog>"],
    correct: "<article>"
  },
  {
    id: 27,
    question: "Which semantic element is used to group related content?",
    options: ["<group>", "<section>", "<content-group>", "<div-section>"],
    correct: "<section>"
  },
  {
    id: 28,
    question: "Which element is commonly used for introductory content or a header?",
    options: ["<top>", "<header>", "<intro>", "<heading-section>"],
    correct: "<header>"
  },
  {
    id: 29,
    question: "Which element is used to create a form?",
    options: ["<input>", "<form>", "<form-container>", "<data>"],
    correct: "<form>"
  },
  {
    id: 30,
    question: "Which element collects user input?",
    options: ["<input>", "<user>", "<collect>", "<data-input>"],
    correct: "<input>"
  },
  {
    id: 31,
    question: "Which input type is used for entering a password?",
    options: ['type="text"', 'type="password"', 'type="secure"', 'type="hidden"'],
    correct: 'type="password"'
  },
  {
    id: 32,
    question: "Which input type is used to enter an email address?",
    options: ['type="mail"', 'type="email"', 'type="address"', 'type="text-email"'],
    correct: 'type="email"'
  },
  {
    id: 33,
    question: "Which input type allows a user to select one option from a group?",
    options: ["checkbox", "radio", "select", "option"],
    correct: "radio"
  },
  {
    id: 34,
    question: "Which input type allows multiple selections?",
    options: ["radio", "multiple", "checkbox", "select"],
    correct: "checkbox"
  },
  {
    id: 35,
    question: "Which element creates a dropdown menu?",
    options: ["<dropdown>", "<select>", "<menu>", "<list>"],
    correct: "<select>"
  },
  {
    id: 36,
    question: "Which element represents an option inside a <select>?",
    options: ["<choice>", "<option>", "<item>", "<select-item>"],
    correct: "<option>"
  },
  {
    id: 37,
    question: "Which element is used to provide a label for a form control?",
    options: ["<label>", "<form-label>", "<caption>", "<name>"],
    correct: "<label>"
  },
  {
    id: 38,
    question: "Which attribute connects a <label> to an input using the input's ID?",
    options: ["id", "for", "target", "input"],
    correct: "for"
  },
  {
    id: 39,
    question: "Which element creates a multi-line text input?",
    options: ['<input type="textarea">', "<textarea>", "<text-area>", "<multiline>"],
    correct: "<textarea>"
  },
  {
    id: 40,
    question: "Which button type submits a form?",
    options: ['type="send"', 'type="submit"', 'type="form"', 'type="upload"'],
    correct: 'type="submit"'
  },
  {
    id: 41,
    question: "Which element creates a table?",
    options: ["<table>", "<tab>", "<data-table>", "<grid>"],
    correct: "<table>"
  },
  {
    id: 42,
    question: "Which element represents a table row?",
    options: ["<row>", "<tr>", "<td>", "<table-row>"],
    correct: "<tr>"
  },
  {
    id: 43,
    question: "Which element represents a table data cell?",
    options: ["<cell>", "<td>", "<data>", "<table-data>"],
    correct: "<td>"
  },
  {
    id: 44,
    question: "Which element represents a table heading cell?",
    options: ["<thead>", "<th>", "<heading>", "<table-heading>"],
    correct: "<th>"
  },
  {
    id: 45,
    question: "Which element groups table header rows?",
    options: ["<header>", "<thead>", "<thgroup>", "<table-head>"],
    correct: "<thead>"
  },
  {
    id: 46,
    question: "Which element groups the main body of table rows?",
    options: ["<tbody>", "<body>", "<table-body>", "<rows>"],
    correct: "<tbody>"
  },
  {
    id: 47,
    question: "Which element groups the footer rows of a table?",
    options: ["<footer>", "<tfoot>", "<table-footer>", "<foot>"],
    correct: "<tfoot>"
  },
  {
    id: 48,
    question: "Which HTML tag is used to emphasize text semantically?",
    options: ["<italic>", "<em>", "<i-text>", "<emphasis-text>"],
    correct: "<em>"
  },
  {
    id: 49,
    question: "Which HTML tag indicates strong importance?",
    options: ["<bold>", "<strong>", "<important>", "<bolder>"],
    correct: "<strong>"
  },
  {
    id: 50,
    question: "Which tag is used to display preformatted text?",
    options: ["<pre>", "<format>", "<code-block>", "<text-format>"],
    correct: "<pre>"
  },
  {
    id: 51,
    question: "Which element is used to represent computer code?",
    options: ["<program>", "<code>", "<script-code>", "<coding>"],
    correct: "<code>"
  },
  {
    id: 52,
    question: "Which attribute opens a link in a new browsing context?",
    options: ['new="true"', 'target="_blank"', 'open="new"', 'window="new"'],
    correct: 'target="_blank"'
  },
  {
    id: 53,
    question: "Which attribute provides additional information that is commonly shown as a tooltip?",
    options: ["info", "title", "tooltip", "description"],
    correct: "title"
  },
  {
    id: 54,
    question: "Which attribute makes a form input mandatory?",
    options: ["required", "mandatory", "must-fill", "validate"],
    correct: "required"
  },
  {
    id: 55,
    question: "Which attribute provides a hint about what a user should enter into an input?",
    options: ["hint", "placeholder", "suggestion", "description"],
    correct: "placeholder"
  },
  {
    id: 56,
    question: "Which HTML element is used to embed audio?",
    options: ["<sound>", "<audio>", "<music>", "<media-audio>"],
    correct: "<audio>"
  },
  {
    id: 57,
    question: "Which HTML element is used to embed video?",
    options: ["<movie>", "<video>", "<media>", "<film>"],
    correct: "<video>"
  },
  {
    id: 58,
    question: "Which tag is used to add a caption to a <figure>?",
    options: ["<caption>", "<figcaption>", "<figure-caption>", "<description>"],
    correct: "<figcaption>"
  },
  {
    id: 59,
    question: "Which HTML element is used to represent a quotation?",
    options: ["<quote>", "<blockquote>", "<quotation>", "<qtext>"],
    correct: "<blockquote>"
  },
  {
    id: 60,
    question: "Which of the following is the correct basic HTML structure?",
    options: [
      "<body> <head> <html> </html> </head> </body>",
      "<html> <head></head> <body></body> </html>",
      "<head> <html> <body></body> </html> </head>",
      "<html> <body> <head></head> </body> </html>"
    ],
    correct: "<html> <head></head> <body></body> </html>"
  }
];
