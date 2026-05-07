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

const logoFrameClass =
  'relative h-8 w-40 max-w-full shrink-0 max-[1200px]:w-36'

const Works = () => {
  return (
    <section>
      <h2 className="font-inter text-sub font-bold text-base mb-16 max-[900px]:mb-8 max-[900px]:border-t max-[900px]:border-b max-[900px]:border-sub max-[900px]:py-2">
        WORKS
      </h2>

      <ul>
        {[...works].reverse().map((work) => (
          <li key={work.company} className="work-plus mb-11 max-[900px]:mb-8 max-[900px]:pb-8 max-[900px]:border-b max-[900px]:border-dotted max-[900px]:border-canvas last:mb-0 last:pb-0 last:border-none">
            <article className="group grid grid-cols-[1fr_auto] gap-x-10 max-[1200px]:gap-x-6 max-[900px]:flex max-[900px]:flex-col">
              {/* Desktop: col 1 row 1 | Mobile: order 2 */}
              <h3 className="col-start-1 row-start-1 font-inter text-theme font-bold text-base mb-3 max-[900px]:order-2 max-[900px]:mb-2">
                {work.company}
              </h3>

              {/* Desktop: col 2 rows 1-2 | Mobile: order 1 (top) */}
              <div className="col-start-2 row-start-2 flex items-start justify-end max-[900px]:order-1 max-[900px]:justify-start max-[900px]:mb-3">
                <div className={logoFrameClass}>
                  <Image
                    src={logoMap[work.logo] as string}
                    alt={work.company}
                    fill
                    unoptimized
                    sizes="160px"
                    className="object-contain object-right max-[900px]:object-left grayscale-[0.8] group-hover:grayscale-0 transition-all duration-500 max-[900px]:grayscale-0"
                  />
                </div>
              </div>

              {/* Desktop: col 1 row 2 | Mobile: order 3 */}
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="col-start-1 row-start-2 block max-[900px]:order-3"
              >
                <p className="text-copy text-sm mb-4">
                  {work.description}
                </p>
                <span className="text-sm text-sub mb-4 underline">
                  visit
                </span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Works
