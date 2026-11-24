type P = { size?: number };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const GithubIcon = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" /></svg>
);
export const LinkedinIcon = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></svg>
);
export const MailIcon = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM22 7l-10 6L2 7" /></svg>
);
export const PathIcon = ({ d, size = 19 }: P & { d: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d={d} /></svg>
);
