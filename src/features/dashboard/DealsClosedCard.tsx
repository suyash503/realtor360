import { Card } from '../../components/Card/Card';
import { DEALS_CLOSED } from '../../data/dashboard';
import styles from './DealsClosedCard.module.css';

export function DealsClosedCard() {
  const { closed, inProgress } = DEALS_CLOSED;
  // The design's fill stops at 208 of the 489px track.
  const fill = 208 / 489;
  return (
    <Card title="Total Deals Closed" className={styles.card}>
      <div
        className={styles.track}
        role="meter"
        aria-label="Deals closed"
        aria-valuemin={0}
        aria-valuemax={closed + inProgress}
        aria-valuenow={closed}
      >
        <div className={styles.fill} style={{ width: `${fill * 100}%` }} />
        <span className={styles.marker} style={{ left: `${fill * 100}%` }} />
      </div>
      <div className={styles.totals}>
        <p className={styles.total}>
          <strong>{closed}</strong> Closed Deals
        </p>
        <p className={styles.total}>
          <strong>{inProgress}</strong> On Progress
        </p>
      </div>
    </Card>
  );
}
