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
    question: "What is the main purpose of HTML?",
    options: [
      "To style a webpage",
      "To structure the content of a webpage",
      "To create databases",
      "To make websites responsive"
    ],
    correct: "To structure the content of a webpage"
  },
  {
    id: 3,
    question: "Which declaration is used to specify HTML5?",
    options: ["<html5>", "<!DOCTYPE html>", "<doctype>", "<!HTML>"],
    correct: "<!DOCTYPE html>"
  },
  {
    id: 4,
    question: "Which tag contains the entire HTML document?",
    options: ["<body>", "<head>", "<html>", "<document>"],
    correct: "<html>"
  },
  {
    id: 5,
    question: "Which tag contains the visible content of a webpage?",
    options: ["<head>", "<body>", "<main>", "<content>"],
    correct: "<body>"
  },
  {
    id: 6,
    question: "Which tag is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: "<h1>"
  },
  {
    id: 7,
    question: "Which tag is used to create a paragraph?",
    options: ["<para>", "<paragraph>", "<p>", "<text>"],
    correct: "<p>"
  },
  {
    id: 8,
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: "<a>"
  },
  {
    id: 9,
    question: "Which attribute specifies the destination of a hyperlink?",
    options: ["src", "link", "href", "url"],
    correct: "href"
  },
  {
    id: 10,
    question: "Which tag is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<photo>"],
    correct: "<img>"
  },
  {
    id: 11,
    question: "Which attribute specifies the image source?",
    options: ["href", "src", "source", "link"],
    correct: "src"
  },
  {
    id: 12,
    question: "What is the purpose of the alt attribute?",
    options: [
      "To change image size",
      "To provide alternative text for an image",
      "To change image color",
      "To add a border to an image"
    ],
    correct: "To provide alternative text for an image"
  },
  {
    id: 13,
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: "<ul>"
  },
  {
    id: 14,
    question: "Which tag creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<order>"],
    correct: "<ol>"
  },
  {
    id: 15,
    question: "Which tag represents an item in a list?",
    options: ["<item>", "<list-item>", "<li>", "<i>"],
    correct: "<li>"
  },
  {
    id: 16,
    question: "Which tag creates a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    correct: "<br>"
  },
  {
    id: 17,
    question: "Which element is commonly used as a generic block container?",
    options: ["<span>", "<div>", "<container>", "<section-block>"],
    correct: "<div>"
  },
  {
    id: 18,
    question: "Which element is commonly used as an inline container?",
    options: ["<div>", "<inline>", "<span>", "<text>"],
    correct: "<span>"
  },
  {
    id: 19,
    question: "Which attribute is used to give an element a unique identifier?",
    options: ["class", "id", "name", "unique"],
    correct: "id"
  },
  {
    id: 20,
    question: "Which attribute can be shared by multiple elements?",
    options: ["id", "unique", "class", "element"],
    correct: "class"
  },
  {
    id: 21,
    question: "Which semantic HTML element represents the main navigation of a website?",
    options: ["<navigation>", "<nav>", "<menu>", "<links>"],
    correct: "<nav>"
  },
  {
    id: 22,
    question: "Which semantic element represents the main content of a webpage?",
    options: ["<content>", "<body-content>", "<main>", "<primary>"],
    correct: "<main>"
  },
  {
    id: 23,
    question: "Which element is used for the bottom section of a webpage or section?",
    options: ["<bottom>", "<footer>", "<end>", "<section-footer>"],
    correct: "<footer>"
  },
  {
    id: 24,
    question: "Which element is used to create a form?",
    options: ["<input>", "<form>", "<form-box>", "<data>"],
    correct: "<form>"
  },
  {
    id: 25,
    question: "Which element is used to collect user input?",
    options: ["<input>", "<user-input>", "<text>", "<collect>"],
    correct: "<input>"
  },
  {
    id: 26,
    question: "Which input type is used for passwords?",
    options: [
      'type="secure"',
      'type="password"',
      'type="hidden"',
      'type="private"'
    ],
    correct: 'type="password"'
  },
  {
    id: 27,
    question: "Which input type allows a user to select one option from a group?",
    options: ["checkbox", "radio", "select", "option"],
    correct: "radio"
  },
  {
    id: 28,
    question: "Which input type allows multiple selections?",
    options: ["radio", "multiple", "checkbox", "select"],
    correct: "checkbox"
  },
  {
    id: 29,
    question: "Which HTML element creates a dropdown list?",
    options: ["<dropdown>", "<select>", "<option-list>", "<list>"],
    correct: "<select>"
  },
  {
    id: 30,
    question: "Which element represents an option inside a <select>?",
    options: ["<choice>", "<option>", "<item>", "<select-option>"],
    correct: "<option>"
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
      "Structuring webpage content",
      "Styling webpage content",
      "Creating databases",
      "Writing JavaScript"
    ],
    correct: "Styling webpage content"
  },
  {
    id: 33,
    question: "Which HTML tag is used for internal CSS?",
    options: ["<css>", "<style>", "<stylesheet>", "<design>"],
    correct: "<style>"
  },
  {
    id: 34,
    question: "Which HTML tag is commonly used to connect an external CSS file?",
    options: ["<style>", "<css>", "<link>", "<script>"],
    correct: "<link>"
  },
  {
    id: 35,
    question: "Which attribute specifies the location of an external CSS file?",
    options: ["src", "href", "link", "file"],
    correct: "href"
  },
  {
    id: 36,
    question: "Which CSS property changes the color of text?",
    options: ["text-color", "font-color", "color", "foreground-color"],
    correct: "color"
  },
  {
    id: 37,
    question: "Which property changes an element's background color?",
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
    question: "Which CSS property changes the size of text?",
    options: ["text-size", "font-size", "font-height", "size"],
    correct: "font-size"
  },
  {
    id: 39,
    question: "Which property changes the typeface of text?",
    options: ["font-family", "font-type", "text-family", "typeface"],
    correct: "font-family"
  },
  {
    id: 40,
    question: "Which property makes text bold?",
    options: ["text-bold", "font-weight", "font-bold", "bold"],
    correct: "font-weight"
  },
  {
    id: 41,
    question: "Which CSS property is used to align text?",
    options: ["font-align", "align-text", "text-align", "text-position"],
    correct: "text-align"
  },
  {
    id: 42,
    question: "Which value centers text?",
    options: ["middle", "central", "center", "align-center"],
    correct: "center"
  },
  {
    id: 43,
    question: "Which CSS property controls the space inside an element?",
    options: ["margin", "padding", "spacing", "inside-space"],
    correct: "padding"
  },
  {
    id: 44,
    question: "Which CSS property controls the space outside an element?",
    options: ["padding", "margin", "outside-space", "element-space"],
    correct: "margin"
  },
  {
    id: 45,
    question: "Which CSS property adds a border around an element?",
    options: ["outline", "border", "box-border", "element-border"],
    correct: "border"
  },
  {
    id: 46,
    question: "Which property controls the width of an element?",
    options: ["element-width", "box-width", "width", "size-width"],
    correct: "width"
  },
  {
    id: 47,
    question: "Which property controls the height of an element?",
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
    question: "Which selector selects an element with the class card?",
    options: ["#card", ".card", "card", "@card"],
    correct: ".card"
  },
  {
    id: 50,
    question: "Which selector selects an element with the ID header?",
    options: [".header", "header", "#header", "@header"],
    correct: "#header"
  },
  {
    id: 51,
    question: "What does the universal selector * select?",
    options: ["Only headings", "Only classes", "All elements", "Only IDs"],
    correct: "All elements"
  },
  {
    id: 52,
    question: "Which CSS property controls how an element is displayed?",
    options: ["display", "show", "element-display", "visibility-type"],
    correct: "display"
  },
  {
    id: 53,
    question: "Which value makes an element a flex container?",
    options: [
      "display: flex;",
      "flex: display;",
      "display: flexible;",
      "flex-container: true;"
    ],
    correct: "display: flex;"
  },
  {
    id: 54,
    question: "Which CSS property controls the direction of items in a flex container?",
    options: [
      "flex-direction",
      "direction-flex",
      "flex-flow-direction",
      "item-direction"
    ],
    correct: "flex-direction"
  },
  {
    id: 55,
    question: "Which value makes flex items appear in a row?",
    options: ["horizontal", "row", "line", "inline"],
    correct: "row"
  },
  {
    id: 56,
    question: "Which CSS property is used to create rounded corners?",
    options: ["corner-radius", "border-radius", "radius", "round-border"],
    correct: "border-radius"
  },
  {
    id: 57,
    question: "If the root font size is 16px, what is 2rem?",
    options: ["8px", "16px", "24px", "32px"],
    correct: "32px"
  },
  {
    id: 58,
    question: "What is rem relative to?",
    options: [
      "The parent element's font size",
      "The root element's font size",
      "The viewport width",
      "The element's width"
    ],
    correct: "The root element's font size"
  },
  {
    id: 59,
    question: "Which CSS property controls the spacing between lines of text?",
    options: ["line-spacing", "line-height", "text-spacing", "line-space"],
    correct: "line-height"
  },
  {
    id: 60,
    question: "Which CSS property controls the transparency of an element?",
    options: ["transparent", "visibility", "opacity", "alpha"],
    correct: "opacity"
  }
];
