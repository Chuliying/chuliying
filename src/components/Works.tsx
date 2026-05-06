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
        {works.map((work, index) => (
          <li key={work.company} className="border-b border-[#e0ddd8] last:border-none">
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 py-[14px] pl-0 pr-1 border-l-2 border-transparent hover:border-sub hover:pl-3 transition-all duration-200"
            >
              {/* Index */}
              <span className="font-inter text-[11px] text-muted group-hover:text-sub transition-colors pt-[2px] shrink-0 tabular-nums w-5 text-right leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-[5px]">
                  <h3 className="font-inter text-theme text-[14px] font-semibold leading-tight">
                    {work.company}
                  </h3>
                  <Image
                    src={logoMap[work.logo] as string}
                    alt=""
                    aria-hidden="true"
                    height={work.logoHeight ? Math.round(work.logoHeight * 0.55) : 16}
                    width={0}
                    unoptimized
                    style={{ width: 'auto' }}
                    className="grayscale opacity-35 group-hover:opacity-75 group-hover:grayscale-0 transition-all duration-300 shrink-0 mt-[1px]"
                  />
                </div>
                <p className="text-muted text-[12px] leading-[1.65]">
                  {work.description}
                </p>
              </div>

              {/* Arrow — appears on hover */}
              <span className="text-[12px] text-sub opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-[2px] shrink-0">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Works
