import React from 'react'
import Image from 'next/image'
import Works from '../components/Works'
import About from '../components/About'
import Contact from '../components/Contact'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const photo = require('../../public/images/chuliying.jpg')

const IndexPage = () => {
  return (
    <main className="fragment w-full bg-surface rounded-tr-[50px] mr-[15px] mt-[15px] p-[45px] pl-[120px] border border-[#eee] shadow-[2px_2px_5px_rgba(0,0,0,0.15)] flex relative overflow-hidden min-h-[calc(100vh-30px)] transition-transform duration-500 xl:p-[45px] xl:pl-[60px] xl:rounded-tr-[45px] sm:flex-col sm:p-[30px] sm:pl-[30px]">

      {/* Column 1: Photo + Contact */}
      <div className="relative z-10 pr-[135px] flex-1 max-w-[300px] sm:pr-[15px] sm:mb-11">
        <h1 className="font-inter text-theme font-bold text-[16px] mb-16 sm:mb-8">
          CHU LIYING
        </h1>
        <Image
          className="w-[200px] h-auto opacity-85 xl:w-[140px]"
          src={photo}
          alt="Chu Liying"
          priority
        />
        <div className="absolute bottom-0 xl:relative xl:mt-4">
          <Contact />
        </div>
      </div>

      {/* Column 2: About */}
      <div className="relative z-10 pr-[135px] flex-[1.25] sm:pr-[15px] sm:mb-11">
        <About />
      </div>

      {/* Column 3: Works */}
      <div className="relative z-10 flex-[2] sm:pr-[15px]">
        <Works />
      </div>

    </main>
  )
}

export default IndexPage
