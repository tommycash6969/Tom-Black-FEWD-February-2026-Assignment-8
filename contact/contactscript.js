// ========================================
// VUE CONTACT FORM - Assignment 7
// ========================================
// KEY SECTIONS FOR MARKER:
//   • SECTION 1: Validation Utilities (~lines 20-60)
//   • SECTION 2: Contact Form Component (~lines 70-310)
//   • SECTION 3: Submission Modal Component (~lines 320-410)
//   • SECTION 4: Main Vue Application (~lines 420-490)
// ========================================

const { createApp } = Vue;

/**
 * ========================================
 * SECTION 1: VALIDATION UTILITIES
 * ========================================
 * Purpose: Centralized validation functions for form fields
 * Each validator returns: { valid: boolean, message: string }
 */
const validators = {
  // NAME: Required, at least 2 characters
  name(value) {
    if (!value) {
      return { valid: false, message: 'Name is required' };
    }
    if (value.length < 2) {
      return { valid: false, message: 'Name must be at least 2 characters' };
    }
    return { valid: true, message: '' };
  },

  // EMAIL: Required, valid format
  email(value) {
    if (!value) {
      return { valid: false, message: 'Email is required' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return { valid: false, message: 'Please enter a valid email address' };
    }
    return { valid: true, message: '' };
  },

  // MESSAGE: Required, at least 10 characters
  message(value) {
    if (!value) {
      return { valid: false, message: 'Message is required' };
    }
    if (value.length < 10) {
      return { valid: false, message: 'Message must be at least 10 characters' };
    }
    return { valid: true, message: '' };
  }
};

/**========================================
 * SECTION 2: CONTACT FORM COMPONENT
 * ========================================
 * Purpose: Reusable form component with real-time validation and error feedback

/**
 * ========================================
 * SECTION 2: CONTACT FORM COMPONENT
 * ========================================
 * Purpose: Reusable form component with real-time validation and error feedback
 * 
 * Key Features:
 *   - v-model binding on name, email, message fields for two-way data binding
 *   - v-if conditionals: Error messages show only when touched AND invalid
 *   - Touch state tracking: Prevents showing errors before user interaction
 *   - Disabled submit button: :disabled="!isFormValid()"
 *   - Props: Customizable heading, labels, placeholders, button text
 *   - Emits: form-submit event with { name, email, message } payload to parent
 */
const ContactForm = {
  emits: ['form-submit'],
  template: `
    <form @submit.prevent="handleSubmit" class="contact-form">
      <h2>{{ heading }}</h2>
      <p class="intro-text">{{ introText }}</p>

      <!-- Name Field -->
      <div class="form-group">
        <label for="name">{{ formLabels.name }} <span class="required">*</span></label>
        <input
          id="name"
          v-model="formData.name"
          @input="validateField('name')"
          @blur="markTouched('name')"
          type="text"
          :placeholder="formPlaceholders.name"
          :aria-invalid="errors.name && touched.name"
          :class="getFieldClass('name')"
          required
        />
        <small v-if="!errors.name" class="helper-text">{{ formHelpers.name }}</small>
        <span v-if="errors.name && touched.name" class="error-message">{{ errors.name }}</span>
      </div>

      <!-- Email Field -->
      <div class="form-group">
        <label for="email">{{ formLabels.email }} <span class="required">*</span></label>
        <input
          id="email"
          v-model="formData.email"
          @input="validateField('email')"
          @blur="markTouched('email')"
          type="email"
          :placeholder="formPlaceholders.email"
          :aria-invalid="errors.email && touched.email"
          :class="getFieldClass('email')"
          required
        />
        <small v-if="!errors.email" class="helper-text">{{ formHelpers.email }}</small>
        <span v-if="errors.email && touched.email" class="error-message">{{ errors.email }}</span>
      </div>

      <!-- Message Field -->
      <div class="form-group">
        <label for="message">{{ formLabels.message }} <span class="required">*</span></label>
        <textarea
          id="message"
          v-model="formData.message"
          @input="validateField('message')"
          @blur="markTouched('message')"
          :placeholder="formPlaceholders.message"
          :aria-invalid="errors.message && touched.message"
          :class="getFieldClass('message')"
          rows="6"
          required
        ></textarea>
        <small v-if="!errors.message" class="helper-text">{{ formHelpers.message }}</small>
        <span v-if="errors.message && touched.message" class="error-message">{{ errors.message }}</span>
      </div>

      <!-- Submit Button - Disabled when form has validation errors -->
      <button
        type="submit"
        class="submit-btn"
        :disabled="!isFormValid()"
      >
        {{ buttonLabel }}
      </button>
    </form>
  `,

  // ===== PROPS: Customize form appearance and text =====
  props: {
    heading: {
      type: String,
      default: 'Send us a Message'
    },
    introText: {
      type: String,
      default: 'Fill out the form below and we\'ll get back to you as soon as possible.'
    },
    buttonLabel: {
      type: String,
      default: 'Send Message'
    },
    formPlaceholders: {
      type: Object,
      default: () => ({
        name: 'Enter your full name',
        email: 'Enter your email address',
        message: 'Type your message here...'
      })
    },
    formLabels: {
      type: Object,
      default: () => ({
        name: 'Name',
        email: 'Email',
        message: 'Message'
      })
    },
    formHelpers: {
      type: Object,
      default: () => ({
        name: '(used for naming purpose)',
        email: '(used for contact purpose)',
        message: '(used for detailed response and feedback)'
      })
    }
  },

  // ===== DATA: Local form state, validation errors, and touch tracking =====
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      // Track which fields have been interacted with to control error display
      touched: {
        name: false,
        email: false,
        message: false
      }
    };
  },

  // ===== METHODS: Validation, form state management, and submission =====
  methods: {
    // Run validator for a specific field and store result in errors object
    validateField(fieldName) {
      const value = this.formData[fieldName];
      const result = validators[fieldName](value);
      this.errors[fieldName] = result.message;
    },

    // Mark field as touched (user has interacted with it) to show errors
    markTouched(fieldName) {
      this.touched[fieldName] = true;
    },

    // Return CSS class based on field validity state (for styling)
    getFieldClass(fieldName) {
      if (!this.touched[fieldName]) return '';
      return this.errors[fieldName] ? 'error' : 'valid';
    },

    // Check if entire form is valid (all fields have no errors)
    isFormValid() {
      return !this.errors.name && !this.errors.email && !this.errors.message;
    },

    // Form submission handler: emit data to parent app
    handleSubmit() {
      // Only proceed if form is valid
      if (!this.isFormValid()) return;

      // Emit form-submit event with payload containing form data
      this.$emit('form-submit', { ...this.formData });

      // Reset form state using $nextTick to ensure emit completes first
      this.$nextTick(() => {
        this.resetForm();
      });
    },

    // Clear all form fields, errors, and touch state
    resetForm() {
      this.formData = { name: '', email: '', message: '' };
      this.errors = { name: '', email: '', message: '' };
      this.touched = { name: false, email: false, message: false };
    }
  }
};

