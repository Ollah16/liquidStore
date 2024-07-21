import React, { useEffect, useRef } from 'react'
import CarFinanceProps from '../../../constants/HomePageConstants/CarFinanceProps'
import UseLink from '../../Link'

const CarFinance = () => {

    const { title, subTitleOne, subTitle, linkClassName, linkTitle, link, image } = CarFinanceProps()
    const carDeetRef = useRef()
    const imgRef = useRef()

    useEffect(() => {
        const repCarDeet = carDeetRef.current
        const repImgRef = imgRef.current
        const handleImage = () => {
            repImgRef.style.height = window.innerWidth > 768 ? `${repCarDeet.offsetHeight}px` : '100%'
        }
        handleImage()
        window.addEventListener('resize', handleImage)
        return () => window.removeEventListener('resize', handleImage)
    }, [])

    return (
        <div className='bg-white md:py-24 py-12 px-5'>
            {<div className='flex flex-col-reverse md:flex-row md:w-10/12 w-full mx-auto overflow-hidden'>
                <div className='w-full md:w-6/12 p-5 md:py-24 lg:py-48 md:px-12 lg:px-24 bg-gray-100 h-full'
                    ref={carDeetRef}>
                    <div className='mb-7'>
                        <h3 className='text-2xl md:text-3xl mb-3 font-semibold'>{title}</h3>
                        <p className='text-sm md:text-lg mb-3 text-black/80 font-medium'>{subTitle}</p>
                        <p className='text-sm md:text-lg text-black/80 font-medium'>{subTitleOne}</p>
                    </div>
                    <div>
                        <UseLink className={linkClassName} title={linkTitle} link={link} />
                    </div>
                </div>
                <div className='w-full md:w-6/12'>
                    <img src={image} ref={imgRef} className='w-full inline-block' alt='car finance' />
                </div>
            </div>}
        </div>


    )
}

export default CarFinance
