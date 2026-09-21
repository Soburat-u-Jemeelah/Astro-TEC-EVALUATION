const quizQuestions = [
  // =========================
  // 00 BEFORE WE BEGIN
  // How It Works / Browser / Editor / Extensions
  // =========================
  {
    id: 1,
    question: "What does a web browser mainly do with an HTML file?",
    options: [
      "Compiles it into a mobile app",
      "Reads and displays it as a web page",
      "Converts it into a database",
      "Uploads it to email automatically",
    ],
    correct: "Reads and displays it as a web page",
  },
  {
    id: 2,
    question: "Which of these is a web browser?",
    options: ["VS Code", "Chrome", "GitHub", "Node.js"],
    correct: "Chrome",
  },
  {
    id: 3,
    question: "What is a code editor used for?",
    options: [
      "Only browsing websites",
      "Writing and editing code files",
      "Hosting websites online",
      "Designing logos only",
    ],
    correct: "Writing and editing code files",
  },
  {
    id: 4,
    question: "Which of these is a popular code editor for web development?",
    options: ["Google Docs", "Visual Studio Code", "Photoshop", "Excel"],
    correct: "Visual Studio Code",
  },
  {
    id: 5,
    question: "What are editor extensions mainly used for?",
    options: [
      "Deleting your project files",
      "Adding extra features to the editor",
      "Replacing the browser",
      "Changing HTML into CSS automatically",
    ],
    correct: "Adding extra features to the editor",
  },

  // =========================
  // 01 COURSE INTRODUCTION
  // =========================
  {
    id: 6,
    question: "HTML stands for:",
    options: [
      "Hyper Text Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
      "Home Tool Markup Language",
    ],
    correct: "HyperText Markup Language",
  },
  {
    id: 7,
    question: "HTML is mainly used to:",
    options: [
      "Style colors and fonts only",
      "Structure the content of a web page",
      "Store passwords securely",
      "Replace JavaScript completely",
    ],
    correct: "Structure the content of a web page",
  },
  {
    id: 8,
    question: "In front-end development, HTML is best described as:",
    options: [
      "The structure of a page",
      "The styling of a page",
      "The database of a page",
      "The server of a page",
    ],
    correct: "The structure of a page",
  },
  {
    id: 9,
    question: "Which file extension is commonly used for HTML files?",
    options: [".css", ".js", ".html", ".json"],
    correct: ".html",
  },

  // =========================
  // 02 HTML PAGE STRUCTURE
  // =========================
  {
    id: 10,
    question: "Which declaration tells the browser the document is HTML5?",
    options: ["<html5>", "<!DOCTYPE html>", "<doctype>", "<meta html>"],
    correct: "<!DOCTYPE html>",
  },
  {
    id: 11,
    question: "Which element is the root element of an HTML page?",
    options: ["<body>", "<head>", "<html>", "<main>"],
    correct: "<html>",
  },
  {
    id: 12,
    question: "Where do you usually put the page title and meta information?",
    options: ["<body>", "<head>", "<footer>", "<section>"],
    correct: "<head>",
  },
  {
    id: 13,
    question: "Where does the visible content of a webpage go?",
    options: ["<head>", "<meta>", "<body>", "<title>"],
    correct: "<body>",
  },
  {
    id: 14,
    question: "Which element sets the text shown on the browser tab?",
    options: ["<header>", "<title>", "<h1>", "<caption>"],
    correct: "<title>",
  },
  {
    id: 15,
    question: "What is the correct basic order of a simple HTML page?",
    options: [
      "<html> → <body> → <head>",
      "<!DOCTYPE html> → <html> → <head> → <body>",
      "<body> → <!DOCTYPE html> → <html>",
      "<head> → <!DOCTYPE html> → <body>",
    ],
    correct: "<!DOCTYPE html> → <html> → <head> → <body>",
  },

  // =========================
  // 03 ELEMENTS, TAGS & ATTRIBUTES
  // =========================
  {
    id: 16,
    question: "In HTML, a tag is usually written with:",
    options: ["Parentheses ()", "Angle brackets <>", "Curly braces {}", "Square brackets []"],
    correct: "Angle brackets <>",
  },
  {
    id: 17,
    question: "What is an HTML element?",
    options: [
      "Only the opening tag",
      "A tag plus its content (and usually a closing tag)",
      "Only a CSS class",
      "Only an image file",
    ],
    correct: "A tag plus its content (and usually a closing tag)",
  },
  {
    id: 18,
    question: "Which is an example of an HTML attribute?",
    options: ["href", "paragraph", "browser", "stylesheet"],
    correct: "href",
  },
  {
    id: 19,
    question: "Attributes are usually written in:",
    options: [
      "The closing tag only",
      "The opening tag",
      "A separate .attr file",
      "The browser address bar",
    ],
    correct: "The opening tag",
  },
  {
    id: 20,
    question: "Which attribute uniquely identifies an element?",
    options: ["class", "id", "src", "alt"],
    correct: "id",
  },
  {
    id: 21,
    question: "Which attribute can be shared by multiple elements for styling or scripting?",
    options: ["id", "class", "charset", "lang"],
    correct: "class",
  },
  {
    id: 22,
    question: "Which of these is a self-closing / void element?",
    options: ["<p>", "<div>", "<img>", "<h1>"],
    correct: "<img>",
  },

  // =========================
  // 04 META TAGS
  // =========================
  {
    id: 23,
    question: "Where should <meta> tags usually be placed?",
    options: ["Inside <body>", "Inside <head>", "After </html>", "Inside <footer>"],
    correct: "Inside <head>",
  },
  {
    id: 24,
    question: "Which meta attribute is commonly used with charset?",
    options: ["name", "content", "charset", "http-src"],
    correct: "charset",
  },
  {
    id: 25,
    question: "What does `<meta charset=\"UTF-8\">` help with?",
    options: [
      "Choosing the page font size",
      "Defining the character encoding",
      "Linking an external stylesheet",
      "Creating a navigation menu",
    ],
    correct: "Defining the character encoding",
  },
  {
    id: 26,
    question: "Which meta tag helps control how a page scales on mobile devices?",
    options: [
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta name="mobile" content="true">',
      "<meta scale=\"phone\">",
      '<meta name="responsive">',
    ],
    correct:
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  },
  {
    id: 27,
    question: "Meta description tags are mainly useful for:",
    options: [
      "Changing button colors",
      "Search engines and page summaries",
      "Creating lists",
      "Embedding videos",
    ],
    correct: "Search engines and page summaries",
  },

  // =========================
  // 05 PARAGRAPHS & HEADINGS
  // =========================
  {
    id: 28,
    question: "Which tag is used for a paragraph?",
    options: ["<para>", "<p>", "<text>", "<paragraph>"],
    correct: "<p>",
  },
  {
    id: 29,
    question: "Which heading tag is the most important / largest by default?",
    options: ["<h6>", "<h3>", "<h1>", "<head>"],
    correct: "<h1>",
  },
  {
    id: 30,
    question: "How many heading levels does HTML provide from h1 to h6?",
    options: ["3", "4", "5", "6"],
    correct: "6",
  },
  {
    id: 31,
    question: "Which heading is usually the least important visually?",
    options: ["<h1>", "<h2>", "<h4>", "<h6>"],
    correct: "<h6>",
  },
  {
    id: 32,
    question: "Why should headings be used in a sensible order (h1, then h2, etc.)?",
    options: [
      "To make the file smaller",
      "For accessibility and clear page structure",
      "Because browsers reject wrong orders",
      "To enable JavaScript automatically",
    ],
    correct: "For accessibility and clear page structure",
  },

  // =========================
  // 06 SEMANTIC ELEMENTS
  // Div & Span / Block & Inline
  // =========================
  {
    id: 33,
    question: "What does a semantic HTML element do?",
    options: [
      "Only adds color to text",
      "Describes the meaning of its content",
      "Hides the content from the browser",
      "Replaces CSS completely",
    ],
    correct: "Describes the meaning of its content",
  },
  {
    id: 34,
    question: "Which of these is a semantic element?",
    options: ["<div>", "<span>", "<header>", "<b>"],
    correct: "<header>",
  },
  {
    id: 35,
    question: "What is <div> mainly used for?",
    options: [
      "A generic block-level container",
      "Playing audio files",
      "Defining the page title",
      "Creating numbered lists only",
    ],
    correct: "A generic block-level container",
  },
  {
    id: 36,
    question: "What is <span> mainly used for?",
    options: [
      "A generic inline container",
      "A full-page section",
      "The document head",
      "An unordered list",
    ],
    correct: "A generic inline container",
  },
  {
    id: 37,
    question: "Which statement about block-level elements is true?",
    options: [
      "They usually start on a new line and take full width",
      "They always sit on the same line as text",
      "They cannot contain other elements",
      "They are only used inside <title>",
    ],
    correct: "They usually start on a new line and take full width",
  },
  {
    id: 38,
    question: "Which of these is typically an inline element?",
    options: ["<div>", "<p>", "<span>", "<section>"],
    correct: "<span>",
  },
  {
    id: 39,
    question: "Which element is commonly used for the main navigation area?",
    options: ["<nav>", "<aside>", "<br>", "<meta>"],
    correct: "<nav>",
  },
  {
    id: 40,
    question: "Which element typically wraps the main unique content of a page?",
    options: ["<main>", "<span>", "<head>", "<link>"],
    correct: "<main>",
  },

  // =========================
  // 07 HTML LISTS
  // =========================
  {
    id: 41,
    question: "Which tag creates an unordered (bulleted) list?",
    options: ["<ol>", "<ul>", "<li>", "<dl>"],
    correct: "<ul>",
  },
  {
    id: 42,
    question: "Which tag creates an ordered (numbered) list?",
    options: ["<ul>", "<ol>", "<list>", "<order>"],
    correct: "<ol>",
  },
  {
    id: 43,
    question: "Which tag is used for each item inside a list?",
    options: ["<item>", "<li>", "<list>", "<ul>"],
    correct: "<li>",
  },
  {
    id: 44,
    question: "In a correct list structure, <li> elements should be placed inside:",
    options: ["<p> only", "<ul> or <ol>", "<img>", "<meta>"],
    correct: "<ul> or <ol>",
  },
  {
    id: 45,
    question: "Which list type is best for step-by-step instructions?",
    options: ["Unordered list <ul>", "Ordered list <ol>", "Only <div>", "Only <span>"],
    correct: "Ordered list <ol>",
  },

  // =========================
  // 08 HTML IMAGES
  // =========================
  {
    id: 46,
    question: "Which tag is used to display an image?",
    options: ["<picture>", "<img>", "<image>", "<src>"],
    correct: "<img>",
  },
  {
    id: 47,
    question: "Which attribute tells the browser where the image file is?",
    options: ["href", "src", "alt", "link"],
    correct: "src",
  },
  {
    id: 48,
    question: "What does the alt attribute provide?",
    options: [
      "Alternative text if the image cannot be shown",
      "The image width only",
      "A CSS animation",
      "The browser tab title",
    ],
    correct: "Alternative text if the image cannot be shown",
  },
  {
    id: 49,
    question: "Why is alt text important?",
    options: [
      "It makes images load faster always",
      "It helps accessibility and SEO",
      "It replaces the need for src",
      "It converts PNG to JPG",
    ],
    correct: "It helps accessibility and SEO",
  },
  {
    id: 50,
    question: "Which is the correct way to add an image?",
    options: [
      '<img src="photo.jpg" alt="A student coding">',
      '<image href="photo.jpg">',
      '<img href="photo.jpg">',
      '<img alt="photo.jpg">',
    ],
    correct: '<img src="photo.jpg" alt="A student coding">',
  },
];
