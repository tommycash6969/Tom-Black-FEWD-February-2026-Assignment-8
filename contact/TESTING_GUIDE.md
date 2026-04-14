# Vue.js Contact Form - Testing Guide

## Quick Start Testing

### Step 1: Open the Form
1. Navigate to your contact folder
2. Open `contact.html` in your browser
3. You should see the "Contact Form" heading and three input fields

### Step 2: Test Real-Time Validation

#### Test Name Field
1. **Empty field test**: Click outside name field → Should show "Name is required."
2. **Invalid input test**: Type "John123" → Should show "Name must contain letters only."
3. **Valid input test**: Type "John Smith" → Error clears, green border appears

#### Test Email Field
1. **Empty field test**: Click outside email field → Should show "Email is required."
2. **Invalid format test**: Type "invalid.email" → Should show "Enter a valid email format."
3. **Valid input test**: Type "john@example.com" → Error clears, green border appears

#### Test Message Field
1. **Empty field test**: Click outside message field → Should show "Message is required."
2. **Too short test**: Type "Hi there" (8 chars) → Should show "Message must be at least 10 characters."
3. **Valid input test**: Type "Hello, this is a test message" → Error clears, green border appears

### Step 3: Test Form Submission

1. Fill in all fields with valid data:
   - Name: "Jane Doe"
   - Email: "jane@example.com"
   - Message: "This is a test message for the form"

2. Click "Submit" button

3. **Expected result**: Modal should appear showing:
   - Name: Jane Doe
   - Email: jane@example.com
   - Message: This is a test message for the form

### Step 4: Test Modal Interactions

#### Test Close Button
1. Click "Close" button in modal → Modal disappears

#### Test ESC Key
1. Fill and submit form again
2. Press ESC key → Modal should close

#### Test Backdrop Click
1. Fill and submit form again
2. Click outside the modal box (on the gray area) → Modal should close

### Step 5: Test Form Reset
1. After closing modal, check that form fields are empty
2. All error messages should be hidden
3. Field borders should be neutral (no green or red)

---

## Responsive Testing

### Mobile Testing (320px - 480px)
1. Open browser dev tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select iPhone SE or Galaxy A50
4. **Check:**
   - Text is readable without scrolling
   - Input fields are clickable (large enough)
   - Modal fits on screen
   - No horizontal scrolling needed

### Tablet Testing (768px - 1024px)
1. Select iPad or iPad Pro in device toolbar
2. **Check:**
   - Form layout looks balanced
   - Spacing is appropriate
   - Modal is centered and readable
   - All buttons are easily tappable

### Desktop Testing (1024px+)
1. Resize window to full width
2. **Check:**
   - Form has max-width (not stretched)
   - Hover effects work (button changes)
   - All spacing and alignment is correct

---

## Browser Compatibility Testing

### Chrome/Chromium
- [ ] Open address bar, type file path
- [ ] Test all form interactions
- [ ] Test validation messages
- [ ] Test modal functionality
- [ ] Resize window for responsiveness

### Firefox
- [ ] Test complete form workflow
- [ ] Verify visual styling matches
- [ ] Check focus indicators work correctly
- [ ] Verify keyboard navigation (Tab through fields)

### Safari (macOS)
- [ ] Open file in Safari
- [ ] Test form submission
- [ ] Check CSS Grid for modal
- [ ] Verify all colors render correctly

### Edge
- [ ] Similar tests as Chrome
- [ ] Check Vue 3 compatibility
- [ ] Verify console shows no errors

### Mobile Browsers
- [ ] iOS Safari on iPhone
- [ ] Chrome on Android
- [ ] Verify touch interactions work
- [ ] Check that mobile keyboard appears correctly

---

## Accessibility Testing

### Keyboard Navigation
1. **Tab through form:**
   - Start from Back to Portfolio link
   - Tab to Name field → Should show focus indicator
   - Tab to Email field → Should show focus indicator
   - Tab to Message field → Should show focus indicator
   - Tab to Submit button → Should show focus indicator

2. **Enter to submit:**
   - Fill form with valid data
   - Tab to Submit button
   - Press Enter → Form should submit and modal appears

3. **ESC to close modal:**
   - In modal, press ESC → Modal closes

### Screen Reader Testing (if available)
- Use screen reader (NVDA on Windows, JAWS, or VoiceOver on Mac)
- Fields should be announced with labels
- Error messages should be read when focused
- Modal should be announced as dialog

### Color Contrast
1. Right-click → Inspect Element
2. Use browser accessibility inspector
3. **Verify contrast ratios:**
   - Valid (green text): Should be WCAG AA compliant
   - Invalid (red text): Should be WCAG AA compliant
   - Modal background: Should be readable

