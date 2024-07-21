import React from 'react'
import UseLink from '../../Link'
import BenefitsProps from '../../../constants/HomePageConstants/BenefitsProps'
import image from '../../../assets/lloyds-homepage-strategic-engagement.jpg'

const Benefits = () => {
    const benProps = BenefitsProps()

    return (
        <div className='bg-gray-100 p-5 flex flex-col items-center'>
            <div className='mb-6 flex flex-col md:flex-row justify-center md:w-10/12 w-full'>
                <div className='md:w-6/12 w-full'>
                    <img src={image} alt='lloyds-homepage-strategic-engagement.jpg' />
                </div>
                <div className='p-5 md:w-6/12 w-full flex flex-col md:justify-center'>
                    <h2 className='text-[1.55rem] md:text-4xl font-semibold mb-3'>Welcome to Club Lloyds</h2>
                    <p className='text-[.888rem] md:text-lg text-[#333]'>The inclusive account with exclusive benefits.</p>
                    <p className='text-[.888rem] md:text-lg text-[#333]'>£3 monthly fee, waived each month that you pay in £2,000 or more. </p>
                </div>
            </div>
            <div>
                <ul className='flex flex-col sm:flex-row sm:gap-x-5 sm:justify-center justify-between gap-y-5 md:mt-[-5rem] md:mr-[-5rem]'>
                    {benProps.map((ben, index) => (
                        <li key={index} className='p-5 bg-white w-full sm:w-4/12 md:w-[20%] flex flex-col justify-between'>
                            <div className='mb-6 mt-10 w-full'>
                                <span className='h-full w-full size-16'>{ben.svg}</span>
                            </div>
                            <div className='mb-7 sm:mb-10'>
                                <h2 className='text-[1.55rem] leading-8 mb-3 font-semibold'>{ben.title}</h2>
                                <p className='text-sm md:text-lg text[#333]/80 font-medium md:font-normal'>{ben.subTitle}</p>
                            </div>
                            <UseLink title={ben.linkTitle} link={ben.link} className={ben.linkClass} icon={ben.icon} />
                        </li>))
                    }
                </ul>
            </div>

        </div >
    )
}

export default Benefits
