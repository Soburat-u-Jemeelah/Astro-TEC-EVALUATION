const quizQuestions = [
  // ==========================================
  // SECTION A — HTML
  // HTML Basics (1–10)
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
    question: "What is HTML mainly used for?",
    options: [
      "Styling webpages",
      "Structuring webpage content",
      "Programming databases",
      "Creating animations only"
    ],
    correct: "Structuring webpage content"
  },
  {
    id: 3,
    question: "Which declaration defines an HTML5 document?",
    options: [
      "<html5>",
      "<!DOCTYPE html>",
      "<doctype html5>",
      '<html version="5">'
    ],
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
    question: "Which section contains information about the webpage that is generally not displayed directly on the page?",
    options: ["<body>", "<head>", "<main>", "<footer>"],
    correct: "<head>"
  },
  {
    id: 6,
    question: "Which element contains the visible content of a webpage?",
    options: ["<head>", "<title>", "<body>", "<meta>"],
    correct: "<body>"
  },
  {
    id: 7,
    question: "Which tag defines the title shown on the browser tab?",
    options: ["<head>", "<title>", "<h1>", "<caption>"],
    correct: "<title>"
  },
  {
    id: 8,
    question: "Which tag is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: "<h1>"
  },
  {
    id: 9,
    question: "Which tag is used to create a paragraph?",
    options: ["<text>", "<p>", "<paragraph>", "<para>"],
    correct: "<p>"
  },
  {
    id: 10,
    question: "Which tag creates a line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    correct: "<br>"
  },

  // ==========================================
  // HTML Elements and Attributes (11–20)
  // ==========================================
  {
    id: 11,
    question: "What is an HTML attribute?",
    options: [
      "A CSS property",
      "Additional information provided about an HTML element",
      "A JavaScript function",
      "A webpage"
    ],
    correct: "Additional information provided about an HTML element"
  },
  {
    id: 12,
    question: "Which attribute is used to provide alternative text for an image?",
    options: ["src", "title", "alt", "text"],
    correct: "alt"
  },
  {
    id: 13,
    question: "Which attribute specifies the path to an image?",
    options: ["href", "src", "path", "link"],
    correct: "src"
  },
  {
    id: 14,
    question: "Which tag is used to display an image?",
    options: ["<picture>", "<img>", "<image>", "<src>"],
    correct: "<img>"
  },
  {
    id: 15,
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: "<a>"
  },
  {
    id: 16,
    question: "Which attribute specifies the destination of a hyperlink?",
    options: ["src", "link", "href", "url"],
    correct: "href"
  },
  {
    id: 17,
    question: 'What does target="_blank" generally do?',
    options: [
      "Opens the link in a new browsing context/tab",
      "Deletes the link",
      "Opens the link in the same page",
      "Makes the link bold"
    ],
    correct: "Opens the link in a new browsing context/tab"
  },
  {
    id: 18,
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: "<ul>"
  },
  {
    id: 19,
    question: "Which tag creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<order>"],
    correct: "<ol>"
  },
  {
    id: 20,
    question: "Which tag represents an item inside a list?",
    options: ["<item>", "<list-item>", "<li>", "<i>"],
    correct: "<li>"
  },

  // ==========================================
  // Semantic HTML (21–28)
  // ==========================================
  {
    id: 21,
    question: "What does semantic HTML mean?",
    options: [
      "Using elements that clearly describe their meaning and purpose",
      "Using only CSS",
      "Using JavaScript inside HTML",
      "Using colorful HTML elements"
    ],
    correct: "Using elements that clearly describe their meaning and purpose"
  },
  {
    id: 22,
    question: "Which element is commonly used for the main navigation links?",
    options: ["<navigation>", "<nav>", "<menu-bar>", "<links>"],
    correct: "<nav>"
  },
  {
    id: 23,
    question: "Which semantic element represents the main content of a webpage?",
    options: ["<main>", "<content>", "<body-content>", "<section-main>"],
    correct: "<main>"
  },
  {
    id: 24,
    question: "Which element is commonly used for the bottom section of a webpage?",
    options: ["<bottom>", "<footer>", "<end>", "<down>"],
    correct: "<footer>"
  },
  {
    id: 25,
    question: "Which element is commonly used for introductory content or a website's top section?",
    options: ["<header>", "<top>", "<intro>", "<heading>"],
    correct: "<header>"
  },
  {
    id: 26,
    question: "Which element is used to represent a standalone piece of content?",
    options: ["<article>", "<content>", "<post-content>", "<standalone>"],
    correct: "<article>"
  },
  {
    id: 27,
    question: "Which element is used to group related content into a section?",
    options: ["<section>", "<group>", "<div-section>", "<part>"],
    correct: "<section>"
  },
  {
    id: 28,
    question: "Which HTML element is a generic block-level container?",
    options: ["<span>", "<div>", "<container>", "<block>"],
    correct: "<div>"
  },

  // ==========================================
  // HTML Tables (29–33)
  // ==========================================
  {
    id: 29,
    question: "Which tag creates an HTML table?",
    options: ["<table>", "<tab>", "<data>", "<grid>"],
    correct: "<table>"
  },
  {
    id: 30,
    question: "Which tag represents a table row?",
    options: ["<td>", "<tr>", "<row>", "<th>"],
    correct: "<tr>"
  },
  {
    id: 31,
    question: "Which tag represents a normal table cell?",
    options: ["<cell>", "<td>", "<tr>", "<data>"],
    correct: "<td>"
  },
  {
    id: 32,
    question: "Which tag represents a table header cell?",
    options: ["<header>", "<th>", "<thead-cell>", "<td-header>"],
    correct: "<th>"
  },
  {
    id: 33,
    question: "Which element groups the main body rows of a table?",
    options: ["<tbody>", "<body>", "<table-body>", "<rows>"],
    correct: "<tbody>"
  },

  // ==========================================
  // HTML Forms (34–40)
  // ==========================================
  {
    id: 34,
    question: "Which element is used to create an HTML form?",
    options: ["<input>", "<form>", "<forms>", "<fieldset-form>"],
    correct: "<form>"
  },
  {
    id: 35,
    question: "Which element is commonly used to accept user input?",
    options: ["<input>", "<text>", "<data>", "<user>"],
    correct: "<input>"
  },
  {
    id: 36,
    question: "Which input type is used for passwords?",
    options: [
      'type="secret"',
      'type="password"',
      'type="hidden-password"',
      'type="protected"'
    ],
    correct: 'type="password"'
  },
  {
    id: 37,
    question: "Which input type is used for an email address?",
    options: [
      'type="mail"',
      'type="email"',
      'type="text-email"',
      'type="address"'
    ],
    correct: 'type="email"'
  },
  {
    id: 38,
    question: "Which attribute makes a form field mandatory?",
    options: ["needed", "required", "must", "validate"],
    correct: "required"
  },
  {
    id: 39,
    question: "Which element is used to create a multi-line text input?",
    options: [
      '<input type="textarea">',
      "<textarea>",
      "<text-box>",
      "<multitext>"
    ],
    correct: "<textarea>"
  },
  {
    id: 40,
    question: "Which element is used to create a dropdown list?",
    options: ["<dropdown>", "<select>", "<option-list>", "<list-select>"],
    correct: "<select>"
  },

  // ==========================================
  // SECTION B — CSS
  // CSS Basics (41–50)
  // ==========================================
  {
    id: 41,
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
    id: 42,
    question: "What is CSS mainly used for?",
    options: [
      "Structuring webpages",
      "Styling and designing webpages",
      "Creating databases",
      "Writing server-side code"
    ],
    correct: "Styling and designing webpages"
  },
  {
    id: 43,
    question: "Which HTML attribute can be used for inline CSS?",
    options: ["css", "style", "design", "styles"],
    correct: "style"
  },
  {
    id: 44,
    question: "Which HTML element is used for internal CSS?",
    options: ["<css>", "<style>", "<stylesheet>", "<design>"],
    correct: "<style>"
  },
  {
    id: 45,
    question: "Which HTML element is used to connect an external CSS file?",
    options: ["<style>", "<css>", "<link>", "<stylesheet>"],
    correct: "<link>"
  },
  {
    id: 46,
    question: "What is the usual file extension for a CSS file?",
    options: [".style", ".css", ".design", ".cs"],
    correct: ".css"
  },
  {
    id: 47,
    question: "Which CSS property changes text color?",
    options: ["text-color", "font-color", "color", "foreground"],
    correct: "color"
  },
  {
    id: 48,
    question: "Which CSS property changes the background color?",
    options: ["background-color", "bg-color", "color-background", "background"],
    correct: "background-color"
  },
  {
    id: 49,
    question: "Which property changes the size of text?",
    options: ["text-size", "font-size", "size", "font-height"],
    correct: "font-size"
  },
  {
    id: 50,
    question: "Which property makes text bold?",
    options: ["font-weight", "text-bold", "font-style", "bold"],
    correct: "font-weight"
  },

  // ==========================================
  // CSS Selectors (51–56)
  // ==========================================
  {
    id: 51,
    question: "Which selector targets all <p> elements?",
    options: [".p", "#p", "p", "*p"],
    correct: "p"
  },
  {
    id: 52,
    question: "Which selector targets an element with the class box?",
    options: ["#box", ".box", "box", "*box"],
    correct: ".box"
  },
  {
    id: 53,
    question: "Which selector targets an element with the ID header?",
    options: [".header", "header", "#header", "*header"],
    correct: "#header"
  },
  {
    id: 54,
    question: "Which selector targets every element?",
    options: ["all", "*", "every", "#all"],
    correct: "*"
  },
  {
    id: 55,
    question: "Which selector has higher specificity between these two?\n\n.box { color: red; }\n\nand\n\n#box { color: blue; }",
    options: [".box", "#box", "They are equal", "Neither"],
    correct: "#box"
  },
  {
    id: 56,
    question: "Which CSS syntax is correct?",
    options: [
      "p { color: red; }",
      "p: color = red;",
      "p(color: red)",
      "p = {color red}"
    ],
    correct: "p { color: red; }"
  },

  // ==========================================
  // CSS Box Model (57–63)
  // ==========================================
  {
    id: 57,
    question: "Which of the following is NOT part of the CSS box model?",
    options: ["Content", "Padding", "Border", "Font"],
    correct: "Font"
  },
  {
    id: 58,
    question: "What does padding control?",
    options: [
      "Space outside the element",
      "Space between content and border",
      "Text size",
      "Border thickness"
    ],
    correct: "Space between content and border"
  },
  {
    id: 59,
    question: "What does margin control?",
    options: [
      "Space outside an element",
      "Space inside an element",
      "Text color",
      "Element height only"
    ],
    correct: "Space outside an element"
  },
  {
    id: 60,
    question: "What does border control?",
    options: [
      "Space between elements",
      "The line surrounding an element",
      "Text alignment",
      "Font size"
    ],
    correct: "The line surrounding an element"
  },
  {
    id: 61,
    question: "Which property controls the width of an element?",
    options: ["element-width", "width", "size-width", "box-width"],
    correct: "width"
  },
  {
    id: 62,
    question: "Which property controls the height of an element?",
    options: ["height", "element-height", "box-height", "size"],
    correct: "height"
  },
  {
    id: 63,
    question: "What does box-sizing: border-box generally do?",
    options: [
      "Includes padding and border within the declared width/height",
      "Removes the border",
      "Removes padding",
      "Makes the element circular"
    ],
    correct: "Includes padding and border within the declared width/height"
  },

  // ==========================================
  // CSS Display and Positioning (64–70)
  // ==========================================
  {
    id: 64,
    question: "Which display value makes an element behave as a block-level element?",
    options: ["inline", "block", "flex", "none"],
    correct: "block"
  },
  {
    id: 65,
    question: "Which display value makes an element behave as an inline element?",
    options: ["inline", "block", "grid", "absolute"],
    correct: "inline"
  },
  {
    id: 66,
    question: "What does display: none do?",
    options: [
      "Makes the element transparent",
      "Removes the element from the layout/display",
      "Makes the element smaller",
      "Changes its color"
    ],
    correct: "Removes the element from the layout/display"
  },
  {
    id: 67,
    question: "Which CSS property is used for positioning elements?",
    options: ["position", "place", "location", "layout"],
    correct: "position"
  },
  {
    id: 68,
    question: "Which position value positions an element relative to its normal position?",
    options: ["absolute", "relative", "fixed", "static-only"],
    correct: "relative"
  },
  {
    id: 69,
    question: "Which position value can position an element relative to its nearest positioned ancestor?",
    options: ["relative", "absolute", "static", "inline"],
    correct: "absolute"
  },
  {
    id: 70,
    question: "Which position value keeps an element fixed relative to the viewport?",
    options: ["absolute", "relative", "fixed", "static"],
    correct: "fixed"
  },

  // ==========================================
  // Flexbox (71–76)
  // ==========================================
  {
    id: 71,
    question: "Which CSS property enables Flexbox?",
    options: [
      "display: flex",
      "flex: display",
      "position: flex",
      "layout: flex"
    ],
    correct: "display: flex"
  },
  {
    id: 72,
    question: "What is the main purpose of Flexbox?",
    options: [
      "Creating and arranging flexible layouts",
      "Creating databases",
      "Adding JavaScript",
      "Compressing images"
    ],
    correct: "Creating and arranging flexible layouts"
  },
  {
    id: 73,
    question: "Which property controls alignment along the main axis in Flexbox?",
    options: [
      "align-items",
      "justify-content",
      "flex-align",
      "main-align"
    ],
    correct: "justify-content"
  },
  {
    id: 74,
    question: "Which property controls alignment along the cross axis?",
    options: [
      "justify-content",
      "align-items",
      "cross-align",
      "item-position"
    ],
    correct: "align-items"
  },
  {
    id: 75,
    question: "Which value centers flex items along the main axis?",
    options: [
      "align-center",
      "center-items",
      "justify-content: center",
      "flex-center"
    ],
    correct: "justify-content: center"
  },
  {
    id: 76,
    question: "Which property changes the direction of flex items?",
    options: [
      "flex-direction",
      "direction-flex",
      "flex-position",
      "item-direction"
    ],
    correct: "flex-direction"
  },

  // ==========================================
  // CSS Grid (77–80)
  // ==========================================
  {
    id: 77,
    question: "Which CSS layout system is designed for two-dimensional layouts?",
    options: ["Flexbox", "Grid", "Inline", "Float"],
    correct: "Grid"
  },
  {
    id: 78,
    question: "How do you enable CSS Grid?",
    options: [
      "display: grid",
      "grid: display",
      "position: grid",
      "layout: grid"
    ],
    correct: "display: grid"
  },
  {
    id: 79,
    question: "Which property defines grid columns?",
    options: [
      "grid-columns",
      "grid-template-columns",
      "columns-grid",
      "template-columns-grid"
    ],
    correct: "grid-template-columns"
  },
  {
    id: 80,
    question: "Which property defines grid rows?",
    options: [
      "grid-template-rows",
      "grid-rows",
      "rows-template",
      "grid-row-template-only"
    ],
    correct: "grid-template-rows"
  },

  // ==========================================
  // Responsive Design (81–84)
  // ==========================================
  {
    id: 81,
    question: "What does responsive web design mean?",
    options: [
      "A website that adapts to different screen sizes",
      "A website that only works on computers",
      "A website without CSS",
      "A website that loads only once"
    ],
    correct: "A website that adapts to different screen sizes"
  },
  {
    id: 82,
    question: "Which CSS feature is commonly used to create responsive layouts based on screen size?",
    options: ["Media queries", "CSS comments", "Variables only", "Animations"],
    correct: "Media queries"
  },
  {
    id: 83,
    question: "Which syntax creates a media query?",
    options: ["@media", "@screen", "@responsive", "@device"],
    correct: "@media"
  },
  {
    id: 84,
    question: "Which viewport setting is commonly placed in the HTML <head> for responsive webpages?",
    options: [
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta responsive="true">',
      '<viewport width="device">',
      '<responsive screen="mobile">'
    ],
    correct: '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
  },

  // ==========================================
  // SECTION C — BOOTSTRAP
  // Bootstrap Basics (85–90)
  // ==========================================
  {
    id: 85,
    question: "What is Bootstrap?",
    options: [
      "A JavaScript programming language",
      "A CSS framework",
      "A database",
      "An operating system"
    ],
    correct: "A CSS framework"
  },
  {
    id: 86,
    question: "What is one major benefit of Bootstrap?",
    options: [
      "It provides ready-made styles and components",
      "It replaces HTML",
      "It replaces JavaScript completely",
      "It creates databases automatically"
    ],
    correct: "It provides ready-made styles and components"
  },
  {
    id: 87,
    question: "Which class is commonly used to create a Bootstrap container?",
    options: [".box", ".container", ".wrapper", ".bootstrap-container"],
    correct: ".container"
  },
  {
    id: 88,
    question: "Which Bootstrap class creates a full-width container?",
    options: [
      ".container-full",
      ".container-fluid",
      ".fluid-container",
      ".full-container"
    ],
    correct: ".container-fluid"
  },
  {
    id: 89,
    question: "Bootstrap's grid system is based primarily on how many columns?",
    options: ["6", "10", "12", "24"],
    correct: "12"
  },
  {
    id: 90,
    question: "Which class creates a Bootstrap row?",
    options: [".line", ".row", ".grid-row", ".bootstrap-row"],
    correct: ".row"
  },

  // ==========================================
  // Bootstrap Grid (91–94)
  // ==========================================
  {
    id: 91,
    question: "Which class creates a column that occupies 6 of Bootstrap's 12 columns?",
    options: [".col-6", ".column-6", ".grid-6", ".col-md"],
    correct: ".col-6"
  },
  {
    id: 92,
    question: "If a row contains .col-4, .col-4, and .col-4, how many columns are occupied?",
    options: ["4", "8", "12", "16"],
    correct: "12"
  },
  {
    id: 93,
    question: "What does .col-12 represent in Bootstrap's grid?",
    options: [
      "Half the row",
      "One-quarter of the row",
      "The full 12-column width",
      "Twelve separate rows"
    ],
    correct: "The full 12-column width"
  },
  {
    id: 94,
    question: "What is the purpose of responsive Bootstrap classes such as .col-md-6?",
    options: [
      "They control column layout at specific responsive breakpoints",
      "They change the database",
      "They create six rows",
      "They only change text color"
    ],
    correct: "They control column layout at specific responsive breakpoints"
  },

  // ==========================================
  // Bootstrap Utilities and Components (95–100)
  // ==========================================
  {
    id: 95,
    question: "Which Bootstrap class creates a primary-colored button?",
    options: [
      ".button-primary",
      ".btn-primary",
      ".primary-button",
      ".button-blue"
    ],
    correct: ".btn-primary"
  },
  {
    id: 96,
    question: "Which class is required as the base class for a Bootstrap button?",
    options: [".button", ".btn", ".bootstrap-btn", ".click"],
    correct: ".btn"
  },
  {
    id: 97,
    question: "Which Bootstrap class adds a margin to an element?",
    options: [".margin", ".m-3", ".space-3", ".margin-3"],
    correct: ".m-3"
  },
  {
    id: 98,
    question: "Which Bootstrap utility class centers text?",
    options: [".center-text", ".text-center", ".align-text", ".text-middle"],
    correct: ".text-center"
  },
  {
    id: 99,
    question: "Which Bootstrap component is commonly used to create a navigation bar?",
    options: ["Navbar", "Navigation-box", "Nav-container-only", "Menu-bar"],
    correct: "Navbar"
  },
  {
    id: 100,
    question: "Which statement best describes the relationship between HTML, CSS, and Bootstrap?",
    options: [
      "HTML structures content, CSS styles it, and Bootstrap provides pre-built CSS components/utilities for faster development.",
      "HTML and CSS are both JavaScript frameworks.",
      "Bootstrap replaces HTML completely.",
      "CSS replaces HTML while Bootstrap replaces JavaScript."
    ],
    correct: "HTML structures content, CSS styles it, and Bootstrap provides pre-built CSS components/utilities for faster development."
  }
];
