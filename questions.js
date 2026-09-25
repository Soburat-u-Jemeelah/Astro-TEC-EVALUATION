const quizQuestions = [
  // ==========================================
  // PART A — HTML (1–30)
  // ==========================================
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink Text Management Language",
      "Hyper Transfer Markup Language"
    ],
    correct: "HyperText Markup Language"
  },
  {
    id: 2,
    question: "What is the primary purpose of HTML?",
    options: [
      "To add animations to a website",
      "To structure the content of a webpage",
      "To manage databases",
      "To style a webpage"
    ],
    correct: "To structure the content of a webpage"
  },
  {
    id: 3,
    question: "Which declaration tells the browser that the document uses HTML5?",
    options: ["<html5>", "<doctype html>", "<!DOCTYPE html>", '<html version="5">'],
    correct: "<!DOCTYPE html>"
  },
  {
    id: 4,
    question: "Which element contains the visible content of an HTML document?",
    options: ["<head>", "<body>", "<main>", "<content>"],
    correct: "<body>"
  },
  {
    id: 5,
    question: "Which element contains metadata, the page title, and links to stylesheets?",
    options: ["<body>", "<footer>", "<head>", "<meta>"],
    correct: "<head>"
  },
  {
    id: 6,
    question: "Which HTML element is used for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correct: "<h1>"
  },
  {
    id: 7,
    question: "Which element is used to create a paragraph?",
    options: ["<paragraph>", "<p>", "<para>", "<text>"],
    correct: "<p>"
  },
  {
    id: 8,
    question: "Which element creates a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    correct: "<br>"
  },
  {
    id: 9,
    question: "Which element creates a horizontal thematic break?",
    options: ["<line>", "<hr>", "<break>", "<horizontal>"],
    correct: "<hr>"
  },
  {
    id: 10,
    question: "Which of the following is a semantic HTML element?",
    options: ["<div>", "<span>", "<section>", "<box>"],
    correct: "<section>"
  },
  {
    id: 11,
    question: "What is an HTML attribute?",
    options: [
      "A CSS rule",
      "Additional information provided inside an HTML element",
      "A JavaScript function",
      "A type of HTML comment"
    ],
    correct: "Additional information provided inside an HTML element"
  },
  {
    id: 12,
    question: "Which attribute specifies the destination of a hyperlink?",
    options: ["src", "link", "href", "url"],
    correct: "href"
  },
  {
    id: 13,
    question: "Which code correctly creates a link to Google?",
    options: [
      '<link src="https://google.com">Google</link>',
      '<a href="https://google.com">Google</a>',
      '<a src="https://google.com">Google</a>',
      '<href="https://google.com">Google</href>'
    ],
    correct: '<a href="https://google.com">Google</a>'
  },
  {
    id: 14,
    question: "Which attribute specifies the path of an image?",
    options: ["href", "link", "src", "path"],
    correct: "src"
  },
  {
    id: 15,
    question: "What is the primary purpose of the alt attribute on an image?",
    options: [
      "To change the image size",
      "To provide alternative text describing the image",
      "To make the image responsive",
      "To add an image border"
    ],
    correct: "To provide alternative text describing the image"
  },
  {
    id: 16,
    question: "Which code correctly displays an image?",
    options: [
      '<image src="photo.jpg">',
      '<img href="photo.jpg">',
      '<img src="photo.jpg" alt="Product">',
      '<picture href="photo.jpg">'
    ],
    correct: '<img src="photo.jpg" alt="Product">'
  },
  {
    id: 17,
    question: "Which attribute opens a link in a new browsing context?",
    options: ['new="true"', 'target="_blank"', 'open="new"', 'window="new"'],
    correct: 'target="_blank"'
  },
  {
    id: 18,
    question: "What is the difference between an absolute and relative URL?",
    options: [
      "Absolute URLs contain the complete address; relative URLs depend on the current location",
      "Relative URLs always use HTTPS",
      "Absolute URLs only work with images",
      "There is no difference"
    ],
    correct: "Absolute URLs contain the complete address; relative URLs depend on the current location"
  },
  {
    id: 19,
    question: "Which element creates an unordered list?",
    options: ["<ol>", "<list>", "<ul>", "<li>"],
    correct: "<ul>"
  },
  {
    id: 20,
    question: "Which element creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<order>"],
    correct: "<ol>"
  },
  {
    id: 21,
    question: "Which element represents an item inside a list?",
    options: ["<item>", "<list-item>", "<li>", "<ul>"],
    correct: "<li>"
  },
  {
    id: 22,
    question: "Which HTML element defines a table row?",
    options: ["<td>", "<tr>", "<th>", "<row>"],
    correct: "<tr>"
  },
  {
    id: 23,
    question: "Which element represents a table header cell?",
    options: ["<thead>", "<header>", "<th>", "<td>"],
    correct: "<th>"
  },
  {
    id: 24,
    question: "Which attribute allows a table cell to span multiple columns?",
    options: ["rowspan", "colspan", "span-columns", "columns"],
    correct: "colspan"
  },
  {
    id: 25,
    question: "Which HTML element is used to create a form?",
    options: ["<input>", "<form>", "<fieldset>", "<data>"],
    correct: "<form>"
  },
  {
    id: 26,
    question: "Which input type is appropriate for collecting an email address?",
    options: [
      '<input type="text">',
      '<input type="mail">',
      '<input type="email">',
      "<email>"
    ],
    correct: '<input type="email">'
  },
  {
    id: 27,
    question: "Which input type hides the characters entered by the user?",
    options: ["hidden", "password", "secure", "private"],
    correct: "password"
  },
  {
    id: 28,
    question: "Which attribute makes a form field mandatory?",
    options: ["mandatory", "required", "validate", "must-fill"],
    correct: "required"
  },
  {
    id: 29,
    question: "What is the main purpose of the <label> element?",
    options: [
      "To style an input",
      "To provide a name/description associated with a form control",
      "To submit a form",
      "To validate an input"
    ],
    correct: "To provide a name/description associated with a form control"
  },
  {
    id: 30,
    question: "Which practice improves HTML accessibility?",
    options: [
      "Using <div> for every element",
      "Removing all alt attributes",
      "Using semantic HTML and properly associated labels",
      "Using only uppercase HTML tags"
    ],
    correct: "Using semantic HTML and properly associated labels"
  },

  // ==========================================
  // PART B — CSS (31–60)
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
    question: "What is the primary purpose of CSS?",
    options: [
      "To structure webpage content",
      "To store website data",
      "To style and control the presentation of HTML elements",
      "To create databases"
    ],
    correct: "To style and control the presentation of HTML elements"
  },
  {
    id: 33,
    question: "Which is the correct way to link an external CSS file?",
    options: [
      '<style src="style.css">',
      '<css href="style.css">',
      '<link rel="stylesheet" href="style.css">',
      '<stylesheet src="style.css">'
    ],
    correct: '<link rel="stylesheet" href="style.css">'
  },
  {
    id: 34,
    question: "Which CSS property changes the text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    correct: "color"
  },
  {
    id: 35,
    question: "Which CSS property changes the background color?",
    options: ["background-color", "bg-color", "color-background", "background"],
    correct: "background-color"
  },
  {
    id: 36,
    question: "Which selector targets all <p> elements?",
    options: [".p", "#p", "p", "*p"],
    correct: "p"
  },
  {
    id: 37,
    question: "Which selector targets an element with the class card?",
    options: ["#card", ".card", "card", "*card"],
    correct: ".card"
  },
  {
    id: 38,
    question: "Which selector targets an element with the ID header?",
    options: [".header", "header", "#header", "@header"],
    correct: "#header"
  },
  {
    id: 39,
    question: "What does the universal selector * select?",
    options: ["Only paragraphs", "Only classes", "Only IDs", "All elements"],
    correct: "All elements"
  },
  {
    id: 40,
    question: "Which CSS property changes the size of text?",
    options: ["text-size", "font-size", "font-height", "size"],
    correct: "font-size"
  },
  {
    id: 41,
    question: "Which of the following correctly represents the CSS box model from inside to outside?",
    options: [
      "Margin → Border → Padding → Content",
      "Content → Padding → Border → Margin",
      "Padding → Content → Margin → Border",
      "Border → Content → Padding → Margin"
    ],
    correct: "Content → Padding → Border → Margin"
  },
  {
    id: 42,
    question: "Which property controls the space inside an element, between its content and border?",
    options: ["margin", "padding", "spacing", "gap"],
    correct: "padding"
  },
  {
    id: 43,
    question: "Which property controls the space outside an element's border?",
    options: ["padding", "margin", "border-spacing", "outside"],
    correct: "margin"
  },
  {
    id: 44,
    question: "What does box-sizing: border-box do?",
    options: [
      "Removes the border",
      "Makes width and height include padding and border",
      "Makes the element invisible",
      "Adds extra margin"
    ],
    correct: "Makes width and height include padding and border"
  },
  {
    id: 45,
    question: "Which unit is relative to the root element's font size?",
    options: ["em", "%", "rem", "px"],
    correct: "rem"
  },
  {
    id: 46,
    question: "Which unit is relative to the viewport width?",
    options: ["vh", "vw", "rem", "em"],
    correct: "vw"
  },
  {
    id: 47,
    question: "Which display value makes an element a flex container?",
    options: ["display: block", "display: grid", "display: flex", "display: inline"],
    correct: "display: flex"
  },
  {
    id: 48,
    question: "What does display: none do?",
    options: [
      "Makes the element transparent",
      "Removes the element from the layout",
      "Makes the element smaller",
      "Moves the element behind another element"
    ],
    correct: "Removes the element from the layout"
  },
  {
    id: 49,
    question: "Which position value keeps an element attached to the viewport while scrolling?",
    options: ["relative", "absolute", "fixed", "static"],
    correct: "fixed"
  },
  {
    id: 50,
    question: "An absolutely positioned element is normally positioned relative to:",
    options: [
      "Always the <body>",
      "The nearest positioned ancestor",
      "The nearest <p>",
      "The browser's stylesheet"
    ],
    correct: "The nearest positioned ancestor"
  },
  {
    id: 51,
    question: "What is Flexbox mainly designed for?",
    options: [
      "Creating databases",
      "One-dimensional layouts",
      "Creating HTML documents",
      "Editing images"
    ],
    correct: "One-dimensional layouts"
  },
  {
    id: 52,
    question: "Which property controls the direction of flex items?",
    options: ["flex-direction", "flex-position", "direction-flex", "flex-flow-direction"],
    correct: "flex-direction"
  },
  {
    id: 53,
    question: "Which property controls alignment along the main axis in Flexbox?",
    options: ["align-items", "justify-content", "align-content", "main-align"],
    correct: "justify-content"
  },
  {
    id: 54,
    question: "Which property controls alignment along the cross axis in a typical row-based flex container?",
    options: ["justify-content", "align-items", "flex-direction", "cross-axis"],
    correct: "align-items"
  },
  {
    id: 55,
    question: "Which property creates space between Flexbox or Grid items without adding margins to the individual children?",
    options: ["spacing", "margin-gap", "gap", "item-space"],
    correct: "gap"
  },
  {
    id: 56,
    question: "CSS Grid is primarily designed for:",
    options: [
      "Two-dimensional layouts",
      "Audio processing",
      "Form validation",
      "HTML document structure"
    ],
    correct: "Two-dimensional layouts"
  },
  {
    id: 57,
    question: "Which property defines the columns of a CSS Grid?",
    options: ["grid-columns", "grid-template-columns", "columns-grid", "grid-column-layout"],
    correct: "grid-template-columns"
  },
  {
    id: 58,
    question: "Which CSS declaration creates three equal-width grid columns?",
    options: [
      "grid-template-columns: 3;",
      "grid-template-columns: repeat(3, 1fr);",
      "grid-columns: equal(3);",
      "columns: 1fr 1fr 1fr 1fr;"
    ],
    correct: "grid-template-columns: repeat(3, 1fr);"
  },
  {
    id: 59,
    question: "Which CSS feature is commonly used to apply different styles at different screen sizes?",
    options: ["Variables", "Media queries", "Pseudo-elements", "Transitions"],
    correct: "Media queries"
  },
  {
    id: 60,
    question: "Which of the following is the most appropriate approach for creating a responsive website?",
    options: [
      "Use fixed widths everywhere",
      "Design only for desktop and ignore mobile",
      "Use flexible layouts, responsive units, media queries, Flexbox/Grid, and responsive images",
      "Create a separate HTML page for every screen size"
    ],
    correct: "Use flexible layouts, responsive units, media queries, Flexbox/Grid, and responsive images"
  }
];
