import React from 'react'

const About = () => {
    return (
        <div>
            <h1 className='title text-inter main-margin-lg'>ABOUT</h1>
            <p className='main-margin-md'>
                褚勵穎，畢業於銘傳大學商業設計系，有設計師的細膩也有工程師的邏輯。曾在新創公司工作五年，也有豐富的獨立接案經驗，擅長解決問題及跨領域溝通。
            </p>
            <h5 className='main-margin-sm'>
                EXPERIENCE
            </h5>
            <div className='main-margin-md'>
                <p >
                    銘傳大學商業設計系畢業
                    <span className="time">
                        2012
                    </span>
                </p>
                <p>
                    威進國際 <span>網頁設計師</span><span className='time'>
                        2014-2015
                    </span>
                </p>
                <p>
                    關鍵評論網 <span>前端工程師</span>
                    <span className="time">
                        2015-2020
                    </span>
                </p>
                <p>
                    青釀藝造<span>前端工程師</span>
                    <span className="time">
                        2021-NOW
                    </span>
                </p>
            </div>

            <h5 className='main-margin-sm'>
                SKILLS
            </h5>
            <p>
                HTML, CSS, Javascript, jQuery, React, Vue, Next.js
            </p>
        </div>
    )
}

export default About