/**
 * ========================================
 * SECTION 3: SUBMISSION MODAL COMPONENT
 * ========================================
 * Purpose: Reusable modal that displays submitted form data and handles close interactions
 * 
 * Key Features:
 *   - v-if="isOpen": Conditional rendering (remove from DOM when closed)
 *   - Props: isOpen (boolean), submittedData (object with name, email, message)
 *   - Close methods: Close button @click, Escape key listener, backdrop click listener
 *   - Emits: close event to parent app
 */
const SubmissionModal = {
  emits: ['close'],
  template: `
    <div 
      v-if="isOpen"
      class="modal is-open" 
      role="dialog" 
      aria-labelledby="modal-heading">
      <div class="modal-content">
        <h2 id="modal-heading">Message Submitted</h2>
        <div class="submitted-details">
          <p><strong>Name:</strong> <span>{{ submittedData.name }}</span></p>
          <p><strong>Email:</strong> <span>{{ submittedData.email }}</span></p>
          <p><strong>Message:</strong> <span>{{ submittedData.message }}</span></p>
        </div>
        <button type="button" @click="handleClose" class="close-btn">Close</button>
      </div>
    </div>
  `,

  // ===== PROPS: Receive modal state and submitted data from parent =====
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    submittedData: {
      type: Object,
      default: () => ({ name: '', email: '', message: '' })
    }
  },

  // ===== WATCH: Listen for isOpen changes to attach/remove keyboard and click listeners =====
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.addEventListener('keydown', this.handleEscape);
        document.addEventListener('click', this.handleBackdropClick);
      } else {
        document.removeEventListener('keydown', this.handleEscape);
        document.removeEventListener('click', this.handleBackdropClick);
      }
    }
  },

  // ===== METHODS: Close handlers and event listeners =====
  methods: {
    // Close button handler - emit close event to parent
    handleClose() {
      this.$emit('close');
    },

    // Escape key handler: catch ESC key and emit close event
    handleEscape(e) {
      if (e.key === 'Escape') {
        this.$emit('close');
      }
    },

    // Backdrop click handler: close only if click target is the modal element itself
    handleBackdropClick(e) {
      if (e.target.classList.contains('modal')) {
        this.$emit('close');
      }
    }
  },

  // ===== LIFECYCLE: Clean up event listeners when component is destroyed =====
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscape);
    document.removeEventListener('click', this.handleBackdropClick);
  }
};

