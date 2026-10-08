import { Card } from '../../components/Card/Card';
import { AvatarStack } from '../../components/AvatarStack/AvatarStack';
import { ACTIVE_LISTINGS } from '../../data/dashboard';
import styles from './ActiveListingCard.module.css';

const COLUMNS = ['Property', 'Type', 'Units', 'Price', 'Active Leads', 'Views', 'Status'];

export function ActiveListingCard() {
  return (
    <Card title="Active Listing" className={styles.card}>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <colgroup>
            <col style={{ width: 137.88 }} />
            <col style={{ width: 98 }} />
            <col style={{ width: 97 }} />
            <col style={{ width: 99.78 }} />
            <col style={{ width: 153 }} />
            <col style={{ width: 77.12 }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              {COLUMNS.map((c) => (
                <th key={c} scope="col">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ACTIVE_LISTINGS.map((l) => (
              <tr key={l.name}>
                <th scope="row" className={styles.propertyCell}>
                  <div className={styles.property}>
                    <img src={l.image} alt="" width={30} height={30} />
                    <span>{l.name}</span>
                  </div>
                </th>
                <td>{l.type}</td>
                <td>{l.units}</td>
                <td>{l.price}</td>
                <td>
                  <AvatarStack
                    faces={l.leadAvatars}
                    extra={l.extraLeads}
                    label={`${l.leadAvatars.length + l.extraLeads} active leads`}
                    className={styles.leads}
                  />
                </td>
                <td>{l.views}</td>
                <td>
                  <span className={`${styles.status} ${styles[l.status.tone]}`}>{l.status.label}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
