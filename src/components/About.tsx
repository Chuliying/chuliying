import React from 'react'
import { intro, experience } from '../data/about'

const About = () => {
  return (
    <div>
      <h2 className="font-inter text-sub font-bold text-base mb-16 max-[900px]:mb-8 max-[900px]:border-t max-[900px]:border-b max-[900px]:border-sub max-[900px]:py-2">
        ABOUT
      </h2>

      <div className="mb-11 max-[900px]:mb-7">
        {intro.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-copy text-sm leading-relaxed pb-2">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="text-theme text-sm font-normal mb-4 max-[900px]:mb-2">
        EXPERIENCE
      </h3>

      <dl className="mb-11 max-[900px]:mb-7">
        {experience.map((entry) => (
          <div key={entry.company} className="mb-11 max-[900px]:mb-3">
            <dt className="text-copy text-sm leading-relaxed pb-2">
              <span className="font-bold">{entry.company}</span>
              <span className="block text-sm text-muted">
                {entry.title}
              </span>
              <span className="block text-muted text-xs mb-2 font-normal">
                {entry.period}
              </span>
            </dt>
            <dd>
              <ul className="list-none">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted leading-relaxed before:content-['-'] before:mr-2"
                  >
                    {bullet}
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
