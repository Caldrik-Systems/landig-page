// Serialise structured data for a <script type="application/ld+json"> tag.
// Escapes "<" so text in the payload can never close the script tag (see the Next.js JSON-LD guide).
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
