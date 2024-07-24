import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { TiPlus } from 'react-icons/ti'
const Pay = () => {
    return (
        <Fragment>
            <div>
                <p className='mt-2 font-semibold text-lg'>To</p>
            </div>
            <div className='flex justify-center my-2'>
                <Link to={'/paynew'} className='text-theme underline hover:no-underline flex items-center gap-x-1'>
                    <span className='font-semibold text-lg '>Pay Someone new </span><span><TiPlus className='w-5 h-5' /></span>
                </Link>
            </div>
        </Fragment>
    )
}

export default Pay
