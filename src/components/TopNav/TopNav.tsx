import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import userAvatar from '../../assets/avatars/user.png';
import { CaretDownIcon, MoreIcon, SearchIcon } from '../icons';
import { NAV_ITEMS } from '../../routes';
import styles from './TopNav.module.css';

export function TopNav() {
  return (
    <header className={styles.nav}>
      <NavLink to="/" className={styles.brand} aria-label="Realtor360 home">
        <img src={logo} alt="Realtor360" width={142} height={32} />
      </NavLink>

      <nav aria-label="Primary" className={styles.menu}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => (isActive ? `${styles.item} ${styles.active}` : styles.item)}
          >
            {item.label}
          </NavLink>
        ))}
        <button type="button" className={styles.more} aria-label="More sections">
          <MoreIcon />
        </button>
      </nav>

      <div className={styles.actions}>
        <label className={styles.search}>
          <span className="visually-hidden">Search</span>
          <input type="search" placeholder="Search..." />
          <SearchIcon className={styles.searchIcon} />
        </label>
        <button type="button" className={styles.profile} aria-label="Account menu">
          <img src={userAvatar} alt="" width={35} height={35} className={styles.avatar} />
          <CaretDownIcon size={8.5} className={styles.caret} />
        </button>
      </div>
    </header>
  );
}
