import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import Button from '../Button'
import fscsImg from '../../assets/fscsAuthimg.png'
import HelpSupportContact from '../../constants/HelpSupportContact'

const HelpSupport = () => {
    const [currentClick, setCurrentClick] = useState('')
    const [currentTitle, setCurrentTitle] = useState('')

    const { help_Support, contactUs } = HelpSupportContact()

    const handleCurrentClick = (type) => {
        const isExist = currentClick?.includes(type)
        const newClick = isExist ? null : type
        setCurrentClick(newClick)
    }

    const handleContent = (value) => {
        const isExist = currentTitle?.includes(value)
        const newTitle = isExist ? null : value
        setCurrentTitle(newTitle)
    }

    return (
        <div>
            <div className='flex flex-col'>
                <div className={`border border-black/20 ${currentClick === 'Help & Support' ? 'border-b' : 'border-b-0'} px-5`}>
                    <div className='flex justify-between py-3'>
                        <Button clickAction={() => handleCurrentClick('Help & Support')} className={'text-lg font-bold text-theme flex flex-row-reverse justify-between w-full items-center'} title={`Help & Support`} icon={<ChevronDownIcon className='size-5 text-theme' />} />
                    </div>
                    <div className={`${currentClick === 'Help & Support' ? 'block' : 'hidden'}`}>
                        {help_Support.map((help, index) => (
                            <ul key={index}>
                                <li className='py-1'>
                                    <Button clickAction={() => handleContent(help.title)} title={help.title} icon={<ChevronDownIcon className={`size-6 text-theme ${help.title === currentTitle ? 'rotate-180' : 'rotate-0'}`} />} className={`flex justify-between gap-x-3 items-start font-semibold text-black/80 tracking-tight w-fit text-start`} />
                                </li>
                                <li className={`${help.title === currentTitle ? 'block' : 'hidden'} text-md font-light tracking-tight py-2`}>{help.content}</li>
                            </ul>))}
                    </div>
                </div>

                <div className={`border border-black/20 ${currentClick === 'Help & Support' ? 'border-t-0' : 'border-t'} px-5`}>
                    <div className='flex justify-between py-3'>
                        <Button clickAction={() => handleCurrentClick('Contact Us')} className={'text-lg font-bold text-theme flex flex-row-reverse justify-between w-full items-center'} title={`Contact Us`} icon={<ChevronDownIcon className='size-5 text-theme' />} />
                    </div>
                    <div className={`${currentClick === 'Contact Us' ? 'block' : 'hidden'}`}>
                        {contactUs.map((con, index) => (
                            <ul key={index} className='tracking-tight mb-4'>
                                <li><p className='text-lg text-black/80'><strong>{con.title}</strong></p></li>
                                <li><p className='text-black/80 text-md font-medium'>{con.phone}</p></li>
                                <li><p className='text-light'>{con.content}</p></li>
                            </ul>))}
                    </div>
                </div>

                <div className='border border-black/20 p-5 flex justify-center items-center mt-2'>
                    <img src={fscsImg} alt='fscs' className='h-auto w-auto' />
                </div>
            </div >
        </div >
    )
}

export default HelpSupport
