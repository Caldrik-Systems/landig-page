export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Horizontal pill */}
      <rect x="3" y="7" width="17" height="8" rx="4" fill="#cbd4ff" />
      {/* Vertical pill */}
      <rect x="12" y="7" width="8" height="18" rx="4" fill="#cbd4ff" />
      {/* Main diagonal stripe */}
      <rect
        x="3" y="3" width="26" height="8"
        rx="3.5"
        fill="#5170ff"
        transform="rotate(45 16 16)"
      />
    </svg>
  );
}
