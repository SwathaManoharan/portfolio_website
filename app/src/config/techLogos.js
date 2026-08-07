import {
  SiAmazonwebservices,
  SiApachekafka,
  SiArgocd,
  SiDocker,
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiPrometheus,
  SiTerraform
} from 'react-icons/si';

export const TECH_LOGOS = [
  { key: 'kubernetes', label: 'Kubernetes', Icon: SiKubernetes },
  { key: 'aws', label: 'AWS', Icon: SiAmazonwebservices },
  { key: 'docker', label: 'Docker', Icon: SiDocker },
  { key: 'terraform', label: 'Terraform', Icon: SiTerraform },
  { key: 'argocd', label: 'ArgoCD', Icon: SiArgocd },
  { key: 'kafka', label: 'Kafka', Icon: SiApachekafka },
  { key: 'github-actions', label: 'GitHub Actions', Icon: SiGithubactions },
  { key: 'prometheus', label: 'Prometheus', Icon: SiPrometheus },
  { key: 'grafana', label: 'Grafana', Icon: SiGrafana },
];
