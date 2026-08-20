export function MediaWiki(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="14" cy="14" r="11" stroke="#3D6B44" strokeWidth="2" fill="none" />
      <path d="M14 4C14 4 10 9 10 14C10 19 14 24 14 24C14 24 18 19 18 14C18 9 14 4 14 4Z" fill="#3D6B44" opacity="0.7" />
      <line x1="3" y1="14" x2="25" y2="14" stroke="#3D6B44" strokeWidth="1.5" />
      <line x1="5" y1="9" x2="23" y2="9" stroke="#3D6B44" strokeWidth="1" opacity="0.6" />
      <line x1="5" y1="19" x2="23" y2="19" stroke="#3D6B44" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
