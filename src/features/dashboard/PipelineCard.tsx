import { Card } from '../../components/Card/Card';
import { PIPELINE } from '../../data/dashboard';
import styles from './PipelineCard.module.css';

export function PipelineCard() {
  return (
    <Card title="Deals in Pipeline by Development" className={styles.card}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Development Name</th>
            <th scope="col" className={styles.num}>
              Record Count
            </th>
          </tr>
        </thead>
        <tbody>
          {PIPELINE.map((row) => (
            <tr key={row.development}>
              <td>{row.development}</td>
              <td className={styles.num}>{row.records}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
