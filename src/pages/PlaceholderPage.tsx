import { Link } from 'react-router-dom';
import styles from './PlaceholderPage.module.css';

/** Sections that exist in the nav but are not part of the Figma handoff. */
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className={styles.page}>
      <h1>{title}</h1>
      <p>This section isn't in the design handoff yet.</p>
      <Link to="/">Back to dashboard</Link>
    </main>
  );
}
