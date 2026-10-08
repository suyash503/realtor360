import type { Trend } from '../../data/dashboard';
import { TrendArrowIcon } from '../icons';
import styles from './TrendBadge.module.css';

export function TrendBadge({ change, trend }: { change: string; trend: Trend }) {
  return (
    <span className={`${styles.badge} ${trend === 'up' ? styles.up : styles.down}`}>
      {change}
      <TrendArrowIcon direction={trend} className={styles.arrow} />
      <span className="visually-hidden">{trend === 'up' ? 'increase' : 'decrease'}</span>
    </span>
  );
}
