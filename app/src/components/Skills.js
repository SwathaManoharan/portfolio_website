import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillData = [
  {
    icon: '☁️', name: 'Cloud (AWS)',
    tags: ['VPC', 'EC2', 'S3', 'EKS', 'IAM', 'Lambda', 'CloudFormation', 'CloudFront', 'Secrets Manager', 'Step Functions', 'EventBridge', 'SQS', 'Route 53', 'CloudWatch', 'CodeBuild']
  },
  {
    icon: '🐳', name: 'Containers & Orchestration',
    tags: ['Docker', 'Kubernetes (EKS)', 'ArgoCD (GitOps)', 'Helm']
  },
  {
    icon: '🔧', name: 'IaC & CI/CD',
    tags: ['Terraform', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD']
  },
  {
    icon: '📡', name: 'Streaming & Monitoring',
    tags: ['Apache Kafka', 'Prometheus', 'Grafana', 'CloudWatch']
  },
  {
    icon: '🔒', name: 'Security & Databases',
    tags: ['DNS Filtering', 'MDM', 'VPN Architecture', 'AWS Secrets Manager', 'PostgreSQL', 'MySQL', 'MongoDB', 'Cosmos DB']
  },
  {
    icon: '💻', name: 'Cloud Platforms & Tools',
    tags: ['AWS', 'Azure', 'GCP', 'Python', 'Go (Basics)', 'Draw.io', 'Architecture Design']
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} ref={ref}
        >
          Technical Skills
        </motion.h2>
        <motion.div className="section-line"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <div className="skills-grid">
          {skillData.map((cat, i) => (
            <motion.div key={cat.name} className="skill-category"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <span className="skill-cat-name">{cat.name}</span>
              </div>
              <div className="skill-tags">
                {cat.tags.map(t => (
                  <motion.span key={t} className="skill-tag"
                    whileHover={{ scale: 1.08, backgroundColor: 'rgba(6,182,212,0.2)' }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
