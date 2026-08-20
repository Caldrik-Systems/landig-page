export function Replit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="4" width="9" height="9" rx="1.5" fill="#F26207" />
      <rect x="15" y="4" width="9" height="9" rx="1.5" fill="#F26207" opacity="0.7" />
      <rect x="4" y="15" width="9" height="9" rx="1.5" fill="#F26207" opacity="0.7" />
      <rect x="15" y="15" width="9" height="9" rx="1.5" fill="#F26207" opacity="0.4" />
    </svg>
  );
}
