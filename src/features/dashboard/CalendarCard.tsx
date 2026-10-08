import { useMemo, useState } from 'react';
import { ChevronIcon } from '../../components/icons';
import { CALENDAR, SCHEDULE, type ScheduleTone } from '../../data/dashboard';
import styles from './CalendarCard.module.css';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const toneClass: Record<ScheduleTone, string> = {
  visit: styles.visit,
  'follow-up': styles.followUp,
  submission: styles.submission,
};

function monthGrid(year: number, month: number) {
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array.from({ length: first }, () => null);
  for (let d = 1; d <= days; d++) cells.push(d);
  return cells;
}

export function CalendarCard() {
  const [view, setView] = useState({ year: CALENDAR.year, month: CALENDAR.month });
  const cells = useMemo(() => monthGrid(view.year, view.month), [view]);
  const isDesignMonth = view.year === CALENDAR.year && view.month === CALENDAR.month;
  const monthName = new Date(view.year, view.month, 1).toLocaleString('en-US', { month: 'long' });

  const shift = (delta: number) =>
    setView(({ year, month }) => {
      const d = new Date(year, month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });

  return (
    <section className={styles.card} aria-label="Calendar and schedule">
      <div className={styles.header}>
        <h2 className={styles.month} aria-live="polite">
          {monthName} {view.year}
        </h2>
        <button type="button" className={styles.nav} onClick={() => shift(-1)} aria-label="Previous month">
          <ChevronIcon direction="left" />
        </button>
        <button type="button" className={styles.nav} onClick={() => shift(1)} aria-label="Next month">
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className={styles.grid} role="grid" aria-label={`${monthName} ${view.year}`}>
        <div role="row" className={styles.week}>
          {WEEKDAYS.map((d, i) => (
            <span key={i} role="columnheader" className={styles.weekday} aria-label={WEEKDAY_NAMES[i]}>
              {d}
            </span>
          ))}
        </div>
        {Array.from({ length: Math.ceil(cells.length / 7) }, (_, w) => (
          <div role="row" key={w} className={styles.week}>
            {cells.slice(w * 7, w * 7 + 7).map((day, i) => {
              const mark = isDesignMonth && day ? CALENDAR.marks[day] : undefined;
              const today = isDesignMonth && day === CALENDAR.today;
              return (
                <span key={i} role="gridcell" className={styles.day} aria-current={today ? 'date' : undefined}>
                  {day && (
                    <span
                      className={[styles.dayNum, today && styles.today, mark && `${styles.marked} ${toneClass[mark]}`]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {day}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <div className={styles.schedule}>
        <h2 className={styles.scheduleTitle}>My Schedule</h2>
        <ul className={styles.events}>
          {SCHEDULE.map((e) => (
            <li key={e.title} className={`${styles.event} ${toneClass[e.tone]}`}>
              <p className={styles.eventTitle}>{e.title}</p>
              <p className={styles.eventDetail}>{e.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