### Visual Indicators
- [ ] Valid fields have green border
- [ ] Invalid fields have red border
- [ ] Focus state has visible outline
- [ ] Error messages are visible and readable

---

## Advanced Testing Scenarios

### Test 1: Partial Form Submission
1. Fill only Name field with "John"
2. Leave Email and Message empty
3. Click Submit
4. **Expected:** Email and Message errors appear, modal doesn't open

### Test 2: Field by Field Validation
1. Type in Name → Error clears when valid
2. Type in Email → Error clears when valid
3. Type in Message → Error clears when valid
4. All fields should show green borders when complete

### Test 3: Error Correction
1. Type invalid name "John123"
2. Delete characters until "John Smith" remains
3. **Expected:** Error disappears when valid

### Test 4: Large Message Input
1. Type very long message (500+ characters)
2. **Check:**
   - Textarea expands or scrolls
   - Validation still works
   - Modal displays full message correctly
   - No truncation

### Test 5: Special Characters
1. Email: Try "user+tag@example.co.uk" → Should be valid
2. Message: Include emojis, punctuation, quotes → Should submit
3. **Check:** Data displays correctly in modal

---

## Console Testing

### Check for JavaScript Errors
1. Open DevTools (F12)
2. Go to Console tab
3. **Should see:**
   - No red error messages
   - Vue app mounted message (if configured)
   - No warnings about accessibility

### Check Network Requests
1. Go to Network tab
2. Reload page
3. **Should see:**
   - contact.html (main document)
   - contact.css (stylesheet)
   - contactscript.js (Vue script)
   - vue.global.js (CDN script)
   - All should have 200 status (successful)

---

## Performance Testing

### Load Time
1. Open DevTools → Application → Clear storage
2. Hard refresh the page (Ctrl+Shift+R)
3. **Check:**
   - Page should load in < 2 seconds
   - Vue should initialize quickly
   - Form should be interactive immediately

### Interaction Responsiveness
1. Fill form with valid data
2. Click Submit
3. **Check:** Modal appears instantly (no lag)

### Modal Performance
1. Open and close modal multiple times
2. **Check:** No performance degradation
3. Memory usage stays stable

---

## Testing Checklist Summary

### Must Pass ✅
- [ ] Form displays correctly
- [ ] All validation messages appear
- [ ] v-model binding works (real-time input)
- [ ] v-if conditionals work (error messages, modal)
- [ ] Form validates correctly before submit
- [ ] Modal appears with submitted data
- [ ] Modal closes via button
- [ ] Modal closes via ESC key
- [ ] Modal closes via backdrop click
- [ ] Form resets after submission
- [ ] Works on mobile (responsive)
- [ ] Works on desktop
- [ ] Works in Chrome and Firefox
- [ ] No console errors
- [ ] Keyboard navigation works
- [ ] Form is accessible

### Nice to Have ✨
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Touch gestures work smoothly
- [ ] Focus indicators visible
- [ ] Color contrast is good
- [ ] Passes WCAG AA standards

---

## Troubleshooting

### Form doesn't show
**Solution:** Check that Vue CDN is loading in Network tab

### Validation doesn't work
**Solution:** 
- Refresh page (Ctrl+Shift+R)
- Check Console for JavaScript errors
- Verify ContactForm component renders

### Modal doesn't appear
**Solution:**
- Check DevTools → Elements tab
- Verify modal-content div is in DOM
- Check isModalOpen data property in Console

### Styles look wrong
**Solution:**
- Hard refresh page (Ctrl+Shift+R)
- Clear cache if needed
- Check contact.css is loaded in Network tab

### Vue not defined
**Solution:**
- Check Vue CDN link in HTML
- Verify netletter connectivity to CDN
- Try different CDN or download locally

---

## Notes for Submission

When submitting this assignment, be prepared to demonstrate:
1. ✅ Vue components working (both ContactForm and SubmissionModal)
2. ✅ Real-time validation with v-model
3. ✅ Conditional rendering with v-if
4. ✅ Modal confirmation with submitted data
5. ✅ Responsive design on mobile/tablet/desktop
6. ✅ Cross-browser compatibility
7. ✅ Accessibility features (keyboard, ARIA)
8. ✅ Clean, commented code structure

## Quick Test Command

Run through this in order:
1. Open page → Form visible?
2. Click name field → Enter "123" → Error shows?
3. Type "John Smith" → Error disappears?
4. Tab to email → Leave empty → Error shows?
5. Fill all valid data → Submit → Modal appears?
6. Press ESC → Modal closes?
7. Check form is empty → Success! ✅
