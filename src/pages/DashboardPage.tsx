import { Card } from '../components/Card/Card';
import { KPIS } from '../data/dashboard';
import { StatCard } from '../features/dashboard/StatCard';
import { LeadSourceChart } from '../features/dashboard/charts/LeadSourceChart';
import { StageBarChart } from '../features/dashboard/charts/StageBarChart';
import { OwnerBarChart } from '../features/dashboard/charts/OwnerBarChart';
import { DealsClosedCard } from '../features/dashboard/DealsClosedCard';
import { PipelineCard } from '../features/dashboard/PipelineCard';
import { ActiveListingCard } from '../features/dashboard/ActiveListingCard';
import { LeadsContactsCard } from '../features/dashboard/LeadsContactsCard';
import { ReminderCard } from '../features/dashboard/ReminderCard';
import { CalendarCard } from '../features/dashboard/CalendarCard';
import styles from './DashboardPage.module.css';

export function DashboardPage() {
  return (
    <main className={styles.page}>
      <h1 className="visually-hidden">Dashboard</h1>
      <div className={styles.main}>
        <div className={styles.kpis}>
          {KPIS.map((k) => (
            <StatCard key={k.label} kpi={k} />
          ))}
        </div>

        <div className={styles.charts}>
          <div className={styles.column}>
            <Card title="Deals by Lead Source" className={`${styles.chartCard} ${styles.tall}`}>
              <LeadSourceChart />
            </Card>
            <Card title="Deals by Sales People by Development" className={`${styles.chartCard} ${styles.owner}`}>
              <OwnerBarChart />
            </Card>
            <DealsClosedCard />
          </div>
          <div className={styles.column}>
            <Card title="Deals by Stages by Development" className={`${styles.chartCard} ${styles.tall} ${styles.stages}`}>
              <StageBarChart />
            </Card>
            <PipelineCard />
          </div>
        </div>

        <div className={styles.bottom}>
          <ActiveListingCard />
          <LeadsContactsCard />
        </div>
      </div>

      <aside className={styles.side} aria-label="Reminders and schedule">
        <ReminderCard />
        <CalendarCard />
      </aside>
    </main>
  );
}
