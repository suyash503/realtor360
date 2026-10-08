import { useMemo, useState } from 'react';
import { CONTACTS, EMPTY_FILTERS, type Contact, type FilterState } from '../data/contacts';
import { FiltersSidebar } from '../features/contacts/FiltersSidebar';
import { StatusBadge } from '../features/contacts/StatusBadge';
import { Pagination } from '../features/contacts/Pagination';
import { CaretDownIcon, GridViewIcon, PlusIcon, SearchIcon } from '../components/icons';
import styles from './ContactsPage.module.css';

const PAGE_SIZE = 8;

function matches(c: Contact, f: FilterState) {
  const firstName = c.assignedTo.split(' ')[0];
  return (
    (!f.status.length || f.status.includes(c.status)) &&
    (!f.role.length || f.role.includes(c.role)) &&
    (!f.assignedTo.length || f.assignedTo.includes(firstName)) &&
    (!f.city.length || f.city.includes(c.city)) &&
    (!f.leadSource.length || f.leadSource.includes(c.leadSource))
  );
}

export function ContactsPage() {
  const [nameQuery, setNameQuery] = useState('');
  const [search, setSearch] = useState('');
  const [draft, setDraft] = useState<FilterState>(EMPTY_FILTERS);
  const [applied, setApplied] = useState<FilterState>(EMPTY_FILTERS);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const name = nameQuery.trim().toLowerCase();
    const q = search.trim().toLowerCase();
    return CONTACTS.filter(
      (c) =>
        matches(c, applied) &&
        (!name || c.name.toLowerCase().includes(name)) &&
        (!q || [c.name, c.email, c.company, c.role, c.phone, c.dealStage, c.status, c.assignedTo].some((v) => v.toLowerCase().includes(q))),
    );
  }, [applied, nameQuery, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const rows = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const resetToFirstPage =
    <T,>(set: (v: T) => void) =>
    (v: T) => {
      set(v);
      setPage(1);
    };

  return (
    <div className={styles.layout}>
      <FiltersSidebar
        query={nameQuery}
        onQueryChange={resetToFirstPage(setNameQuery)}
        draft={draft}
        onDraftChange={setDraft}
        onApply={() => resetToFirstPage(setApplied)(draft)}
        onReset={() => {
          setDraft(EMPTY_FILTERS);
          resetToFirstPage(setApplied)(EMPTY_FILTERS);
          setNameQuery('');
        }}
      />

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>All Contacts</h1>
          <div className={styles.toolbar}>
            <button type="button" className={styles.create}>
              <PlusIcon size={8} />
              Create Contact
            </button>
            <div className={styles.tools}>
              <label className={styles.search}>
                <span className="visually-hidden">Search contacts</span>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => resetToFirstPage(setSearch)(e.target.value)}
                  placeholder="Search Contact"
                />
                <SearchIcon className={styles.searchIcon} />
              </label>
              <button type="button" className={styles.view} aria-label="Change view">
                <GridViewIcon size={17} className={styles.gridIcon} />
                <CaretDownIcon size={7} />
              </button>
              <button type="button" className={styles.actions} aria-haspopup="menu">
                Actions
                <CaretDownIcon size={7} />
              </button>
            </div>
          </div>
        </header>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <colgroup>
              <col style={{ width: 306.7 }} />
              <col style={{ width: 130.13 }} />
              <col style={{ width: 93 }} />
              <col style={{ width: 150 }} />
              <col style={{ width: 130.43 }} />
              <col style={{ width: 147.86 }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Contact Name</th>
                <th scope="col">Company</th>
                <th scope="col">Role</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Deal Stage</th>
                <th scope="col">Status</th>
                <th scope="col">Assigned to</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => (
                <tr key={c.id}>
                  <th scope="row">
                    <span className={styles.name}>{c.name}</span>
                    <span className={styles.email}>
                      <b>Email:</b> {c.email}
                    </span>
                  </th>
                  <td>{c.company}</td>
                  <td>{c.role}</td>
                  <td className={styles.phone}>{c.phone}</td>
                  <td>{c.dealStage}</td>
                  <td className={styles.statusCell}>
                    <StatusBadge status={c.status} />
                  </td>
                  <td>{c.assignedTo}</td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={7} className={styles.empty}>
                    No contacts match these filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.pager}>
          <Pagination page={current} pageCount={pageCount} onChange={(p) => setPage(Math.min(Math.max(1, p), pageCount))} />
        </div>
      </main>
    </div>
  );
}
