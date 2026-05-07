import React from 'react'
import Image from 'next/image'
import Works from '../components/Works'
import About from '../components/About'
import Contact from '../components/Contact'
import photo from '../../public/images/chuliying.jpg'

const IndexPage = () => {
  return (
    <main className="fragment w-full bg-surface rounded-tr-[50px] mr-4 mt-4 p-11 pl-32 border border-[#eee] shadow-[2px_2px_5px_rgba(0,0,0,0.15)] flex relative overflow-hidden min-h-[calc(100vh-30px)] transition-transform duration-500 max-[1200px]:p-11 max-[1200px]:pl-16 max-[1200px]:rounded-tr-[45px] max-[900px]:flex-col max-[900px]:p-8 max-[900px]:pl-8">

      {/* Column 1: Photo + Contact */}
      <div className="relative z-10 pr-32 flex-1 max-w-[300px] max-[900px]:pr-4 max-[900px]:mb-16">
        <h1 className="font-inter text-theme font-bold text-base mb-16 max-[900px]:mb-8">
          CHU LIYING
        </h1>
        <Image
          className="w-48 h-auto opacity-80 max-[1200px]:w-36 max-[900px]:mb-6"
          src={photo}
          alt="Chu Liying"
          priority
        />
        <div className="max-[1200px]:relative mt-4">
          <Contact />
        </div>
      </div>

      {/* Column 2: About */}
      <div className="relative z-10 pr-[calc(8rem*1.618)] flex-[1.25] max-[900px]:pr-4 max-[900px]:mb-16">
        <About />
      </div>

      {/* Column 3: Works */}
      <div className="relative z-10 flex-[2] max-[900px]:pr-4">
        <Works />
      </div>

    </main>
  )
}

export default IndexPage
