import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const highlights = [
    { icon: '🚀', num: '70%', text: 'Faster Provisioning' },
    { icon: '✅', num: '60%', text: 'Fewer Deploy Errors' },
    { icon: '☁️', num: '3', text: 'Cloud Platforms' },
    { icon: '🔧', num: '15+', text: 'AWS Services Used' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedCard><h2 className="section-title">About Me</h2></AnimatedCard>
        <AnimatedCard delay={0.1}><div className="section-line" /></AnimatedCard>

        <div className="about-grid">
          <AnimatedCard delay={0.2}>
            <div className="about-text">
              <h3>Passionate <span style={{ color: 'var(--accent2)' }}>Cloud & DevOps</span> Engineer</h3>
              <p>
                I'm a DevOps & Cloud Engineer with 2+ years of hands-on experience designing 
                and operating cloud-native infrastructure across AWS, Azure, and GCP. 
                I specialize in Kubernetes orchestration, Apache Kafka event streaming, 
                and GitOps workflows.
              </p>
              <p>
                Currently at BlueOcean Digital, I architect production EKS clusters, 
                implement ArgoCD-driven continuous delivery, and build real-time Kafka 
                data pipelines. Previously at BootLabs Technologies, I authored reusable 
                Terraform modules that cut provisioning time by 70%.
              </p>
              <p>
                I hold an AWS Certified Solutions Architect – Associate certification and 
                a B.E. in Electronics & Communication Engineering (CGPA: 8.88, First Class with Distinction).
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <div className="about-highlights">
              {highlights.map(h => (
                <motion.div
                  key={h.text} className="highlight-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="highlight-icon">{h.icon}</div>
                  <div className="highlight-num">{h.num}</div>
                  <div className="highlight-text">{h.text}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
