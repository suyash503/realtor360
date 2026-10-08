import { FILTER_GROUPS, FILTER_LABELS, type FilterKey, type FilterState } from '../../data/contacts';
import { SearchIcon } from '../../components/icons';
import styles from './FiltersSidebar.module.css';

interface FiltersSidebarProps {
  query: string;
  onQueryChange: (q: string) => void;
  draft: FilterState;
  onDraftChange: (next: FilterState) => void;
  onApply: () => void;
  onReset: () => void;
}

export function FiltersSidebar({ query, onQueryChange, draft, onDraftChange, onApply, onReset }: FiltersSidebarProps) {
  const toggle = (key: FilterKey, value: string) => {
    const current = draft[key];
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    onDraftChange({ ...draft, [key]: next });
  };

  return (
    <aside className={styles.sidebar} aria-labelledby="filters-title">
      <h2 id="filters-title" className={styles.title}>
        Filters
      </h2>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onApply();
        }}
      >
        <label className={styles.search}>
          <span className="visually-hidden">Search by contact name</span>
          <input type="search" value={query} onChange={(e) => onQueryChange(e.target.value)} placeholder="Search by Contact Name" />
          <SearchIcon className={styles.searchIcon} />
        </label>

        {(Object.keys(FILTER_GROUPS) as FilterKey[]).map((key) => (
          <div key={key} role="group" aria-labelledby={`filter-${key}`} className={styles.group}>
            <h3 id={`filter-${key}`} className={styles.legend}>
              {FILTER_LABELS[key]}
            </h3>
            <div className={styles.options}>
              {FILTER_GROUPS[key].map((option) => (
                <label key={option} className={styles.option}>
                  <input type="checkbox" checked={draft[key].includes(option)} onChange={() => toggle(key, option)} />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" className={styles.apply}>
          Apply Filters
        </button>
        <button type="button" className={styles.reset} onClick={onReset}>
          Reset Filters
        </button>
      </form>
    </aside>
  );
}
