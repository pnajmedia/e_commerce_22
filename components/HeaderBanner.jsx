import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const HeaderBanner = ({ headerBanner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{headerBanner.smallText}</p>
                <h3>{headerBanner.midText}</h3>
                <h1>{headerBanner.largeText1}</h1>
                <img src={urlFor(headerBanner.image)} className='hero-banner-image' alt='vintage-camera' />
                <div>
                    <Link href={`/product/${headerBanner.product}`}>
                        <button type='button'>{headerBanner.buttonText}</button>
                    </Link>
                    <div className='desc'><h5>DESCRIPTION</h5><p>{headerBanner.desc}</p></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner