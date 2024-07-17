import React, { useEffect, useRef, useState } from 'react'
import CustomerSupport from '../../../constants/CustomerSupport'
import UseLink from '../../Link'

const CustomerSupportComp = () => {

    const supportProps = CustomerSupport()
    const supportImageRef = useRef()
    const customerSupportRef = useRef()
    const [innerWeedth, setInnerWeedth] = useState()

    useEffect(() => {
        const repImageRef = supportImageRef.current
        const repCustomerSupp = customerSupportRef.current
        const customHeight = getComputedStyle(repCustomerSupp).height
        const handleHeight = () => {
            repImageRef.style.height = innerWeedth < 768 ? `100%` : customHeight
        }

        handleHeight()

    }, [innerWeedth])

    useEffect(() => {
        const handleInnerWidth = () => {
            setInnerWeedth(window.innerWidth)
        }

        handleInnerWidth()

        window.addEventListener('resize', handleInnerWidth)
        return () => window.removeEventListener('resize', handleInnerWidth)
    }, [])

    return (
        <div className='bg-gray-100 p-5 flex flex-col md:gap-y-10 gap-y-5 md:pb-24 pb-12'>
            <div className='md:py-8 pb-4'>
                <h2 className='text-center text-4xl text-[#333]'>Customer Support</h2>
            </div>
            <div>
                <section className='flex justify-center'>
                    {supportProps.slice(0, 1).map((support, index) => (
                        <div key={index} className='md:w-10/12 w-full flex flex-col h-full items-stretch md:justify-center md:flex-row'>
                            <div className='md:w-6/12 w-full relative'>
                                <img ref={supportImageRef} src={support.image} className='object-cover w-full' alt='support' />
                            </div>
                            <div ref={customerSupportRef} className='md:w-6/12 w-full p-5 bg-white flex flex-col justify-between'>
                                <div className='md:my-16 mb-3'>
                                    <h2 className='text-2xl md:text-[1.77rem] mb-3 font-semibold'>{support.title}</h2>
                                    <p className='text-sm md:text-lg font-medium text-black/80'>{support.subTitle}</p>
                                </div>
                                <UseLink title={support.linkTitle} className={support.linkClassName} link={support.link} />
                            </div>

                        </div>
                    ))}
                </section>
            </div>
            <div>
                <section className='flex flex-col justify-center md:w-10/12 w-full items-center gap-y-7 md:gap-y-14 mx-auto'>
                    {supportProps.slice(1, supportProps.length).map((support, index) => (
                        <div key={index} className='w-full flex flex-col gap-x-5 gap-y-5 items-stretch h-full md:justify-center md:flex-row'>
                            <div className={`w-full md:w-7/12 h-full ${index === 1 ? 'order-2' : 'order-1'}`}>
                                <div className='w-full relative'>
                                    <img src={support.image} className='object-cover w-full h-full' alt='support' />
                                </div>
                                <div className='w-full p-5 bg-white h-full'>
                                    <div className='md:my-5 mb-3'>
                                        <h2 className='text-2xl md:text-[1.77rem] mb-3 font-semibold'>{support.title}</h2>
                                        <p className='text-sm md:text-lg font-medium text-black/80'>{support.subTitle}</p>
                                        <p className='text-sm md:text-lg font-medium text-black/80'>{support.subTitleOne}</p>
                                    </div>
                                    <UseLink title={support.linkTitle} className={support.linkClassName} link={support.link} />
                                </div>
                            </div>
                            <div className={`bg-theme w-full md:w-5/12 p-5 flex flex-col justify-between ${index === 1 ? 'order-1' : 'order-2'}`}>
                                <div className='mb-6 mt-10 w-full'>
                                    <span className='size-12'>{support.svg}</span>
                                </div>
                                <div className='mb-14'>
                                    <h2 className='text-white font-semibold text-2xl md:text-3xl mb-5'>{support.infoTitle}</h2>
                                    <p className='text-white font-semibold text-sm md:text-base'>{support.infoSubTitle}</p>
                                </div>
                                <div>
                                    <UseLink title={support.infoLinkTitle} className={support.infoLinkClassName} link={support.infoLink} />
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div >
        </div >
    )
}

export default CustomerSupportComp
