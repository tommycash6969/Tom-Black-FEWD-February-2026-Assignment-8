# FreeLivingDesigns Portfolio
**Tom Black — FEWD — February 2026 — Assignment 5**

---

## About This Project

This project is a responsive portfolio website built with semantic HTML, external CSS, and basic JavaScript. For this assignment, I needed to add a JavaScript interaction to my existing site and explain how it works in the README. The aim was to show a basic understanding of JavaScript syntax, functions, event listeners, and DOM manipulation while keeping the feature relevant to the design of my portfolio.

I chose to build three connected JavaScript interactions. The first is a Contact Me popup modal that opens without leaving the page. The second is an emoji-based celebration and vote counter in the footer, where users can click an emoji to trigger an animation and update a visible total. The third is an FAQ accordion where questions can be expanded and collapsed for easier reading. This allowed me to demonstrate beginner JavaScript in a practical way while improving the user experience of the site.

Core files:
- `index.html` — all page content and structure
- `styles.css` — all styling, layout, animation, and responsive rules
- `script.js` — all JavaScript behaviour for the popup, emoji celebration effect, vote counter, session vote lock, and FAQ accordion toggle

The site presents:
- A branded header with custom navigation
- An About Me section with a profile image
- A portfolio section with three featured project videos and thumbnails
- A floating two-step scroll-to-top control for ease of use and accidental "top" presssing.
- A custom Contact Me popup triggered from the navigation
- A footer with an emoji-based feedback rating, celebration animation, persistent counters, and one-vote-per-page-load control
- A dedicated FAQ section with clickable, expandable questions and keyboard-friendly interaction

## JavaScript Implementation: Contact Popup, Emoji Counter, and FAQ Accordion

For this assignment, I added JavaScript interactions in `script.js` to make the site more interactive and to demonstrate core beginner JavaScript skills.

### What the popup or interaction does

- The Contact Me button opens a custom popup modal with my contact details.
- The emoji rating buttons trigger a large celebration animation on screen.
- Each emoji click increases its matching counter under the rating buttons.
- After one vote, the page disables further voting and shows a message telling the user to reload to vote again.
- The total vote counters stay saved using `localStorage`.
- The FAQ section uses clickable question headings to show and hide answers, helping viewers scan only the information they need.

### What user action triggers it

- Clicking the Contact Me button in the navigation opens the popup.
- Clicking any of the emoji buttons in the footer starts the celebration effect and updates the counter.
- Clicking an FAQ question heading opens the related answer, and clicking it again closes it.

### Why I chose that interaction

- I chose a contact popup because it is useful, simple to understand, and relevant to a portfolio site.
- I chose the emoji celebration counter because it gives the page more personality and makes the feedback area feel more interactive.
- I added the FAQ accordion so visitors can move through common questions faster without reading one long text block.
- These features also allowed me to demonstrate event handling, functions, DOM updates, keyboard accessibility, and saved data in a practical way.

### JavaScript tools and techniques I used

- **Variables:** I used variables such as `hasVotedThisSession`, `emoji`, `count`, `storageKey`, and `counterId` to store temporary page state, identify the selected emoji, and keep track of saved totals.
- **Functions:** I split the code into named functions such as `showContactPopup()`, `closeContactPopup()`, `createCelebrationEmoji()`, `updateCounter()`, `disableEmojiButtons()`, `showVoteSessionMessage()`, and `loadCounters()`. This kept the code easier to read and made each task more focused.
- **Event listeners:** I used `addEventListener()` to respond to button clicks, popup close actions, backdrop clicks, and hover effects. This is what makes the page interactive instead of static.
- **DOM manipulation:** I used `document.createElement()`, `appendChild()`, `getElementById()`, `querySelectorAll()`, `querySelector()`, `innerHTML`, and `textContent` to create popup elements, select vote buttons and FAQ headings, and update visible text on the page.
- **Conditional logic:** I used `if` statements to check whether elements exist and to stop users voting more than once per page load.
- **Loops:** I used `forEach()` to attach the same voting behavior to all emoji buttons, and a `for` loop with `setTimeout()` to create the staggered celebration effect.
- **Timing functions:** I used `setTimeout()` both for the popup fade-out removal and for the delayed bursts of celebration emojis.
- **Browser storage:** I used `localStorage.getItem()` and `localStorage.setItem()` so the emoji totals continue to exist even after the page reloads.
- **Responsive styling in JavaScript:** Because the popup is created in JavaScript, I also had to apply responsive inline styles directly in the script, including a flexible modal width, reduced padding on small screens, and text wrapping for the email address.
- **Accessibility attributes:** For FAQ interaction, I added keyboard support with Enter/Space and managed `aria-expanded`, `role`, and `tabindex` states so the accordion is easier to use.

