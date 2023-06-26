import React from 'react'
import Image from 'next/image'

interface Work {
    link: string,
    company: string,
    jr: string,
    skills: string,
    logo: string
}

const works: Work[] = [
    {
        link: 'https://www.thenewslens.com/',
        company: 'The News Lens',
        jr: 'design,frontend',
        skills: 'html, css, javascript, jquery',
        logo: require('../../public/images/logo/tnl.svg')

    },
    {
        link: 'https://everylittled.com/',
        company: 'everylittled',
        jr: 'design,frontend',
        skills: 'html, css, javascript, jquery',
        logo: require('../../public/images/logo/eld.svg')
    },
    {
        link: 'https://www.tnlmedia.com/',
        company: 'The News Lens Media Group',
        jr: 'design,frontend',
        skills: 'html, css, javascript, jquery',
        logo: require('../../public/images/logo/tnl-media-group.svg')
    },
    {
        link: 'https://www.toyo-autech.com.tw/web/index.html',
        company: 'Toyo Water',
        jr: 'design,frontend',
        skills: 'html, css, javascript, jquery',
        logo: require('../../public/images/logo/toyo.svg')
    },
    {
        link: 'https://www.brewingarts.com.tw/',
        company: 'Brewing Arts',
        jr: 'design,frontend',
        skills: 'React, Nextjs',
        logo: require('../../public/images/logo/ba.svg')
    },
    {
        link: 'https://againstagain.com/',
        company: 'Rising Stories',
        jr: 'design,frontend',
        skills: 'React, Nextjs, graphql',
        logo: require('../../public/images/logo/aat.svg')
    },
]

const Works = () => {
    return (
        <>
            <div>
                <h1 className="title main-margin-lg text-inter">
                    WORKS
                </h1>
            </div>
            <div className='works__box'>
                <ul>
                    {
                        works.map((work, index: number) => (
                            <a target='_blank' rel="noreferrer" href={work.link} key={index}>
                                <li className='main-margin-md'>
                                    <div className='works__des'>
                                        <h4 className='main-margin-sm text-inter'>
                                            {work.company}
                                        </h4>
                                        <p>
                                            {work.jr}
                                        </p>
                                        <p className='p-2'>
                                            {work.skills}
                                        </p>
                                        <span>
                                            link to
                                        </span>
                                    </div>
                                    <div className='works__image'>
                                        <Image src={work.logo} alt={work.company} />

                                    </div>

                                </li>
                            </a>

                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Works