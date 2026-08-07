import {
  SiApachekafka,
  SiArgo,
  SiDocker,
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiPrometheus,
  SiTerraform
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

export const TECH_LOGOS = [
  { key: 'kubernetes', label: 'Kubernetes', Icon: SiKubernetes },
  { key: 'aws', label: 'AWS', Icon: FaAws },
  { key: 'docker', label: 'Docker', Icon: SiDocker },
  { key: 'terraform', label: 'Terraform', Icon: SiTerraform },
  { key: 'argocd', label: 'ArgoCD', Icon: SiArgo },
  { key: 'kafka', label: 'Kafka', Icon: SiApachekafka },
  { key: 'github-actions', label: 'GitHub Actions', Icon: SiGithubactions },
  { key: 'prometheus', label: 'Prometheus', Icon: SiPrometheus },
  { key: 'grafana', label: 'Grafana', Icon: SiGrafana },
];
