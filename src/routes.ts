export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Developments', path: '/developments' },
  { label: 'Buildings', path: '/buildings' },
  { label: 'Units', path: '/units' },
  { label: 'Leads', path: '/leads' },
  { label: 'Companies', path: '/companies' },
  { label: 'Contacts', path: '/contacts' },
  { label: 'Deals', path: '/deals' },
  { label: 'Activities', path: '/activities' },
  { label: 'Attorney Firms', path: '/attorney-firms' },
  { label: 'Reports', path: '/reports' },
];
