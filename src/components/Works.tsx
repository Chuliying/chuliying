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
      <h2 className="font-inter text-sub font-bold text-base mb-16 max-[900px]:mb-8 max-[900px]:border-t max-[900px]:border-b max-[900px]:border-sub max-[900px]:py-2">
        WORKS
      </h2>

      <ul>
        {works.map((work) => (
          <li key={work.company} className="mb-11 max-[900px]:mb-11 max-[900px]:pb-6 max-[900px]:border-b max-[900px]:border-dotted max-[900px]:border-canvas last:mb-0 last:border-none">
            <article className="flex max-[1200px]:flex-col-reverse">
              <div className="flex-1 lg:w-full lg:flex-auto">
                <h3 className="font-inter text-theme text-lg mb-4 max-[900px]:mb-2">
                  {work.company}
                </h3>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <p className="text-copy text-base leading-relaxed pb-2">
                    {work.description}
                  </p>
                  <span className="text-sm text-sub underline">
                    ↗
                  </span>
                </a>
              </div>

              <div className="w-1/2 flex justify-center flex-col max-[1200px]:w-full max-[1200px]:pb-4 max-[1200px]:justify-start max-[900px]:mb-4">
                <Image
                  src={logoMap[work.logo] as string}
                  alt={work.company}
                  height={work.logoHeight ?? 30}
                  width={0}
                  unoptimized
                  style={{ width: 'auto' }}
                  className="grayscale-[0.8] hover:grayscale-0 transition-all duration-500 max-[900px]:grayscale-0"
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Works
