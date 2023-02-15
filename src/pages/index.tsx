import React from 'react'
import Works from '../components/Works'
import About from '../components/About'
import Contact from '../components/Contact'
import Image from 'next/image'

const index = () => {
    return (
        <div className='main__box fragment'>
            <div>
                <h1 className='text-inter main-margin-lg'>
                    CHU LIYING
                </h1>
                <Image className='main__photo' src={require('../../public/images/chuliying.jpg')} alt="CHU LIYING" priority />
                <div className='contact__box'>
                    <Contact />
                </div>

            </div>
            <div>
                <About />
            </div>
            <div>
                <Works />
            </div>
        </div>
    )
}

export default index