import React, { useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import FooterProps from '../../constants/FooterProps'

const FooterList = () => {
    const footerPropt = FooterProps()
    const [footerList, setList] = useState([])

    const handleFooter = (type) => {
        let newList = [...footerList]
        const isExist = newList.includes(type)
        newList = isExist ? newList.filter(_ => _ !== type) : [...newList, type]
        setList(newList)
    }

    return (
        <div className="after:content-[''] after:w-full after:hidden after:md:inline-block after:h-[.5px] after:bg-white/50 w-full px-5 md:px-0 md:w-11/12 overflow-hidden">
            <div className='flex flex-col md:flex-row justify-between gap-x-5 w-full'>
                {footerPropt.map((footer, ind) => {
                    const isClicked = footerList.includes(footer.title)
                    return (<ul key={ind} className={`text-white md:px-3 px-0 overflow-hidden`}>
                        <li className={`text-md md:text-lg md:mb-6 pb-3 md:pt-0 cursor-pointer md:cursor-default after:w-full after:content-[''] ${isClicked ? 'after:hidden' : 'after:inline-block'} md:after:hidden after:h-[.3px] after:bg-white/20 leading-normal`} onClick={() => handleFooter(footer.title)}>
                            <h3 className='w-full flex justify-between items-center'><strong>{footer.title}</strong> <ChevronUpIcon className={`md:hidden block text-white size-8 ${isClicked ? 'rotate-0' : 'rotate-180'}`} /></h3></li>

                        <ul className={`${isClicked ? 'h-auto' : 'h-0'} md:h-full transition-height ease-in-out duration-300 top-0 relative`}>
                            {footer.items.map((foot, index) => (
                                <li key={index} className={`md:block text-md md:text-lg hover:underline cursor-pointer text-white/75 pb-3`}>{foot}</li>
                            )
                            )}
                        </ul>
                    </ul>)
                })}
            </div>
        </div>
    )
}

export default FooterList
