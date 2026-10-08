import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number | undefined, props: IconProps) => ({
  ...(size === undefined ? {} : { width: size, height: size }),
  'aria-hidden': true,
  focusable: false,
  ...props,
});

export function SearchIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base(size, props)}>
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
    </svg>
  );
}

export function CaretDownIcon({ size = 10, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 10 5" fill="currentColor" {...base(size, props)} height={size / 2}>
      <path d="M0 0h10L5 5Z" />
    </svg>
  );
}

export function MoreIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 12 2" width={12} height={2} fill="currentColor" {...base(undefined, props)}>
      <circle cx="1" cy="1" r="1" />
      <circle cx="6" cy="1" r="1" />
      <circle cx="11" cy="1" r="1" />
    </svg>
  );
}

export function PhoneIcon({ size = 12, ...props }: IconProps) {
  return (
    <svg viewBox="3 3 18 18" fill="currentColor" {...base(size, props)}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 7, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 7 7" fill="none" stroke="currentColor" strokeWidth={1.2} {...base(size, props)}>
      <path d="M.6 6.4 6.4.6M1.8.6h4.6v4.6" />
    </svg>
  );
}

export function TrendArrowIcon({ direction, size = 9, ...props }: IconProps & { direction: 'up' | 'down' }) {
  return (
    <svg viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth={1.1} {...base(size, props)}>
      {direction === 'up' ? <path d="M1 8 8 1M2.6 1H8v5.4" /> : <path d="M1 1l7 7M2.6 8H8V2.6" />}
    </svg>
  );
}

export function ChevronIcon({ direction, ...props }: IconProps & { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 11 18" width={11} height={18} fill="none" stroke="currentColor" strokeWidth={2.6} {...base(undefined, props)}>
      {direction === 'left' ? <path d="M9.5 1.5 2 9l7.5 7.5" /> : <path d="M1.5 1.5 9 9l-7.5 7.5" />}
    </svg>
  );
}

export function GridViewIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={2} {...base(size, props)}>
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="11" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="11" width="6" height="6" rx="1" />
      <rect x="11" y="11" width="6" height="6" rx="1" />
    </svg>
  );
}

export function PlusIcon({ size = 10, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={1.2} {...base(size, props)}>
      <path d="M5 0v10M0 5h10" />
    </svg>
  );
}

export function SmallChevronIcon({ direction, ...props }: IconProps & { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 6 9" width={6} height={9} fill="none" stroke="currentColor" strokeWidth={1.4} {...base(undefined, props)}>
      {direction === 'left' ? <path d="M5 .5 1 4.5l4 4" /> : <path d="m1 .5 4 4-4 4" />}
    </svg>
  );
}
