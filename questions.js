const quizQuestions = [
  // ==========================================
  // SECTION A: HTML (Questions 1–15)
  // HTML assessment
  // ==========================================
  {
    id: 1,
    question: "Which statement most accurately describes the primary role of HTML in web development?",
    options: [
      "It controls the visual appearance and animations of every element.",
      "It defines the structure and meaning of webpage content.",
      "It manages database queries and server authentication.",
      "It determines how a webpage responds to every screen size."
    ],
    correct: "It defines the structure and meaning of webpage content."
  },
  {
    id: 2,
    question: "Why is <!DOCTYPE html> placed at the beginning of a modern HTML document?",
    options: [
      "It creates the root element of the page.",
      "It links the HTML document to an external stylesheet.",
      "It tells the browser to use standards mode for the document.",
      "It displays the document's title in the browser tab."
    ],
    correct: "It tells the browser to use standards mode for the document."
  },
  {
    id: 3,
    question: "Which statement about the <head> element is correct?",
    options: [
      "It contains only content visible at the top of the webpage.",
      "It contains metadata and references to resources such as stylesheets.",
      "It replaces the <body> element when a page has no images.",
      "It is where all visible paragraphs must be placed."
    ],
    correct: "It contains metadata and references to resources such as stylesheets."
  },
  {
    id: 4,
    question: "Which HTML structure is the most appropriate and valid basic document structure?",
    options: [
      "<!DOCTYPE html><html><head><title>Page</title></head><body><h1>Hello</h1></body></html>",
      "<html><body><head><h1>Hello</h1></head><title>Page</title></body></html>",
      "<head><html><title>Page</title><body><h1>Hello</h1></body></html></head>",
      "<!DOCTYPE html><title>Page</title><html><h1>Hello</h1></html>"
    ],
    correct: "<!DOCTYPE html><html><head><title>Page</title></head><body><h1>Hello</h1></body></html>"
  },
  {
    id: 5,
    question: "What is the main difference between an HTML element and an HTML attribute?",
    options: [
      "An element defines content or structure, while an attribute provides additional information about an element.",
      "An attribute always appears outside a tag, while an element appears inside it.",
      "An element is used only for text, while an attribute is used only for images.",
      "They are two names for exactly the same thing."
    ],
    correct: "An element defines content or structure, while an attribute provides additional information about an element."
  },
  {
    id: 6,
    question: "Given <p>One <strong>important</strong> point</p>, which statement is correct?",
    options: [
      "The entire paragraph is a strong element.",
      "Only the word 'important' is inside the strong element.",
      "The strong element is a sibling of the paragraph.",
      "The paragraph cannot contain another element."
    ],
    correct: "Only the word 'important' is inside the strong element."
  },
  {
    id: 7,
    question: "Which statement correctly compares block-level and inline elements in typical browser styling?",
    options: [
      "Inline elements always begin on a new line.",
      "Block elements can never contain other elements.",
      "Block elements typically begin on a new line, while inline elements flow within surrounding text.",
      "Inline elements always occupy the full width of their parent."
    ],
    correct: "Block elements typically begin on a new line, while inline elements flow within surrounding text."
  },
  {
    id: 8,
    question: "Which element is the most appropriate for linking to another webpage?",
    options: [
      "<link href='about.html'>",
      "<a href='about.html'>About</a>",
      "<nav src='about.html'>About</nav>",
      "<url>about.html</url>"
    ],
    correct: "<a href='about.html'>About</a>"
  },
  {
    id: 9,
    question: "Which attribute provides alternative text for an image when the image cannot be seen or loaded, and also supports accessibility?",
    options: [
      "title",
      "src",
      "alt",
      "href"
    ],
    correct: "alt"
  },
  {
    id: 10,
    question: "Which statement about HTML tables is most accurate?",
    options: [
      "<td> defines a table heading in every case.",
      "<tr> defines a table row, while <td> defines a data cell.",
      "<th> is used only to create table borders.",
      "A table must contain exactly three rows."
    ],
    correct: "<tr> defines a table row, while <td> defines a data cell."
  },
  {
    id: 11,
    question: "A form contains <input type='email' required>. What does the required attribute do?",
    options: [
      "It sends the email automatically to a server.",
      "It prevents submission through normal browser validation if the field is empty.",
      "It guarantees that the entered email address belongs to the user.",
      "It converts the field into a password field."
    ],
    correct: "It prevents submission through normal browser validation if the field is empty."
  },
  {
    id: 12,
    question: "Which element is best suited to associate descriptive text with a form control in an accessible way?",
    options: [
      "<legend> without a fieldset in every case",
      "<label for='email'>Email</label> paired with an input whose id is 'email'",
      "<span name='email'>Email</span>",
      "<title>Email</title> inside the input"
    ],
    correct: "<label for='email'>Email</label> paired with an input whose id is 'email'"
  },
  {
    id: 13,
    question: "Which statement about HTML media elements is correct?",
    options: [
      "The <video> element can never contain a <source> element.",
      "The <audio> element is intended only for background music and cannot provide controls.",
      "The <source> element can specify alternative media resources inside supported media elements.",
      "The <img> element can directly play video files."
    ],
    correct: "The <source> element can specify alternative media resources inside supported media elements."
  },
  {
    id: 14,
    question: "Which element is intended to provide a page title that commonly appears in the browser tab?",
    options: [
      "<header>",
      "<h1>",
      "<title>",
      "<caption>"
    ],
    correct: "<title>"
  },
  {
    id: 15,
    question: "A developer wants to style several pages consistently and update their shared design in one place. Which approach best fits that goal?",
    options: [
      "Use inline styles on every element.",
      "Repeat a separate <style> block with identical rules on every page.",
      "Use a shared external CSS stylesheet linked from each page.",
      "Put CSS declarations inside every element's alt attribute."
    ],
    correct: "Use a shared external CSS stylesheet linked from each page."
  },

  // ==========================================
  // SECTION B: CSS (Questions 16–60)
  // Part 1: CSS fundamentals and selectors (Questions 16–25)
  // ==========================================
  {
    id: 16,
    question: `Consider the following CSS:
p {
  color: blue;
}

.note {
  color: green;
}

#intro {
  color: red;
}

An element is written as <p class="note" id="intro">Hello</p>. What is its computed text color?`,
    options: [
      "Blue",
      "Green",
      "Red",
      "It depends on the order of the HTML attributes."
    ],
    correct: "Red"
  },
  {
    id: 17,
    question: "Which selector targets only <li> elements that are direct children of a <ul>?",
    options: [
      "ul li",
      "ul > li",
      "ul + li",
      "ul ~ li"
    ],
    correct: "ul > li"
  },
  {
    id: 18,
    question: `Given this HTML, which elements are selected by article p?
<article>
  <p>First</p>
  <section>
    <p>Second</p>
  </section>
</article>
<p>Third</p>`,
    options: [
      "First only",
      "First and Second only",
      "First, Second, and Third",
      "Second and Third only"
    ],
    correct: "First and Second only"
  },
  {
    id: 19,
    question: "Which selector has the highest specificity?",
    options: [
      "#main .card p",
      ".main .card .text",
      "section article p",
      "p.text"
    ],
    correct: "#main .card p"
  },
  {
    id: 20,
    question: "Two declarations target the same element and property. They have equal specificity, equal importance, and belong to the same cascade origin and layer. Which declaration normally wins?",
    options: [
      "The declaration written first",
      "The declaration written last",
      "The declaration with the shortest selector",
      "The declaration with the fewest properties"
    ],
    correct: "The declaration written last"
  },
  {
    id: 21,
    question: "Which statement correctly describes an external stylesheet?",
    options: [
      "It can style only one HTML element.",
      "It must be placed inside the <body>.",
      "It allows multiple HTML documents to share the same CSS rules.",
      "It cannot be cached by browsers."
    ],
    correct: "It allows multiple HTML documents to share the same CSS rules."
  },
  {
    id: 22,
    question: "Which declaration is valid CSS for setting a red text color and a font size of 20 pixels?",
    options: [
      "color = red; font-size = 20px;",
      "color: red; font-size: 20px;",
      "color(red); font-size(20px);",
      "color: red, font-size: 20px;"
    ],
    correct: "color: red; font-size: 20px;"
  },
  {
    id: 23,
    question: `Consider the following CSS:
.menu li {
  color: blue;
}

.menu > li {
  color: red;
}

Which color applies to the nested list item in this structure?
<ul class="menu">
  <li>Parent
    <ul>
      <li>Child</li>
    </ul>
  </li>
</ul>`,
    options: [
      "The child is red because the child selector always wins.",
      "The child is blue because it matches the descendant selector but not the direct-child selector.",
      "The child is black because neither selector matches it.",
      "Both declarations combine to create purple."
    ],
    correct: "The child is blue because it matches the descendant selector but not the direct-child selector."
  },
  {
    id: 24,
    question: "What is the main difference between inline, internal, and external CSS?",
    options: [
      "They are different CSS languages with different syntax.",
      "They differ primarily in where the CSS rules are written and how they can be organized and reused.",
      "External CSS can style text, but internal CSS cannot.",
      "Inline CSS automatically applies to every page on the website."
    ],
    correct: "They differ primarily in where the CSS rules are written and how they can be organized and reused."
  },
  {
    id: 25,
    question: `A stylesheet contains:
p {
  color: blue;
}

p {
  color: orange;
}

Assuming equal cascade priority, what color will a normal paragraph have?`,
    options: [
      "Blue",
      "Orange",
      "Purple",
      "The browser ignores both declarations."
    ],
    correct: "Orange"
  },

  // ==========================================
  // Part 2: Colors, units, and text styling (Questions 26–32)
  // ==========================================
  {
    id: 26,
    question: "Which color value represents fully opaque pure red?",
    options: [
      "rgb(0, 255, 0)",
      "#0000FF",
      "rgb(255, 0, 0)",
      "rgba(255, 0, 0, 0)"
    ],
    correct: "rgb(255, 0, 0)"
  },
  {
    id: 27,
    question: "What does the alpha value represent in rgba(0, 0, 255, 0.4)?",
    options: [
      "The amount of blue in the color",
      "The transparency level of the color",
      "The font weight of the element",
      "The brightness of the page"
    ],
    correct: "The transparency level of the color"
  },
  {
    id: 28,
    question: "Which statement about HSL colors is correct?",
    options: [
      "Hue represents the color angle, saturation represents color intensity, and lightness represents how light or dark the color is.",
      "Hue specifies transparency, while saturation specifies font size.",
      "HSL can represent only grayscale colors.",
      "Lightness must always be expressed in pixels."
    ],
    correct: "Hue represents the color angle, saturation represents color intensity, and lightness represents how light or dark the color is."
  },
  {
    id: 29,
    question: "If the root element has font-size: 16px, what is the computed font size of an element styled with font-size: 2rem?",
    options: [
      "8px",
      "16px",
      "24px",
      "32px"
    ],
    correct: "32px"
  },
  {
    id: 30,
    question: "A parent element has a width of 800px. A child has width: 50%. Assuming no other constraints, what is the child's content width?",
    options: [
      "200px",
      "400px",
      "600px",
      "800px"
    ],
    correct: "400px"
  },
  {
    id: 31,
    question: "Which statement about em and rem is most accurate?",
    options: [
      "Both always refer to the browser's default font size.",
      "em commonly depends on the relevant element's inherited or parent font size for font-size calculations, while rem is relative to the root element's font size.",
      "rem is relative to viewport width, while em is relative to viewport height.",
      "Neither unit can be used for margins or padding."
    ],
    correct: "em commonly depends on the relevant element's inherited or parent font size for font-size calculations, while rem is relative to the root element's font size."
  },
  {
    id: 32,
    question: `Consider this CSS:
p {
  font-size: 20px;
  line-height: 1.5;
}

What is the computed line-height in pixels, assuming the unitless value is used directly with the computed font size?`,
    options: [
      "10px",
      "20px",
      "30px",
      "40px"
    ],
    correct: "30px"
  },

  // ==========================================
  // Part 3: The CSS box model (Questions 33–39)
  // ==========================================
  {
    id: 33,
    question: `An element has the following styles:
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}

Assuming the default box-sizing: content-box, what is its total horizontal space including both margins?`,
    options: [
      "200px",
      "250px",
      "270px",
      "290px"
    ],
    correct: "270px"
  },
  {
    id: 34,
    question: "What changes when you apply box-sizing: border-box to an element with width: 200px, padding: 20px, and border: 5px solid?",
    options: [
      "The content width becomes 200px, making the outer border width 250px.",
      "The specified 200px width includes the content, padding, and borders.",
      "Margins become part of the specified width.",
      "Padding and borders are removed."
    ],
    correct: "The specified 200px width includes the content, padding, and borders."
  },
  {
    id: 35,
    question: "Which statement about margin and padding is correct?",
    options: [
      "Padding is outside the border, while margin is inside the border.",
      "Margin and padding are interchangeable in all situations.",
      "Padding lies between the content and border, while margin is outside the border.",
      "Margin changes the text color, while padding changes the font size."
    ],
    correct: "Padding lies between the content and border, while margin is outside the border."
  },
  {
    id: 36,
    question: `Consider:
.box {
  width: 300px;
  padding: 15px;
  border: 2px solid;
}

If box-sizing: border-box is applied, what is the content width, assuming no other constraints?`,
    options: [
      "300px",
      "266px",
      "270px",
      "334px"
    ],
    correct: "266px"
  },
  {
    id: 37,
    question: "Two vertically adjacent block elements have bottom and top margins of 30px and 20px respectively. In the ordinary margin-collapsing case, what is the resulting gap?",
    options: [
      "10px",
      "20px",
      "30px",
      "50px"
    ],
    correct: "30px"
  },
  {
    id: 38,
    question: "Which CSS property prevents an element's specified width from including padding and borders in its width calculation?",
    options: [
      "box-sizing: content-box",
      "box-sizing: border-box",
      "display: block",
      "overflow: hidden"
    ],
    correct: "box-sizing: content-box"
  },
  {
    id: 39,
    question: "A developer sets width: 100% on an element and adds horizontal padding and borders. The element overflows its container. Which explanation is most likely when box-sizing is content-box?",
    options: [
      "Percentage widths automatically include all margins and padding.",
      "Padding and borders are added outside the declared content width.",
      "The element ignores its parent width completely.",
      "The browser converts the width to auto."
    ],
    correct: "Padding and borders are added outside the declared content width."
  },

  // ==========================================
  // Part 4: CSS positioning and Flexbox (Questions 40–47)
  // ==========================================
  {
    id: 40,
    question: "An element has position: absolute. Which statement best describes how its position is determined?",
    options: [
      "It is always positioned relative to the viewport.",
      "It is positioned relative to its nearest qualifying positioned ancestor, or the initial containing block if none exists.",
      "It always stays in the normal document flow.",
      "It is always positioned relative to the previous sibling."
    ],
    correct: "It is positioned relative to its nearest qualifying positioned ancestor, or the initial containing block if none exists."
  },
  {
    id: 41,
    question: "What is the main difference between position: relative and position: absolute?",
    options: [
      "Both always remove the element from the normal document flow.",
      "Relative positioning preserves the element's original space in the flow, while absolute positioning generally removes it from the flow.",
      "Absolute positioning works only on images.",
      "Relative positioning cannot use top, left, right, or bottom."
    ],
    correct: "Relative positioning preserves the element's original space in the flow, while absolute positioning generally removes it from the flow."
  },
  {
    id: 42,
    question: `Consider:
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  right: 20px;
}

Assuming the parent establishes the child's containing block, where is the child positioned?`,
    options: [
      "10px below and 20px left of the parent's containing block edges.",
      "10px above and 20px right of the parent.",
      "10px below the viewport and 20px left of the viewport in every case.",
      "At its normal position because absolute positioning ignores offsets."
    ],
    correct: "10px below and 20px left of the parent's containing block edges."
  },
  {
    id: 43,
    question: "Which statement about position: fixed is most accurate?",
    options: [
      "It always scrolls with the document as an ordinary element.",
      "It is generally positioned relative to the viewport, although certain ancestors can establish its containing block.",
      "It always takes up space in the normal document flow.",
      "It can only be used on elements with display: block."
    ],
    correct: "It is generally positioned relative to the viewport, although certain ancestors can establish its containing block."
  },
  {
    id: 44,
    question: "In Flexbox, which property aligns flex items along the main axis?",
    options: [
      "align-items",
      "justify-content",
      "align-content",
      "text-align"
    ],
    correct: "justify-content"
  },
  {
    id: 45,
    question: `Consider:
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

Assuming the default flex-direction: row, how are the items aligned?`,
    options: [
      "Horizontally centered and vertically centered within the container's content box.",
      "Horizontally left-aligned and vertically centered.",
      "Horizontally centered and vertically aligned to the top.",
      "Stacked vertically and centered horizontally."
    ],
    correct: "Horizontally centered and vertically centered within the container's content box."
  },
  {
    id: 46,
    question: "A flex container has flex-direction: column. Which statement is correct?",
    options: [
      "The main axis becomes vertical, so justify-content controls alignment along that axis.",
      "The main axis remains horizontal, so justify-content always controls horizontal alignment.",
      "align-items stops working.",
      "Flex items are automatically removed from the normal document flow."
    ],
    correct: "The main axis becomes vertical, so justify-content controls alignment along that axis."
  },
  {
    id: 47,
    question: "A flex container has three items with flex-grow: 1, flex-grow: 2, and flex-grow: 1. Assuming equal flex bases, no minimum-size constraints, and positive free space, how is the free space distributed?",
    options: [
      "Equally, with each item receiving one-third.",
      "The second item receives half, and each other item receives one-quarter.",
      "The second item receives all the free space.",
      "The first item receives half, and the other two split the remainder."
    ],
    correct: "The second item receives half, and each other item receives one-quarter."
  },

  // ==========================================
  // Part 5: CSS Grid (Questions 48–52)
  // ==========================================
  {
    id: 48,
    question: "Which declaration creates a grid with three equal-width columns?",
    options: [
      "display: grid; grid-template-columns: 1fr 1fr 1fr;",
      "display: flex; grid-columns: 3;",
      "display: grid; grid-template-rows: 1fr 1fr 1fr;",
      "display: block; columns: 3;"
    ],
    correct: "display: grid; grid-template-columns: 1fr 1fr 1fr;"
  },
  {
    id: 49,
    question: "What does the fr unit represent in CSS Grid?",
    options: [
      "A fixed number of pixels",
      "A fraction of the available space distributed among grid tracks",
      "A percentage of the browser's font size",
      "A unit that can only be used for rows"
    ],
    correct: "A fraction of the available space distributed among grid tracks"
  },
  {
    id: 50,
    question: "Which declaration creates as many columns as will fit, each at least 200px wide and otherwise expanding to share available space?",
    options: [
      "grid-template-columns: repeat(3, 200px);",
      "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));",
      "grid-template-columns: auto-fit(200px);",
      "grid-template-columns: 200px auto-fit 1fr;"
    ],
    correct: "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));"
  },
  {
    id: 51,
    question: "Which statement correctly compares Flexbox and CSS Grid?",
    options: [
      "Flexbox is primarily one-dimensional, while Grid supports two-dimensional row-and-column layouts.",
      "Grid works only horizontally, while Flexbox works only vertically.",
      "Flexbox cannot center elements.",
      "Grid cannot create responsive layouts."
    ],
    correct: "Flexbox is primarily one-dimensional, while Grid supports two-dimensional row-and-column layouts."
  },
  {
    id: 52,
    question: `What is the effect of this declaration?
.container {
  display: grid;
  gap: 20px;
}`,
    options: [
      "It adds a 20px border around the container.",
      "It creates 20px spacing between grid rows and columns.",
      "It adds 20px padding to every grid item.",
      "It forces every grid item to be 20px wide."
    ],
    correct: "It creates 20px spacing between grid rows and columns."
  },

  // ==========================================
  // Part 6: Responsive design and media queries (Questions 53–56)
  // ==========================================
  {
    id: 53,
    question: "Which media query applies its rules when the viewport width is 600px or less?",
    options: [
      "@media (min-width: 600px)",
      "@media screen-width <= 600px",
      "@media (max-width: 600px)",
      "@media (width > 600px)"
    ],
    correct: "@media (max-width: 600px)"
  },
  {
    id: 54,
    question: `Consider:
p {
  color: blue;
}

@media (max-width: 600px) {
  p {
    color: red;
  }
}

What color is a paragraph when the viewport width is 500px, assuming no competing declarations?`,
    options: [
      "Blue",
      "Red",
      "Black",
      "The browser alternates between blue and red."
    ],
    correct: "Red"
  },
  {
    id: 55,
    question: "A developer wants a navigation bar to display its links in a row on large screens and stack them vertically on small screens. Which approach is most appropriate?",
    options: [
      "Use JavaScript to rewrite every link's HTML whenever the screen changes, regardless of alternatives.",
      "Use a media query to change the navigation container's layout, such as its flex-direction.",
      "Use position: absolute on every link at every screen size.",
      "Set every link to display: none on small screens without providing an alternative."
    ],
    correct: "Use a media query to change the navigation container's layout, such as its flex-direction."
  },
  {
    id: 56,
    question: "Why is mobile-first CSS often useful?",
    options: [
      "It means desktop layouts never need testing.",
      "It starts with styles for smaller screens and progressively adds or adjusts styles for larger screens.",
      "It automatically makes every image responsive without additional rules.",
      "It removes the need for media queries."
    ],
    correct: "It starts with styles for smaller screens and progressively adds or adjusts styles for larger screens."
  },

  // ==========================================
  // Part 7: Pseudo-classes, pseudo-elements, and integrated reasoning (Questions 57–60)
  // ==========================================
  {
    id: 57,
    question: "Which statement correctly distinguishes a pseudo-class from a pseudo-element?",
    options: [
      "A pseudo-class selects an element based on a state or condition, while a pseudo-element targets a particular part of an element or generates a stylable piece of content.",
      "A pseudo-class creates HTML tags, while a pseudo-element creates CSS files.",
      "A pseudo-class can only target links, while a pseudo-element can only target images.",
      "There is no difference between them."
    ],
    correct: "A pseudo-class selects an element based on a state or condition, while a pseudo-element targets a particular part of an element or generates a stylable piece of content."
  },
  {
    id: 58,
    question: `What does this CSS do?
button:hover {
  background-color: black;
}`,
    options: [
      "It makes every button permanently black after the page loads.",
      "It changes the button's background when the pointer hovers over it, subject to the device and browser's hover behavior.",
      "It creates a new button after each mouse movement.",
      "It changes the text color of every paragraph."
    ],
    correct: "It changes the button's background when the pointer hovers over it, subject to the device and browser's hover behavior."
  },
  {
    id: 59,
    question: `Consider:
p::first-letter {
  font-size: 200%;
  color: red;
}

What is the intended effect?`,
    options: [
      "The first paragraph on the page becomes twice as large.",
      "The first letter of each applicable paragraph is styled with a larger font and red color.",
      "Every letter in every paragraph becomes red.",
      "A literal ::first-letter string appears before every paragraph."
    ],
    correct: "The first letter of each applicable paragraph is styled with a larger font and red color."
  },
  {
    id: 60,
    question: `Consider the following HTML and CSS:
<div class="card">
  <h2>Product</h2>
  <p>Description</p>
  <button>Buy</button>
</div>

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.card h2 {
  grid-column: 1 / -1;
}

.card button:hover {
  background: blue;
}

@media (max-width: 500px) {
  .card {
    grid-template-columns: 1fr;
  }
}

Which statement is correct when the viewport is 450px wide?`,
    options: [
      "The card uses two columns because its original grid declaration overrides the media query.",
      "The card uses one column, and the heading spans the full width of the grid.",
      "The button is always blue, even when the pointer is not hovering over it.",
      "The media query hides the heading and paragraph."
    ],
    correct: "The card uses one column, and the heading spans the full width of the grid."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = quizQuestions;
}
