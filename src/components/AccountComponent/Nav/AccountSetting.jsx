import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/24/outline'
import LogOff from './LogOff'

const AccountSetting = ({ handleCurrentClick, currentClick, settingsClass }) => {

    const navDoc = [
        {
            title: 'Your Accounts',
            icon: <ChevronDownIcon className='size-5' />

        },
        {
            title: 'Your Profile',
            icon: <ChevronDownIcon className='size-5' />

        },
        {
            title: 'Your Security',

        }
    ]

    return (
        <div className={`flex-row justify-between text-theme font-medium text-sm tracking-tight ${settingsClass}`}>
            <div className={`items-center flex px-2 py-3 hover:bg-gray-100 hover:text-theme_light cursor-pointer transition-colors duration-200 ease-in-out`}>
                <Link to={'/accounts'}><HomeIcon className='size-5' /></Link></div>
            {navDoc.map((nav, index) => {

                const isVisible = new RegExp(nav.title, 'i').test(currentClick);

                return (
                    <button
                        onClick={() => handleCurrentClick(nav.title)}
                        key={index}
                        className={`${index === navDoc.length - 1 && "border-r"} ${isVisible ? 'bg-[#5a8c00] text-white' : 'hover:bg-gray-100 hover:text-theme_light'}
                        flex items-center gap-x-1 border-l px-2 py-3 w-fit cursor-pointer transition-colors duration-300 ease-in-out
                        `}>
                        <span>{nav.title}</span>
                        <span className={`${isVisible ? 'rotate-x-180' : 'rotate-x-0'} transition-transform ease-in-out duration-300`}>{nav.icon}</span>
                    </button>)
            })}

            <LogOff />
        </div>
    )
}

export default AccountSetting
