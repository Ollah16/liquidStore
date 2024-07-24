import React, { Fragment } from 'react'

const Reference = () => {
    return (
        <Fragment>
            <div className='md:w-8/12 w-10/12'>
                <button className='text-theme underline text-base mb-3'>More information about our Standard Exchange Rate and fee.</button>
                <p className='text-xl  font-medium mb-[1px]'>Reference (optional)</p>
                <p className='text-base  font-light text-black'>The recipient will see this on their statement</p>
            </div>
            <div className='w-full my-5'>
                <div className='md:w-8/12 w-10/12'>
                    <input className='py-2 w-full inline-block border-2 border-gray-500/70' />
                </div>
            </div>
        </Fragment>
    )
}

export default Reference
