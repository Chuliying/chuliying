import React from 'react'
import { intro, experience } from '../data/about'

const About = () => {
  return (
    <div>
      <h2 className="font-inter text-sub font-bold text-base mb-16 max-[900px]:mb-8 max-[900px]:border-t max-[900px]:border-b max-[900px]:border-sub max-[900px]:py-2">
        ABOUT
      </h2>

      <div className="mb-11 max-[900px]:mb-8">
        {intro.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-copy text-sm leading-relaxed mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="text-theme text-sm font-normal mb-6 max-[900px]:mb-4">
        EXPERIENCE
      </h3>

      <dl className="mb-11 max-[900px]:mb-8">
        {experience.map((entry) => (
          <div key={entry.company} className="mb-11 max-[900px]:mb-8 last:mb-0">
            <dt className="text-copy text-sm leading-relaxed mb-3">
              <span className="font-bold">{entry.company}</span>
              <span className="block text-sm text-faint mt-1">
                {entry.title}
              </span>
              <span className="block text-faint text-xs font-normal">
                {entry.period}
              </span>
            </dt>
            <dd>
              <ul className="list-none flex flex-col gap-2">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted flex"
                  >
                    <span className="mr-2 shrink-0">-</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default About
