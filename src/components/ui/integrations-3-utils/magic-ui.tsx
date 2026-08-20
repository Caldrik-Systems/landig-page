export function MagicUI(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 3L16.5 11.5L25 14L16.5 16.5L14 25L11.5 16.5L3 14L11.5 11.5L14 3Z" fill="url(#magic-grad)" />
      <defs>
        <linearGradient id="magic-grad" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
