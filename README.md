# FreeLivingDesigns Portfolio
**Tom Black — FEWD — February 2026 — Assignment 4**

---

## About This Project

This project is a responsive portfolio website built with semantic HTML, external CSS, and basic JavaScript. For this assignment, I needed to add a JavaScript interaction to my existing site and explain how it works in the README. The aim was to show a basic understanding of JavaScript syntax, functions, event listeners, and DOM manipulation while keeping the feature relevant to the design of my portfolio.

I chose to build two connected JavaScript interactions. The first is a Contact Me popup modal that opens without leaving the page. The second is an emoji-based celebration and vote counter in the footer, where users can click an emoji to trigger an animation and update a visible total. This allowed me to demonstrate beginner JavaScript in a practical way while improving the user experience of the site.

Core files:
- `index.html` — all page content and structure
- `styles.css` — all styling, layout, animation, and responsive rules
- `script.js` — all JavaScript behaviour for the popup, emoji celebration effect, vote counter, and session vote lock

The site presents:
- A branded header with custom navigation
- An About Me section with a profile image
- A portfolio section with two featured WordPress project videos and thumbnails
- A floating two-step scroll-to-top control for ease of use and accidental "top" presssing.
- A custom Contact Me popup triggered from the navigation
- A footer with an emoji-based feedback rating, celebration animation, persistent counters, and one-vote-per-page-load control

## JavaScript Implementation: Contact Popup & Emoji Celebration Counter

For this assignment, I added JavaScript interactions in `script.js` to make the site more interactive and to demonstrate core beginner JavaScript skills.

### What the popup or interaction does

- The Contact Me button opens a custom popup modal with my contact details.
- The emoji rating buttons trigger a large celebration animation on screen.
- Each emoji click increases its matching counter under the rating buttons.
- After one vote, the page disables further voting and shows a message telling the user to reload to vote again.
- The total vote counters stay saved using `localStorage`.

### What user action triggers it

- Clicking the Contact Me button in the navigation opens the popup.
- Clicking any of the emoji buttons in the footer starts the celebration effect and updates the counter.

### Why I chose that interaction

- I chose a contact popup because it is useful, simple to understand, and relevant to a portfolio site.
- I chose the emoji celebration counter because it gives the page more personality and makes the feedback area feel more interactive.
- These features also allowed me to demonstrate event handling, functions, DOM updates, and saved data in a practical way.

### JavaScript tools and techniques I used

- **Variables:** I used variables such as `hasVotedThisSession`, `emoji`, `count`, `storageKey`, and `counterId` to store temporary page state, identify the selected emoji, and keep track of saved totals.
- **Functions:** I split the code into named functions such as `showContactPopup()`, `closeContactPopup()`, `createCelebrationEmoji()`, `updateCounter()`, `disableEmojiButtons()`, `showVoteSessionMessage()`, and `loadCounters()`. This kept the code easier to read and made each task more focused.
- **Event listeners:** I used `addEventListener()` to respond to button clicks, popup close actions, backdrop clicks, and hover effects. This is what makes the page interactive instead of static.
- **DOM manipulation:** I used `document.createElement()`, `appendChild()`, `getElementById()`, `querySelectorAll()`, `querySelector()`, `innerHTML`, and `textContent` to create popup elements, select vote buttons, and update the counter text on the page.
- **Conditional logic:** I used `if` statements to check whether elements exist and to stop users voting more than once per page load.
- **Loops:** I used `forEach()` to attach the same voting behavior to all emoji buttons, and a `for` loop with `setTimeout()` to create the staggered celebration effect.
- **Timing functions:** I used `setTimeout()` both for the popup fade-out removal and for the delayed bursts of celebration emojis.
- **Browser storage:** I used `localStorage.getItem()` and `localStorage.setItem()` so the emoji totals continue to exist even after the page reloads.
- **Responsive styling in JavaScript:** Because the popup is created in JavaScript, I also had to apply responsive inline styles directly in the script, including a flexible modal width, reduced padding on small screens, and text wrapping for the email address.

### Challenges and decisions while working with JavaScript

- One of the biggest decisions was moving away from the earlier CSS-only feedback approach. That version could animate and reveal content, but it could not keep a real running total. To fix this, I rebuilt the feedback area with JavaScript so each click could trigger logic, update the DOM, and store data properly.
- Another challenge was deciding how the counters should behave over time. I wanted the totals to keep growing across visits, but I also wanted to prevent repeated clicking in a single page load. I solved this by using two different approaches together: `localStorage` for long-term saved totals, and the `hasVotedThisSession` variable for short-term control during the current page session.
- I also had to make sure the celebration effect felt intentional instead of chaotic. A single large emoji looked too static, so I changed it to multiple emojis appearing in quick sequence using a loop and `setTimeout()`. That gave the footer a more obvious celebration effect without needing advanced JavaScript.
- The contact popup also needed a cleaner close interaction. At first, a single close button would have worked, but it felt better to let users click outside the modal as well. I solved this by attaching an event listener to the backdrop and checking whether the backdrop itself was clicked before closing the popup.
- I found a mobile-specific issue in the contact popup where the email address could become cut off on very small screens. I fixed this by adjusting the popup width to fit within the viewport, reducing the popup padding, and adding text wrapping rules so the email address can break onto a new line instead of overflowing.
- Another issue was user feedback after voting. If the emoji buttons simply disabled with no explanation, it would feel broken. I fixed this by adding a dedicated status message under the counters that appears after one vote and explains that the page must be reloaded to vote again.
- A final challenge was visual alignment on larger screens. The message under the counters did not stay centered properly at first, so I adjusted the layout and styling until the text remained clearly positioned under the voting area across wider screen sizes.

### Core JavaScript techniques demonstrated

- Variables and conditionals
- Named functions for reusable behavior
- Event listeners with `addEventListener`
- DOM creation and updates (`createElement`, `appendChild`, `textContent`)
- Timing control using `setTimeout`
- Browser storage with `localStorage`

---

## Final Reflection

This assignment helped me improve how I approach front-end development from a mobile-first perspective. I became more confident using Flexbox and CSS Grid together, structuring semantic HTML, and building interactive features with JavaScript. I am most proud of replacing a complex CSS-only feedback form with a clean, celebratory rating system that provides instant visual feedback and persistent counters. The emoji celebration animations add delight while demonstrating practical JavaScript patterns like DOM creation, event handling, and data persistence. Going forward, I want to continue exploring more advanced JavaScript interactions while maintaining performance and accessibility. I'm excited to build more complex features in future modules.

## Final Submission Checklist

- `script.js` created and linked correctly to `index.html`
- JavaScript popup interaction completed with Contact Me modal
- Emoji celebration interaction completed with animated on-screen feedback
- Vote counter completed and updates dynamically in the DOM
- `localStorage` used so vote totals persist after page reload
- One-vote-per-page-load session control completed
- Persistent post-vote status message completed
- Event listeners and named functions used throughout the JavaScript file
- HTML updated where needed to support JavaScript buttons, counters, and message output
- CSS updated where needed to support the popup, celebration animation, and message layout
- JavaScript checked for errors and README updated to explain the interaction

With that said, I hope you enjoy the project I present you and am very eager to jump into Advanced Javascript in the next module.
---

Kind Regards,
Tom Black

---


