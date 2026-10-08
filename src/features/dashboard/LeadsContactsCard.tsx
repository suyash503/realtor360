import { Link } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { ArrowUpRightIcon, PhoneIcon } from '../../components/icons';
import { LEAD_CONTACTS } from '../../data/dashboard';
import styles from './LeadsContactsCard.module.css';

export function LeadsContactsCard() {
  return (
    <Card
      title="Leads Contacts"
      className={styles.card}
      action={
        <Link to="/contacts" className={styles.open} aria-label="Open all contacts">
          <ArrowUpRightIcon />
        </Link>
      }
    >
      <ul className={styles.list}>
        {LEAD_CONTACTS.map((c) => (
          <li key={c.name} className={styles.row}>
            <img src={c.avatar} alt="" width={35} height={35} className={styles.avatar} />
            <div className={styles.who}>
              <p className={styles.name}>{c.name}</p>
              <p className={styles.location}>{c.location}</p>
            </div>
            <a href={`tel:${c.phone.replace(/\s/g, '')}`} className={styles.call} aria-label={`Call ${c.name}`}>
              <PhoneIcon />
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
