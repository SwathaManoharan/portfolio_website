import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const jobs = [
  {
    icon: '🌊',
    role: 'DevOps Engineer',
    company: 'BlueOcean Digital India Pvt. Ltd.',
    period: 'Feb 2026 – Present',
    bullets: [
      'Architect and manage production EKS clusters hosting Apache Superset, Kafka, and internal services — deployment, auto-scaling, and rolling updates.',
      'Implemented ArgoCD for GitOps-based continuous delivery with declarative app deployments and automated environment sync.',
      'Designed end-to-end Kafka streaming infrastructure: broker setup, topic partitioning, and consumer-producer workflows for real-time data pipelines.',
      'Engineered DNS-filtering endpoint security restricting unauthorized network access on all company-managed laptops; evaluated MDM platforms and designed VPN-based MDM architecture.',
    ]
  },
  {
    icon: '🚀',
    role: 'Associate DevOps Engineer',
    company: 'BootLabs Technologies',
    period: 'Jan 2024 – Jan 2026',
    bullets: [
      'Built reusable Terraform modules for AWS (VPC, EC2, S3, EKS, IAM, Lambda, CloudFormation, CloudFront/CDN, Secrets Manager, Step Functions, EventBridge, SQS, Route 53, CloudWatch, CodeBuild), Azure & GCP — cutting provisioning time by 70%.',
      'Managed AWS production workloads across EC2, IAM, Lambda, Step Functions, EventBridge, Route 53, S3, EKS, Secrets Manager, CodeBuild, CloudFront, and CloudWatch.',
      'Implemented event-driven architectures via EventBridge, SQS, and Step Functions; built GitHub Actions & GitLab CI/CD pipelines with ArgoCD, reducing deployment errors by 60%.',
      'Deployed Prometheus, Grafana, and CloudWatch monitoring stacks for observability; delivered Azure solutions using App Services, Key Vault, PostgreSQL, and Azure OpenAI.',
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="section">
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduce ? 0 : 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="section-line"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.2 }}
        />

        <div className="timeline">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              className="timeline-item"
              initial={{ opacity: 0, x: reduce ? 0 : -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.2 + i * 0.2 }}
            >
              <div className="timeline-dot">{job.icon}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-role">{job.role}</span>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <div className="timeline-company">{job.company}</div>
                <ul className="timeline-bullets">
                  {job.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: reduce ? 0 : 0.4 + i * 0.2 + j * 0.07 }}
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