/**
 * ========================================
 * SECTION 4: MAIN VUE APPLICATION
 * ========================================
 * Purpose: Root app that manages component communication and page state
 * 
 * Responsibilities:
 *   - Mount ContactForm and SubmissionModal child components
 *   - Store isModalOpen and submittedData across the app
 *   - Handle form-submit event and populate modal data
 *   - Handle modal-close event and update UI
 *   - Set up back link referral logic
 */
createApp({
  // ===== COMPONENT REGISTRATION: Register child components =====
  components: {
    'contact-form': ContactForm,
    'submission-modal': SubmissionModal
  },

  // ===== DATA: Root app state =====
  data() {
    return {
      isModalOpen: false,
      submittedData: {
        name: '',
        email: '',
        message: ''
      },
      // Form customization props passed to ContactForm child
      formPlaceholders: {
        name: 'Enter your full name',
        email: 'Enter your email address',
        message: 'Type your message here...'
      },
      formLabels: {
        name: 'Name',
        email: 'Email',
        message: 'Message'
      },
      formHelpers: {
        name: '(used for naming purpose)',
        email: '(used for contact purpose)',
        message: '(used for detailed response and feedback)'
      }
    };
  },

  // ===== METHODS: Handle child events and coordinate flow =====
  methods: {
    // Receives form-submit event with { name, email, message } payload from ContactForm
    // Clones data defensively into submittedData and opens modal
    handleFormSubmit(formData) {
      // Defensive check: ensure formData is valid object
      if (!formData || typeof formData !== 'object') {
        console.warn('Invalid form data received:', formData);
        return;
      }

      // Clone defensively so modal rendering is independent from form component state
      this.submittedData = {
        name: formData.name || '',
        email: formData.email || '',
        message: formData.message || ''
      };
      this.isModalOpen = true;
    },

    // Receives close event from SubmissionModal component
    closeModal() {
      this.isModalOpen = false;
    },

    // Set up referral logic: always return to the Vue Router Contact route
    setupBackLink() {
      const backLink = document.getElementById('back-link');
      if (backLink) {
        backLink.href = '../router-assignment.html#/contact';
      }
    }
  },

  // ===== LIFECYCLE: Initialize app when mounted to #app element =====
  mounted() {
    this.setupBackLink();
  }
}).mount('#app');

