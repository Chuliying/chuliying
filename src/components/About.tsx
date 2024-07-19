import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='title text-inter main-margin-lg'>ABOUT</h1>
      <p className='main-margin-md'>
        褚勵穎，畢業於銘傳大學商業設計系，擁有設計師的細膩思維以及工程師的邏輯能力。曾在新創公司工作五年，積累豐富的專業經驗，同時也有多項成功的獨立接案經歷，現任電商公司資深前端，擅長獨立解決問題，並能夠在跨領域團隊中高效溝通協作。
      </p>
      <h5 className='main-margin-sm'>EXPERIENCE</h5>
      <div className='main-margin-md'>
        <p>
          鴻德能源<span>資深前端工程師</span>
          <span className='time'>2024-Present</span>
        </p>
        <p>
          易可思科技<span>資深前端工程師</span>
          <span className='time'>2023-2024</span>
        </p>
        <p>
          青釀藝造<span>前端工程師</span>
          <span className='time'>2021-2023</span>
        </p>
        <p>
          關鍵評論網 <span>前端工程師</span>
          <span className='time'>2015-2020</span>
        </p>
        <p>
          威進國際 <span>網頁設計師</span>
          <span className='time'>2014-2015</span>
        </p>
      </div>

      <h5 className='main-margin-sm'>SKILLS</h5>
      <p>
        ReactJS、NextJS、RESTFUL、GraphQL、GIT、GCP、SEO、GA、google search
        console、Figma、Illustrator、Photoshop
      </p>
    </div>
  )
}

export default About
