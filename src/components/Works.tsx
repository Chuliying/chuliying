import React from 'react'
import Image from 'next/image'
import { works } from '../data/works'

import tnlLogo from '../../public/images/logo/tnl.svg'
import eldLogo from '../../public/images/logo/eld.svg'
import tnlMediaLogo from '../../public/images/logo/tnl-media-group.svg'
import toyoLogo from '../../public/images/logo/toyo.svg'
import baLogo from '../../public/images/logo/ba.svg'
import aatLogo from '../../public/images/logo/aat.svg'
import tavaLogo from '../../public/images/logo/logo-wide.svg'
import sgtLogo from '../../public/images/logo/sgt.svg'

const logoMap: Record<string, unknown> = {
  '/images/logo/tnl.svg': tnlLogo,
  '/images/logo/eld.svg': eldLogo,
  '/images/logo/tnl-media-group.svg': tnlMediaLogo,
  '/images/logo/toyo.svg': toyoLogo,
  '/images/logo/ba.svg': baLogo,
  '/images/logo/aat.svg': aatLogo,
  '/images/logo/logo-wide.svg': tavaLogo,
  '/images/logo/sgt.svg': sgtLogo,
}

const Works = () => {
  return (
    <section>
      <h2 className="font-inter text-sub font-bold text-[16px] mb-16 max-[900px]:mb-8 max-[900px]:border-t max-[900px]:border-b max-[900px]:border-sub max-[900px]:py-[7.5px]">
        WORKS
      </h2>

      <ul>
        {works.map((work) => (
          <li
            key={work.company}
            className="border-b border-[#ddd] last:border-none"
          >
            <article className="py-5 group">
              {/* Header row: logo + company name + link arrow */}
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={logoMap[work.logo] as string}
                  alt={work.company}
                  height={work.logoHeight ? Math.round(work.logoHeight * 0.55) : 17}
                  width={0}
                  unoptimized
                  style={{ width: 'auto' }}
                  className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 shrink-0"
                />
                <h3 className="font-inter text-theme text-[15px] font-semibold leading-none">
                  {work.company}
                </h3>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${work.company}`}
                  className="ml-auto text-muted hover:text-sub transition-colors text-[13px] shrink-0"
                >
                  ↗
                </a>
              </div>

              {/* Description */}
              <p className="text-muted text-[13px] leading-[1.6] pl-0">
                {work.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Works
