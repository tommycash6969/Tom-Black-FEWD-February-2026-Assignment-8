# FreeLivingDesigns Portfolio

Tom Black - FEWD - February 2026 - Assignment 7

## Vue Contact Form Assignment (April 2026)

This assignment upgrades the contact page from vanilla JavaScript to Vue.js using reusable components, real-time validation, and a submission confirmation modal.

## Implementation Overview

The Vue implementation lives in the contact folder and is split into three files:

- [contact/contact.html](contact/contact.html): Vue app mount point and component usage
- [contact/contactscript.js](contact/contactscript.js): Vue components, validation logic, and app state
- [contact/contact.css](contact/contact.css): Portfolio styling and responsive layout

## How The Vue Components Were Structured

The page uses a parent-child component architecture.

1. Root App
- Created with `createApp(...)` and mounted to `#app`.
- Stores shared state:
	- `isModalOpen`
	- `submittedData`
	- `formPlaceholders`, `formLabels`, `formHelpers`
- Handles form submission and modal closing.

2. ContactForm Component
- Reusable component responsible for input, validation display, and emitting submit data.
- Uses `v-model` for:
	- Name
	- Email
	- Message
- Accepts props to customize content:
	- `heading`
	- `introText`
	- `buttonLabel`
	- `placeholders`
	- `labels`
	- `helpers`
- Emits `submit` with cleaned input values.

3. SubmissionModal Component
- Separate reusable modal that receives data via props:
	- `isOpen`
	- `submittedData`
- Emits `close` to parent.
- Supports close via button, Escape key, and backdrop click.

## How Validation And Modal Interaction Work

Validation is centralized in a `validators` object inside [contact/contactscript.js](contact/contactscript.js).

Rules:
- Name: required, letters and spaces only
- Email: required, valid email pattern
- Message: required, minimum 10 characters

Interaction flow:

1. User types in a field
- `v-model` updates form state.
- `@input` triggers `validateField(...)` for real-time checks.

2. User leaves a field
- `@blur` marks the field as touched.
- Error message appears only when touched and invalid using `v-if`.

3. Submit button state
- Button is bound with `:disabled="!isFormValid()"`.
- Form cannot be submitted until all fields are valid.

4. Successful submit
- ContactForm emits `submit` event with trimmed values.
- Parent updates `submittedData` and opens modal.

5. Modal closing
- Close button emits `close`.
- Escape key emits `close`.
- Clicking outside modal content emits `close`.

## Testing Notes

Testing was done manually in browser across core scenarios:

1. Validation behavior
- Verified empty, invalid, and valid states for all fields.
- Confirmed live feedback updates while typing.

2. Button behavior
- Confirmed submit button remains disabled until form is fully valid.

3. Modal behavior
- Confirmed modal displays submitted name, email, and message.
- Confirmed all close methods work (button, Escape, backdrop).

4. Responsiveness
- Checked mobile and desktop layouts.
- Confirmed form fields, spacing, and modal remain usable across viewport sizes.

5. Basic accessibility
- Confirmed labels are associated to inputs.
- Confirmed `aria-invalid` and `aria-live` are used for feedback semantics.

## Challenges Faced And How They Were Resolved

1. Converting from DOM-driven logic to component state
- Challenge: Existing flow depended on direct element queries and class toggling.
- Resolution: Moved all field and validation status into reactive `formData` and `formState` objects and rendered UI states declaratively.

2. Preventing premature error messages
- Challenge: Real-time validation can feel noisy if errors show before interaction.
- Resolution: Added a `touched` flag per field and showed errors only when `touched && !isValid`.

3. Enforcing valid-only submission clearly
- Challenge: Users needed immediate visual cue about submit readiness.
- Resolution: Bound the submit button disabled state to form validity and added disabled styling in [contact/contact.css](contact/contact.css).

4. Keeping modal behavior robust
- Challenge: Ensure modal closes consistently through multiple interactions.
- Resolution: Centralized close events via emitted `close` event and added Escape/backdrop listeners with cleanup in lifecycle hooks.

5. Making the form reusable
- Challenge: Hardcoded labels/placeholders reduce reuse.
- Resolution: Added props-based customization for text and button labels, passed from root app in [contact/contact.html](contact/contact.html).

6. Submitted message data showing blank in modal
- Challenge: After clicking submit, the modal opened but Name, Email, and Message were blank in the browser.
- Root cause: The parent listener used `@submit` on the component, which conflicted with native form submit behavior and could pass a browser event instead of the form payload object.
- Resolution: Renamed the custom emitted event to `form-submit`, updated the parent listener to `@form-submit`, and added a defensive payload guard in the submit handler so only valid objects are accepted.

## Final Outcome

The contact page now uses Vue.js components with dynamic validation feedback, controlled submission, reusable prop-driven configuration, and a modal confirmation flow that matches the existing portfolio look and feel.

I hope you enjoy the code and am thrilled to be at the final stages of the course.
Warm Regards
Tom Black

