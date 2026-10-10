/**
 * Copy for /about/. Edit text here; no component changes needed.
 *
 * Anything left as an empty string is simply not shown: a blank `founded` hides that fact, and a team
 * member appears only once every one of their fields is filled in. Fill the blanks in and they go live.
 */

export const aboutMeta = {
  title: "About Caldrik | AI, engineered with a cool head",
  description:
    "Caldrik, from Old English cald (cold) and rīc (ruler): an AI engineering firm that sets the threshold first and keeps measuring after launch",
};

export const hero = {
  label: "About Caldrik",
  word: "caldrik",
  pronunciation: "/ˈkæl.drɪk/",
  partOfSpeech: "noun",
  // Old English words are set in italic serif; `${origin} · ${cald}, ${coldMeaning} + ${ric}, ${ricMeaning}`.
  etymology: { origin: "Old English", parts: [{ word: "cald", meaning: "cold" }, { word: "rīc", meaning: "ruler" }] },
  definition: { plain: "One who rules with", accent: "a cool head." },
};

export const whyName = {
  label: "Why the name",
  headline: { plain: "Without the heat of hype.", accent: "Held to a standard." },
  body: "Most AI is launched on excitement and judged on demos. We set the threshold first, measure against it, and keep measuring long after launch.",
};

export const company = {
  label: "Company",
  facts: [
    { label: "Founded", value: "" /* TODO: year */ },
    { label: "Based in", value: "Mumbai, India" },
    { label: "Working with", value: "Teams worldwide" },
  ],
  note: "Caldrik is a brand of Revenance Techsol Private Limited.",
};

export const team = {
  label: "Meet the team",
  headline: "The people behind Caldrik.",
  line: "Engineers and operators who have built and run production systems. Calm under pressure, precise by habit.",
  linkedinLabel: "LinkedIn",
  // `role` is "Department · Title". `photo` is optional: set it to a path or URL (e.g. "/team/rohan.jpg") to show a
  // portrait; without one the initials are shown. Portraits start in greyscale and colour in on hover.
  members: [
    {
      name: "Rohan Mashiyava",
      role: "Leadership · Founder",
      photo: "/team/rohan.webp",
      line: "12 years building engineering teams. Scaled an offshore software firm to 30+ engineers.",
      linkedin: "https://www.linkedin.com/in/rohan-mashiyava/",
    },
    {
      name: "Ravindra Dhavlesha",
      role: "" /* TODO: "[Function] · [Title]" */,
      photo: "/team/ravindra.webp",
      line: "" /* TODO: one line of real experience */,
      linkedin: "https://www.linkedin.com/in/ravidhavlesha/",
    },
    {
      name: "" /* TODO: name */,
      role: "" /* TODO: "Engineering · [Title]" */,
      photo: "",
      line: "" /* TODO: one line of real experience */,
      linkedin: "" /* TODO: LinkedIn URL */,
    },
  ],
};

export const closing = {
  headline: { plain: "Know before", accent: "you build." },
  button: "Discuss a Workflow",
  href: "/#doorway",
};
