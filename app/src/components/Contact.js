import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { FORMSPREE_ENDPOINT } from '../config/formspree';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();
  const [submitState, setSubmitState] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitState('submitting');
    setSubmitMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        setSubmitState('success');
        setSubmitMessage('Thanks! Your message was sent successfully.');
        return;
      }

      const payload = await response.json().catch(() => null);
      const errorText = payload?.errors?.[0]?.message || 'Sorry, something went wrong while sending your message. Please try again.';
      setSubmitState('error');
      setSubmitMessage(errorText);
    } catch {
      setSubmitState('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    }
  };

  const links = [
    { icon: <FiMail />, label: 'Email', value: 'swethamanoharan2001@gmail.com', href: 'mailto:swethamanoharan2001@gmail.com' },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/swatham', href: 'https://linkedin.com/in/swatham' },
    { icon: <FiGithub />, label: 'GitHub', value: 'github.com/swathamanoharan', href: 'https://github.com/swathamanoharan' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduce ? 0 : 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="section-line"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.2 }}
        />

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: reduce ? 0 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : 0.2 }}
          >
            <h3>Let's <span style={{ color: 'var(--accent2)' }}>Connect</span></h3>
            <p>
              I'm open to DevOps, Cloud Engineering, and infrastructure roles.
              Whether it's a full-time opportunity, consulting, or just a chat
              about cloud tech — feel free to reach out!
            </p>
            <div className="contact-links">
              {links.map(l => (
                <motion.a
                  key={l.label} href={l.href} className="contact-link"
                  target="_blank" rel="noreferrer"
                  whileHover={{ x: reduce ? 0 : 6 }}
                >
                  <div className="contact-link-icon">{l.icon}</div>
                  <div>
                    <div className="contact-link-text">{l.label}</div>
                    <div className="contact-link-value">{l.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduce ? 0 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Tell me about the opportunity..." required />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={submitState === 'submitting'}
                whileHover={{ scale: reduce ? 1 : 1.02 }}
                whileTap={{ scale: reduce ? 1 : 0.98 }}
              >
                {submitState === 'submitting'
                  ? 'Sending...'
                  : <><FiSend /> Message Me</>}
              </motion.button>
              {submitState === 'success' && (
                <p className="form-status success" role="status" aria-live="polite">{submitMessage}</p>
              )}
              {submitState === 'error' && (
                <p className="form-status error" role="alert">{submitMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
