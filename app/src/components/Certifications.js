import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();

  return (
    <section id="certifications" className="section">
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduce ? 0 : 0.6 }}
        >
          Certifications &amp; Education
        </motion.h2>
        <motion.div
          className="section-line"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.2 }}
        />

        <div className="cert-grid">
          <motion.div
            className="cert-card"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.2 }}
            whileHover={{ y: reduce ? 0 : -6 }}
          >
            <div className="cert-logo">☁️</div>
            <div className="cert-name">AWS Certified Solutions Architect</div>
            <div className="cert-issuer">Amazon Web Services</div>
            <span className="cert-status">✓ Valid &amp; Active</span>
          </motion.div>
        </div>

        <motion.div
          className="edu-card"
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.4 }}
        >
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎓</div>
          <h3>B.E. – Electronics &amp; Communication Engineering</h3>
          <p>Sri Ramakrishna Engineering College</p>
          <p className="edu-highlight">CGPA: 8.88 · First Class with Distinction</p>
          <p style={{ color: 'var(--muted)', marginTop: 8, fontSize: '0.85rem' }}>Specialization: IoT</p>
        </motion.div>
      </div>
    </section>
  );
}
