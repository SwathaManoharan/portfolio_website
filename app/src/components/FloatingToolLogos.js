import { TECH_LOGOS } from '../config/techLogos';

export default function FloatingToolLogos() {
  return (
    <div className="tool-logo-background" aria-hidden="true">
      {TECH_LOGOS.map(({ key, Icon }, i) => (
        <span
          key={key}
          className={`tool-logo-float tool-logo-${i + 1}`}
          style={{ animationDuration: `${28 + i * 2}s`, animationDelay: `${-i * 1.8}s` }}
        >
          <Icon />
        </span>
      ))}
    </div>
  );
}
