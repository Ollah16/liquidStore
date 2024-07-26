import React, { useState } from 'react'
import HelpSupport from '../../constants/InternationalPayment/HelpAndSupport'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'

const HelpAndSupport = () => {
    const helpSupport = HelpSupport()
    const [currentHelp, setCurrent] = useState(['Contact Us'])

    const { pathname } = useLocation()

    const handleClick = (value) => {
        let newCurrent = [...currentHelp]
        const isExist = newCurrent.find(_ => _ === value)
        newCurrent = isExist ? newCurrent.filter(_ => value !== _) : [...newCurrent, value]
        setCurrent(newCurrent)
    }

    return (
        <div className={`w-4/12 bg-white p-5 h-fit ${pathname === '/paynew' || pathname === '/confirmintpayment' && 'mt-[70px]'} md:block hidden`}>
            <div className='text-center flex flex-col items-center mb-5 text-xl py-5 relative after:absolute after:w-10/12 after:bottom-0 after:inline-block after:h-[.5px] after:bg-black'>Help & Support</div>

            {helpSupport.map((help, index) => {
                const currentClick = currentHelp.find(_ => _ === help.title)

                return (<div key={index}>
                    <div className={`cursor-pointer ${currentClick && 'underline'} flex justify-between items-center text-theme py-2`} onClick={() => handleClick(help.title)}>
                        <span className='w-10/12 inline-block font-semibold text-lg'>{help.title}</span>
                        <span className='w-2/12 flex justify-end'><ChevronDownIcon className={`size-5 ${currentClick ? 'rotate-x-180' : 'rotate-x-0'} transition-all ease-in-out duration-300`} /></span></div>
                    <div className={`${currentClick ? 'max-h-[500px' : 'max-h-0'} transition-all ease-in-out duration-300 overflow-hidden`}>
                        {help.subContent && help.subContent.map((con, ind) => (
                            <ul key={ind}>
                                <li className='mb-5 text-lg'>{con.title}</li>
                                <li className='mb-5 text-base text-black/70'>{con.content}</li>
                                <li className='mb-5 font-medium'>{con.phone}</li>
                                <li className='mb-5 text-base text-black/70'>{con.subContent}</li>
                            </ul>
                        ))}
                        {help.content && help.content.map((con, inde) => (
                            <ul key={inde}>
                                <li className='mb-5 text-base text-black/70 text-balance'>{con}</li>
                            </ul>
                        ))}
                    </div>
                </div>)
            })}
        </div>
    )
}

export default HelpAndSupport
