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
          <li key={work.company} className="mb-11 max-[900px]:mb-8 max-[900px]:pb-8 max-[900px]:border-b max-[900px]:border-dotted max-[900px]:border-canvas last:mb-0 last:pb-0 last:border-none">
            <article className="group">
              <h3 className="font-inter text-theme font-bold text-base mb-3 max-[900px]:mb-2">
                {work.company}
              </h3>
              <div className="flex items-start gap-10 max-[1200px]:gap-4 max-[900px]:flex-col-reverse max-[900px]:gap-3">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-[2] block"
                >
                  <p className="text-copy text-sm mb-4">
                    {work.description}
                  </p>
                  <span className="text-sm text-sub underline">
                    visit
                  </span>
                </a>

                <div className="flex-1 flex justify-end max-[900px]:justify-start">
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
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Works
