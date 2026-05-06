export interface Work {
  link: string
  company: string
  description: string
  logo: string
  logoHeight?: number
}

export const works: Work[] = [
  {
    link: 'https://www.thenewslens.com/',
    company: 'The News Lens',
    description:
      'Developed and maintained frontend for a high-traffic bilingual news platform; designed and implemented native advertising products and editorial ad placement guidelines end-to-end.',
    logo: '/images/logo/tnl.svg',
  },
  {
    link: 'https://everylittled.com/',
    company: 'everylittled',
    description:
      'Designed and launched a distinctive brand identity for a lifestyle media property; defined a lightweight frontend architecture suited to a lean resource environment and delivered under tight timeline.',
    logo: '/images/logo/eld.svg',
  },
  {
    link: 'https://www.tnlmedia.com/',
    company: 'TNL Media Group',
    description:
      "Led design, PM, and frontend for the group's IPO-facing corporate site; aggregated and standardized content across all subsidiary brands into a unified data format for centralized presentation.",
    logo: '/images/logo/tnl-media-group.svg',
  },
  {
    link: 'https://www.toyo-autech.com.tw/web/index.html',
    company: 'Toyo Water',
    description:
      'Supported digital transformation for a traditional manufacturer; rebuilt and modernized the corporate site with full data and product migration.',
    logo: '/images/logo/toyo.svg',
  },
  {
    link: 'https://www.brewingarts.com.tw/',
    company: 'Brewing Arts',
    description:
      'Designed and built a full-stack Next.js site for an arts and craft beverage brand; shaped the visual identity and brand tone through art-directed web design.',
    logo: '/images/logo/ba.svg',
  },
  {
    link: 'https://againstagain.com/',
    company: 'Against Again Troupe',
    description:
      'Built a performant theatre company site with GraphQL data layer and TypeScript throughout; handled both UX design and engineering.',
    logo: '/images/logo/aat.svg',
  },
  {
    link: 'https://www.tava.org.tw/',
    company: 'Tava',
    description:
      'Designed and built a volunteer platform; handled UX design and RESTful API integration end-to-end.',
    logo: '/images/logo/logo-wide.svg',
  },
  {
    link: 'https://www.sgt.org.tw/',
    company: 'SGT',
    description:
      "Designed and engineered a site for a screenwriters' association with emphasis on typography hierarchy and multilingual content structure.",
    logo: '/images/logo/sgt.svg',
    logoHeight: 40,
  },
]
