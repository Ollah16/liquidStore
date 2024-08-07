import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeComp = () => {
    return (
        <div>
            <h1 className='mb-6 text-[#323233] text-2xl md:text-4xl tracking-tight font-semibold'>Welcome to Internet Banking</h1>
            <div className='mb-3 md:mb-5'>
                <p className='text-base md:text-lg font-normal md:font-light tracking-tight text-black/80'>If you don't already use Internet Banking, it's simple to <Link href='/register' className="underline text-theme">register online.</Link></p>
            </div>
        </div>

    )
}

export default WelcomeComp