### Challenges and decisions while working with JavaScript

- One of the biggest decisions was moving away from the earlier CSS-only feedback approach. That version could animate and reveal content, but it could not keep a real running total. To fix this, I rebuilt the feedback area with JavaScript so each click could trigger logic, update the DOM, and store data properly.
- Another challenge was deciding how the counters should behave over time. I wanted the totals to keep growing across visits, but I also wanted to prevent repeated clicking in a single page load. I solved this by using two different approaches together: `localStorage` for long-term saved totals, and the `hasVotedThisSession` variable for short-term control during the current page session.
- I also had to make sure the celebration effect felt intentional instead of chaotic. A single large emoji looked too static, so I changed it to multiple emojis appearing in quick sequence using a loop and `setTimeout()`. That gave the footer a more obvious celebration effect without needing advanced JavaScript.
- The contact popup also needed a cleaner close interaction. At first, a single close button would have worked, but it felt better to let users click outside the modal as well. I solved this by attaching an event listener to the backdrop and checking whether the backdrop itself was clicked before closing the popup.
- I found a mobile-specific issue in the contact popup where the email address could become cut off on very small screens. I fixed this by adjusting the popup width to fit within the viewport, reducing the popup padding, and adding text wrapping rules so the email address can break onto a new line instead of overflowing.
- Another issue was user feedback after voting. If the emoji buttons simply disabled with no explanation, it would feel broken. I fixed this by adding a dedicated status message under the counters that appears after one vote and explains that the page must be reloaded to vote again.
- A final challenge was visual alignment on larger screens. The message under the counters did not stay centered properly at first, so I adjusted the layout and styling until the text remained clearly positioned under the voting area across wider screen sizes.
- For the FAQ, a key challenge was keeping it compact but still easy to use. I solved this by making each question heading clickable with a second-click close behavior, then adding keyboard support and visual open/closed indicators (+ / -) so users can quickly understand what is expanded.
- I also adjusted FAQ heading sizing at mobile breakpoints so the question text remains readable without dominating small screens.

### Core JavaScript techniques demonstrated

- Variables and conditionals
- Named functions for reusable behavior
- Event listeners with `addEventListener`
- DOM creation and updates (`createElement`, `appendChild`, `textContent`)
- Class and attribute updates (`classList.toggle`, `setAttribute`) for FAQ open/closed and accessibility state
- Timing control using `setTimeout`
- Browser storage with `localStorage`

### Recent Interaction Updates

- Added a new **FAQ section** below the portfolio area in its own styled content box.
- Implemented **click-to-toggle FAQ questions** so answers open on first click and close on second click, improving readability for visitors.
- Added keyboard-friendly behavior for FAQ toggles (Enter and Space) to improve accessibility.
- Updated the Contact Me popup so the email address is now a **clickable `mailto:` link** for faster direct contact.
- Improved FAQ heading sizing on smaller screens so text remains balanced and easier to scan on mobile devices while still matching section hierarchy.

---

## Final Reflection

This assignment helped me improve how I approach front-end development from a mobile-first perspective. I became more confident using Flexbox and CSS Grid together, structuring semantic HTML, and building interactive features with JavaScript. I am most proud of replacing a complex CSS-only feedback form with a clean, celebratory rating system that provides instant visual feedback and persistent counters, and adding an FAQ accordion that makes long-form content easier to navigate. The interaction updates demonstrate practical JavaScript patterns like DOM creation, event handling, state toggling, accessibility attributes, and data persistence. Going forward, I want to continue exploring more advanced JavaScript interactions while maintaining performance and accessibility. I'm excited to build more complex features in future modules.

## Final Submission Checklist

- `script.js` created and linked correctly to `index.html`
- JavaScript popup interaction completed with Contact Me modal
- Emoji celebration interaction completed with animated on-screen feedback
- Vote counter completed and updates dynamically in the DOM
- `localStorage` used so vote totals persist after page reload
- One-vote-per-page-load session control completed
- Persistent post-vote status message completed
- FAQ section added below portfolio with JavaScript accordion behavior
- FAQ questions toggle open/closed on click and support keyboard activation (Enter/Space)
- Event listeners and named functions used throughout the JavaScript file
- HTML updated where needed to support JavaScript buttons, counters, and message output
- CSS updated where needed to support the popup, celebration animation, FAQ accordion indicators, and responsive FAQ heading sizing
- JavaScript checked for errors and README updated to explain the interaction

With that said, I hope you enjoy the project I present you and am very eager to jump into the next module.
---

Kind Regards,
Tom Black

---


