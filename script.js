// ===================================================
// Website Features - JavaScript
// ===================================================
// 1. Contact Popup Feature: Custom modal on button click
// 2. Emoji Celebration Counter: Big emoji animations
//    with persistent click counters (one vote per session)
// ===================================================

// Track if user has already voted in this session
let hasVotedThisSession = false;

// ===================================================
// CONTACT POPUP FEATURE
// ===================================================

// Function to create and display the contact popup
function showContactPopup() {
  // Create the popup container (backdrop)
  const backdrop = document.createElement('div');
  backdrop.id = 'popup-backdrop';
  backdrop.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
  `;

  // Create the popup modal
  const popupModal = document.createElement('div');
  popupModal.id = 'contact-popup';
  popupModal.style.cssText = `
    background-color: white;
    padding: 24px 18px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    width: min(500px, calc(100vw - 32px));
    box-sizing: border-box;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  `;

  // Add content to the modal
  popupModal.innerHTML = `
    <h2 style="color: #845EC2; margin-top: 0; font-family: 'Oswald', sans-serif;">Get In Touch</h2>
    <p style="color: #333; line-height: 1.6; margin: 15px 0;">
      Thanks for your interest! You can reach me at:
    </p>
    <p style="font-weight: 600; color: #845EC2; font-size: clamp(1rem, 4vw, 1.1rem); margin: 20px 0; overflow-wrap: anywhere; word-break: break-word;">
      <a href="mailto:freelivingdesigns@gmail.com" style="color: #845EC2; text-decoration: underline; text-underline-offset: 2px;">freelivingdesigns@gmail.com</a>
    </p>
    <p style="color: #666; font-size: 0.9em; margin-bottom: 25px;">
      I'd love to hear about your project ideas and discuss how I can help!
    </p>
    <button id="close-popup-btn" style="
      background: linear-gradient(145deg, #ff9a82, #FF8066);
      color: white;
      border: none;
      padding: 10px 25px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      font-weight: 600;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 15px rgba(255, 128, 102, 0.3);
    ">Close</button>
  `;

  // Append the modal to the backdrop
  backdrop.appendChild(popupModal);

  // Append the backdrop to the body
  document.body.appendChild(backdrop);

  // Add event listener to close button
  const closeButton = document.getElementById('close-popup-btn');
  closeButton.addEventListener('click', function() {
    closeContactPopup(backdrop);
  });

  // Close popup when clicking outside the modal
  backdrop.addEventListener('click', function(event) {
    if (event.target === backdrop) {
      closeContactPopup(backdrop);
    }
  });

  // Add hover effect to close button
  closeButton.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 6px 20px rgba(255, 128, 102, 0.4)';
  });

  closeButton.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 15px rgba(255, 128, 102, 0.3)';
  });
}

// Function to close and remove the popup
function closeContactPopup(backdrop) {
  backdrop.style.opacity = '0';
  backdrop.style.transition = 'opacity 0.3s ease';
  setTimeout(function() {
    backdrop.remove();
  }, 300);
}

// ===================================================
// EMOJI CELEBRATION COUNTER FEATURE
// ===================================================

// Function to create and animate large floating emoji
function createCelebrationEmoji(emoji) {
  // Create the celebration emoji container
  const celebrationEmoji = document.createElement('div');
  celebrationEmoji.className = 'celebration-emoji';
  celebrationEmoji.textContent = emoji;
  celebrationEmoji.style.cssText = `
    position: fixed;
    font-size: 120px;
    z-index: 1500;
    pointer-events: none;
    animation: celebrationFloat 2s ease-out forwards;
  `;

  // Random horizontal position across the screen
  const randomX = Math.random() * window.innerWidth;
  celebrationEmoji.style.left = randomX + 'px';
  celebrationEmoji.style.top = window.innerHeight + 'px';

  // Add to body
  document.body.appendChild(celebrationEmoji);

  // Remove after animation completes
  setTimeout(function() {
    celebrationEmoji.remove();
  }, 2000);
}

// Function to update the counter display
function updateCounter(emoji) {
  // Map emoji to counter ID
  const emojiMap = {
    '👍': 'counter-up',
    '😍': 'counter-excited',
    '🎉': 'counter-party'
  };

  const counterId = emojiMap[emoji];
  
  // Get current count from localStorage
  const storageKey = 'emoji-count-' + emoji;
  let count = parseInt(localStorage.getItem(storageKey)) || 0;
  count++;
  
  // Save to localStorage
  localStorage.setItem(storageKey, count);
  
  // Update display
  const counterElement = document.getElementById(counterId);
  if (counterElement) {
    const countSpan = counterElement.querySelector('.count');
    countSpan.textContent = count;
  }
}

// Function to disable all emoji buttons after voting once this session
function disableEmojiButtons() {
  const emojiButtons = document.querySelectorAll('.emoji-btn');
  emojiButtons.forEach(function(button) {
    button.disabled = true;
    button.style.opacity = '0.5';
    button.style.cursor = 'not-allowed';
    button.title = '';
  });
}

// Function to show a persistent status message under vote counters
function showVoteSessionMessage() {
  const voteMessage = document.getElementById('vote-session-message');
  if (voteMessage) {
    voteMessage.textContent = 'You have already voted this session. Reload to vote again.';
  }
}

// Function to load counters from localStorage on page load
function loadCounters() {
  const emojis = ['👍', '😍', '🎉'];
  const emojiMap = {
    '👍': 'counter-up',
    '😍': 'counter-excited',
    '🎉': 'counter-party'
  };

  emojis.forEach(function(emoji) {
    const storageKey = 'emoji-count-' + emoji;
    const count = parseInt(localStorage.getItem(storageKey)) || 0;
    const counterId = emojiMap[emoji];
    const counterElement = document.getElementById(counterId);
    
    if (counterElement) {
      const countSpan = counterElement.querySelector('.count');
      countSpan.textContent = count;
    }
  });
}

// ===================================================
// INITIALIZE ALL FEATURES ON PAGE LOAD
// ===================================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Contact Button
  const contactButton = document.getElementById('contact-btn');
  if (contactButton) {
    contactButton.addEventListener('click', function(event) {
      event.preventDefault();
      showContactPopup();
    });
  }

  // Initialize FAQ accordion behavior
  const faqQuestions = document.querySelectorAll('.faq-list li h3');
  faqQuestions.forEach(function(question) {
    const answer = question.nextElementSibling;
    if (!answer) {
      return;
    }

    // Set initial collapsed state
    answer.style.display = 'none';
    question.classList.add('faq-question');
    question.setAttribute('role', 'button');
    question.setAttribute('tabindex', '0');
    question.setAttribute('aria-expanded', 'false');

    const toggleAnswer = function() {
      const isOpen = answer.style.display === 'block';
      answer.style.display = isOpen ? 'none' : 'block';
      question.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      question.classList.toggle('is-open', !isOpen);
    };

    question.addEventListener('click', toggleAnswer);
    question.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleAnswer();
      }
    });
  });

  // Initialize Emoji Buttons and Counters
  const emojiButtons = document.querySelectorAll('.emoji-btn');
  emojiButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Only allow voting once per session
      if (hasVotedThisSession) {
        return; // Do nothing, user already voted
      }
      
      const emoji = this.getAttribute('data-emoji');
      
      // Create celebration animation (multiple emojis)
      for (let i = 0; i < 5; i++) {
        setTimeout(function() {
          createCelebrationEmoji(emoji);
        }, i * 150); // Stagger the emoji animations
      }
      
      // Update and persist the counter
      updateCounter(emoji);
      
      // Mark that user has voted and disable all buttons
      hasVotedThisSession = true;
      disableEmojiButtons();
      showVoteSessionMessage();
    });
  });

  // Load saved counters from localStorage
  loadCounters();
});
