import type { Kpi } from '../../data/dashboard';
import { TrendBadge } from '../../components/TrendBadge/TrendBadge';
import styles from './StatCard.module.css';

export function StatCard({ kpi }: { kpi: Kpi }) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span className={styles.iconWrap}>
          <img src={kpi.icon} alt="" width={28} height={28} />
        </span>
        <h2 className={styles.label}>{kpi.label}</h2>
      </div>
      <div className={styles.body}>
        <p className={styles.value}>{kpi.value}</p>
        <TrendBadge change={kpi.change} trend={kpi.trend} />
      </div>
    </article>
  );
}
