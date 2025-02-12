import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='title text-inter main-margin-lg'>ABOUT</h1>
      <p className='main-margin-sm'>
        褚勵穎，銘傳大學商業設計系畢業，結合設計師的細膩思維與工程師的邏輯能力，擁有
        新創、公部門外包、電子商務、品牌網站 等多元開發經驗。擅長
        React、Next.js、React Query，具備設計、前後端協作與敏捷開發經驗。
      </p>
      <p className='main-margin-md'>
        目前任職於能源公司，擔任資深前端工程師，負責技術決策、系統改善與跨部門協作，並能在技術債環境下獨立開發與改善程式碼。此外，擁有多項成功的獨立接案經歷，具備高效解決問題與團隊溝通能力。
      </p>
      <h5 className='main-margin-sm'>EXPERIENCE</h5>
      <div className='main-margin-md'>
        <p>
          泓德能源<span>資深前端工程師</span>
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
