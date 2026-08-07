import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-scroll';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay }
});

export default function Hero() {
  const pills = ['AWS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Kafka', 'Docker', 'CI/CD', 'GitOps'];

  return (
    <section id="hero">
      <div className="blob" style={{ width: 600, height: 600, top: -200, left: -200, background: '#7c3aed' }} />
      <div className="blob" style={{ width: 400, height: 400, top: 100, right: -100, background: '#06b6d4' }} />

      <div className="container">
        <div className="hero-grid">
          {/* LEFT */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div {...fadeUp(0.1)} className="hero-badge">
              <span /> Available for opportunities
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="hero-name">
              Swatha<br />Manoharan
            </motion.h1>

            <motion.div {...fadeUp(0.3)} className="hero-role">
              <TypeAnimation
                sequence={[
                  'DevOps Engineer', 2000,
                  'Cloud Architect', 2000,
                  'Kubernetes Specialist', 2000,
                  'Infrastructure Guru', 2000,
                ]}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p {...fadeUp(0.4)} className="hero-desc">
              2+ years of hands-on experience across <strong>AWS, Azure, and GCP</strong>. 
              Specializing in Kubernetes orchestration, Kafka streaming, Terraform IaC, 
              and ArgoCD GitOps. Reduced provisioning time by <strong>70%</strong> and 
              deployment errors by <strong>60%</strong>.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="hero-btns">
              <Link to="contact" smooth duration={600} offset={-70}>
                <button className="btn btn-primary"><FiMail /> Get In Touch</button>
              </Link>
              <Link to="projects" smooth duration={600} offset={-70}>
                <button className="btn btn-outline">View Projects <FiArrowDown /></button>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="hero-stats">
              {[
                { num: '2+', label: 'Years Experience' },
                { num: '70%', label: 'Faster Provisioning' },
                { num: '60%', label: 'Fewer Deploy Errors' },
                { num: '3', label: 'Cloud Platforms' },
              ].map(s => (
                <div key={s.label} className="stat">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-card">
              <motion.div
                className="hero-avatar"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                SM
              </motion.div>
              <div className="hero-card-name">Swatha Manoharan</div>
              <div className="hero-card-role">DevOps & Cloud Engineer</div>
              <div className="tech-pills">
                {pills.map(p => (
                  <motion.span
                    key={p} className="pill"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {p}
                  </motion.span>
                ))}
              </div>
              <div className="cert-badge">
                <span className="cert-icon">☁️</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>AWS Certified</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Solutions Architect – Associate</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                {[
                  { icon: <FiGithub />, href: 'https://github.com/swathamanoharan' },
                  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/swatham' },
                  { icon: <FiMail />, href: 'mailto:swethamanoharan2001@gmail.com' },
                ].map((s, i) => (
                  <motion.a key={i} href={s.href} target="_blank" rel="noreferrer"
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: 'var(--border)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      color: 'var(--muted)', textDecoration: 'none'
                    }}
                    whileHover={{ scale: 1.2, backgroundColor: 'var(--accent)', color: '#fff' }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
