import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    icon: '📊',
    name: 'AWS CSV-to-Parquet Serverless Pipeline',
    desc: 'S3-triggered Lambda & Step Functions (CSV→Parquet) with SES notifications; 60% storage reduction and automated data ingestion.',
    tags: ['AWS Lambda', 'Step Functions', 'S3', 'SES', 'Parquet']
  },
  {
    icon: '⚙️',
    name: 'EKS Cluster Automation with ArgoCD',
    desc: 'Full EKS infrastructure via Terraform; ArgoCD GitOps for automated workload delivery, rollback, and drift detection.',
    tags: ['EKS', 'Terraform', 'ArgoCD', 'GitOps', 'Kubernetes']
  },
  {
    icon: '🐍',
    name: 'FastAPI on ECS Fargate',
    desc: 'Containerized FastAPI on ECS Fargate + ALB + RDS, Terraform-provisioned with GitHub Actions CI/CD; zero-downtime deployments.',
    tags: ['ECS Fargate', 'FastAPI', 'ALB', 'RDS', 'GitHub Actions']
  },
  {
    icon: '📈',
    name: 'Monitoring & Observability Stack',
    desc: 'Prometheus + Grafana dashboards with CloudWatch alarms for system reliability metrics and incident detection.',
    tags: ['Prometheus', 'Grafana', 'CloudWatch', 'Observability']
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Key Projects
        </motion.h2>
        <motion.div className="section-line"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={p.name} className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{ y: -6 }}
            >
              <div className="project-icon">{p.icon}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
