import { Card } from '../../components/Card/Card';
import { AvatarStack } from '../../components/AvatarStack/AvatarStack';
import { REMINDERS } from '../../data/dashboard';
import styles from './ReminderCard.module.css';

export function ReminderCard() {
  return (
    <Card title="Reminder" className={styles.card}>
      <ul className={styles.list}>
        {REMINDERS.map((r, i) => (
          <li key={r.title} className={i === 0 ? `${styles.item} ${styles.featured}` : styles.item}>
            <p className={styles.title}>{r.title}</p>
            <p className={styles.description}>{r.description}</p>
            {r.avatars && (
              <AvatarStack
                faces={r.avatars.faces}
                extra={r.avatars.extra}
                size="sm"
                label={`${r.avatars.faces.length + r.avatars.extra} leads`}
              />
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
