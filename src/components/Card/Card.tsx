import { useId, type ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  /** Rendered at the end of the title row (e.g. an icon button). */
  action?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function Card({ title, action, className, children }: CardProps) {
  const titleId = useId();
  return (
    <section className={className ? `${styles.card} ${className}` : styles.card} aria-labelledby={title ? titleId : undefined}>
      {title && (
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
