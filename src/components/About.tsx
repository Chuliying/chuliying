import React from 'react'
import { intro, experience } from '../data/about'

const About = () => {
  return (
    <div>
      <h2 className="font-inter text-sub font-bold text-[16px] mb-16 sm:mb-8 sm:border-t sm:border-b sm:border-sub sm:py-[7.5px]">
        ABOUT
      </h2>

      <div className="mb-11 sm:mb-7">
        {intro.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-copy text-[16px] leading-[1.65] pb-[7.5px]">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="text-theme text-[14px] font-normal mb-4 sm:mb-2">
        EXPERIENCE
      </h3>

      <dl className="mb-11 sm:mb-7">
        {experience.map((entry) => (
          <div key={entry.company} className="mb-11 sm:mb-7">
            <dt className="text-copy text-[16px] leading-[1.65] pb-[7.5px]">
              {entry.company}
              <span className="block font-bold text-[14px] text-muted">
                {entry.title}
              </span>
              <span className="block text-muted text-[14px] mb-[7.5px] font-normal">
                {entry.period}
              </span>
            </dt>
            <dd>
              <ul className="list-none">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-muted leading-[1.65] before:content-['-'] before:mr-2"
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
