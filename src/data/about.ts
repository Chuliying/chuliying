export interface ExperienceEntry {
  company: string
  title: string
  period: string
  bullets: string[]
}

export const intro = `10+ years building production-grade web applications across startups, e-commerce, media, public sector, and energy — from pixel-perfect interfaces to scalable frontend architectures.

Currently leading frontend development at an energy company, driving technical decisions, resolving legacy debt, and establishing cross-team development standards. Background in commercial design informs a consistent focus on both engineering rigor and user experience quality.

Recently focused on integrating AI-assisted workflows — defining tooling standards and verification practices for team-wide adoption.`

export const experience: ExperienceEntry[] = [
  {
    company: 'HDRenewables',
    title: 'Frontend Lead',
    period: '2024–Present',
    bullets: [
      'Led frontend architecture planning and technical decision-making',
      'Reduced legacy technical debt through systematic code refactoring',
      'Established cross-team development standards and review processes',
      'Spearheaded R&D AI workflow standardization: designed tooling guidelines, built team-wide skill systems, defined operational guardrails, and oversaw cost planning and production rollout',
    ],
  },
  {
    company: 'EcosTek',
    title: 'Senior Frontend Engineer',
    period: '2023–2024',
    bullets: [
      'Managed frontend team with agile development processes',
      'Handled task allocation, sprint planning, and code reviews',
      'Designed and implemented scalable frontend architecture',
    ],
  },
  {
    company: 'Brewing Arts',
    title: 'Frontend Engineer',
    period: '2021–2023',
    bullets: [
      'Owned design and frontend development end-to-end',
      'Digitized arts and cultural content for web presentation',
    ],
  },
  {
    company: 'The News Lens',
    title: 'Frontend Engineer',
    period: '2015–2020',
    bullets: [
      'Led product planning, UX design, and frontend development',
      'Delivered branded editorial sites and native advertising experiences',
      'Contributed to new brand website strategy, design, and engineering',
    ],
  },
]
