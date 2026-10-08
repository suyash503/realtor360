import styles from './AvatarStack.module.css';

interface AvatarStackProps {
  faces: string[];
  extra: number;
  size?: 'sm' | 'md';
  label: string;
  className?: string;
}

/** Overlapping avatars followed by a "+N" bubble. */
export function AvatarStack({ faces, extra, size = 'md', label, className }: AvatarStackProps) {
  const cls = [styles.stack, styles[size], className].filter(Boolean).join(' ');
  return (
    <span className={cls} role="img" aria-label={label}>
      {faces.map((src, i) => (
        <img key={i} src={src} alt="" className={styles.face} />
      ))}
      <span className={`${styles.face} ${styles.more}`} aria-hidden="true">
        +{extra}
      </span>
    </span>
  );
}
