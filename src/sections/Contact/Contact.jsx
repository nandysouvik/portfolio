import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [state, handleSubmit] = useForm("xeojyera");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // This will only run when the form is successfully submitted
  if (state.succeeded && !isSubmitted) {
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {isSubmitted ? (
        <p className={styles.successMessage}>Thanks for joining!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              aria-label="Name"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              aria-label="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              aria-label="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="hover btn" type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;