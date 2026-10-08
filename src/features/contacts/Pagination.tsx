import { Fragment } from 'react';
import { SmallChevronIcon } from '../../components/icons';
import styles from './Pagination.module.css';

interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, pageCount, onChange }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <nav className={styles.pager} aria-label="Contacts pages">
      <button type="button" className={styles.step} onClick={() => onChange(page - 1)} disabled={page <= 1}>
        <SmallChevronIcon direction="left" />
        Prev
      </button>
      {pages.map((p) => (
        <Fragment key={p}>
          <span className={styles.sep} aria-hidden="true" />
          <button
            type="button"
            className={p === page ? `${styles.page} ${styles.current}` : styles.page}
            aria-current={p === page ? 'page' : undefined}
            aria-label={`Page ${p}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        </Fragment>
      ))}
      <span className={styles.sep} aria-hidden="true" />
      <button type="button" className={`${styles.step} ${styles.next}`} onClick={() => onChange(page + 1)} disabled={page >= pageCount}>
        Next
        <SmallChevronIcon direction="right" />
      </button>
    </nav>
  );
}
