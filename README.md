# FreeLivingDesigns Portfolio

**Tom Black — FEWD — February 2026 — Assignment 6**
## Contact Form Assignment (April 2026)
---

### What the form does and how it works

I created a standalone contact form page at `contact/contact.html`. The form contains three input fields — name, email, and message — along with a submit button. JavaScript prevents the default browser form submission so the page never reloads. Instead, all three fields are validated on the spot. If every field passes validation, a confirmation modal window appears showing the submitted details. If any field fails, the form stays open and error messages are shown directly below the relevant field.

I also linked the contact form in two places across the main portfolio page. First, I added an Open Contact Form button inside the existing Contact Me popup modal so visitors can go straight to the form from there. Second, I built a full-width image banner section near the bottom of the portfolio page, sitting just before the footer, with a centred button that opens the contact form. The banner uses a custom desktop graphic and a separate mobile graphic that swaps in automatically on smaller screens using a CSS media query.

---

### JavaScript validation I used

All validation logic lives in `contact/contactscript.js`. I wrote a separate named function for each field so each one is self-contained and easy to read.

- **Name** — checked that the field is not empty and that it contains only letters and spaces using the regex `/^[A-Za-z\s]+$/`.
- **Email** — checked that the field is not empty and matches a valid email format using the regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
- **Message** — checked that the field is not empty and that it is at least 10 characters long.

Each validation function is triggered on the `input` event so error messages appear instantly as the user types, without waiting for a submit attempt. When a field passes, the error message is cleared, the border turns green, and the bracketed helper note next to the label disappears. When a field fails, the border turns red, the error message appears below the field, and the helper note returns. This is handled by a shared `setFieldState()` function that adds or removes the `is-valid` and `is-invalid` CSS classes and updates the `aria-invalid` attribute for accessibility.

---

### How the modal interaction functions

When the form is submitted and all three fields have passed validation, JavaScript reads the trimmed values from each input, injects them into the modal display elements using `textContent`, and opens the modal by adding an `is-open` class and setting `aria-hidden` to false.

The modal can be closed in three ways:
1. Clicking the Close button inside the modal
2. Clicking anywhere on the dark backdrop behind the modal
3. Pressing the Escape key

All three methods call the same `closeModal()` function, which removes the `is-open` class and resets `aria-hidden` to true.

---

### File organisation — the contact folder

I made a deliberate decision to group all three contact-related files into a dedicated `contact/` subfolder:

- `contact/contact.html`
- `contact/contact.css`
- `contact/contactscript.js`

I chose this structure because I was not entirely sure at first how the contact scripts would grow or whether they might conflict with the existing `script.js` on the main page. Keeping everything isolated in its own folder meant that if anything needed reworking, it would not affect the main site files at all. It also made the project much easier to navigate in Code Editor, since all three contact files sit together as a clear group rather than being scattered at the root level. The back link in `contact.html` points to `../index.html` and the main page links to `contact/contact.html`, so routing works correctly across the folder boundary.

---

### Decisions and challenges faced

- **Live validation vs submit-only validation** — I chose to validate on the `input` event rather than only on submit because it gives faster, friendlier feedback. The trade-off is that messages can appear while the user is still mid-way through typing, so I made sure errors only show after the field has been touched at least once.
- **Green and red field states** — I added visual outline states so users get immediate colour feedback alongside text error messages. A shared `setFieldState()` helper keeps the logic clean by handling class toggling and `aria-invalid` in one place.
- **Helper text disappearing on valid** — Short bracketed hints next to each label such as "(used for naming purpose)" are wired to disappear as soon as the field turns green, keeping the form tidy once a field is complete.
- **Contact folder path management** — Moving the files into a subfolder meant carefully updating all relative paths. The CSS and JS references inside `contact.html` stayed relative within the folder, but the back link and the links from `index.html` needed `../` and `contact/` prefixes respectively.
- **Banner image responsive swap** — I created two separate banner graphics and used a CSS `max-width: 639px` media query to swap between them, so the image always looks intentional on both desktop and mobile rather than relying on a single image to crop acceptably at all widths.
- **Connecting the contact form to the existing popup** — Adding the Open Contact Form button inside the existing Contact Me popup modal meant updating the `innerHTML` string inside `script.js` carefully, keeping the layout centred with both the new link button and the original close button displayed side by side.
- **Form placement and the banner section** — One challenge I faced was deciding where to surface the contact form link on the main portfolio page. Placing it only inside the navigation popup felt hidden, so I built a dedicated full-width image banner section just above the footer as a second entry point. Getting the banner image to sit correctly took several adjustments to `background-size`, `background-position`, and `min-height` so the graphic filled the space without awkward cropping on either desktop or mobile. I also had to remove an initial dark overlay I had added, because it was blocking the custom graphic I had designed specifically for the banner.
- **Page reload and scroll position on exit** — A problem I noticed was that when a visitor clicked Back to Portfolio from the contact form, they were always dropped back at the very top of the page regardless of where they came from. This was jarring when someone had scrolled down to the bottom banner and clicked the form link from there. I solved this by passing a `?ref=banner` query parameter on the banner button link. When `contactscript.js` loads it reads `URLSearchParams` and if the parameter is present it silently updates the back link href to point to `../index.html#contact-banner`, which scrolls the user back to exactly where they left off. If the form was opened from the top popup instead, no parameter is present so the back link returns to the top of the page as expected. This meant both entry points behave correctly with no extra clicks or visible difference for the user.

---

## Final Submission Checklist — Contact Form Assignment

- `contact/contact.html` created with name, email, message fields and submit button
- `contact/contactscript.js` created and linked correctly to `contact.html`
- `contact/contact.css` created and linked correctly to `contact.html`
- All contact files organised into a dedicated `contact/` subfolder
- JavaScript prevents default form submission
- Live `input` event validation on all three fields
- Name validated as required and letters only
- Email validated as required and correct format
- Message validated as required and minimum 10 characters
- Instant error messages displayed below each field while typing
- Green outline applied to field on valid, red outline on invalid
- Helper text next to labels disappears when field turns valid
- Modal opens on successful submission showing name, email, and message
- Modal closes via close button, backdrop click, and Escape key
- Contact form linked from Contact Me popup button (returns to top)
- Contact form linked from bottom banner button (returns to banner section)
- `?ref=banner` query parameter used to control scroll-back destination
- Desktop and mobile banner graphics implemented with CSS media query swap
- Back to Portfolio link returns user to the correct position on exit
- README updated to explain form behaviour, validation, modal, and all challenges faced

---

## Closing Note

This assignment pushed me to think more carefully about user experience beyond just making things work. Decisions like where to place the form, how to handle navigation back, and how to give meaningful feedback while typing all required me to consider the visitor's journey rather than just the technical requirement. I feel more confident working with JavaScript validation, DOM manipulation, and multi-file project structure after completing this. I am looking forward to continuing to build on these skills in future modules.

Kind Regards,
Tom Black

