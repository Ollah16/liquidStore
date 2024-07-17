import React from 'react'
import image from '../../../assets/lloyds-mobile-view-new.png'
import UseLink from '../../Link'
import UseLinkProps from '../../../constants/UseLinkProps'

const MobileApp = () => {

    const { mobileAppLink } = UseLinkProps()

    return (
        <div className='relative overflow-hidden flex flex-col-reverse md:flex-row bg-white my-10'>
            <div className='md:w-6/12 w-full flex items-center'>
                <div className='md:w-10/12 w-full flex flex-col justify-center px-10 mx-auto my-auto'>
                    <h4 className='text-2xl text-start mb-1 font-medium'>Your bank in your pocket</h4>
                    <p className='text-start mb-8'>Join the 8 million customers who already use our highly rated app.</p>
                    <UseLink className={mobileAppLink.className} title={mobileAppLink.title} link={mobileAppLink.link} />
                </div>
            </div>

            <div className='md:w-6/12 w-full flex items-center'>
                <div className='md:w-10/12 w-full'>
                    <img src={image} className='object-cover w-full h-auto' alt='mobile app' />
                </div>
            </div>
        </div>
    )
}

export default MobileApp
