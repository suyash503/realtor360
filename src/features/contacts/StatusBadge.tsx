import type { ContactStatus } from '../../data/contacts';
import styles from './StatusBadge.module.css';

const toneClass: Record<ContactStatus, string> = {
  Active: styles.active,
  'In Progress': styles.progress,
  Converted: styles.converted,
  Cold: styles.cold,
  'Not Interested': styles.lost,
};

export function StatusBadge({ status }: { status: ContactStatus }) {
  return <span className={`${styles.badge} ${toneClass[status]}`}>{status}</span>;
}
