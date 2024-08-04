import React from 'react'
import NavLinks from '../../../constants/NavLinks';
import Accounts from '../Account/Accounts';
import { getCurrentClick } from '../../../reduxtoolkit/navslice';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Profile'

const MobileSetting = () => {

    const navLinks = NavLinks()
    const { currentClick } = useSelector(state => state.nav)
    const dispatch = useDispatch()

    const buttonClass = `after:content-[''] after:bg-theme_light after:w-full after:h-[.5px] after:left-0 after:absolute after:bottom-0 relative w-full`

    return (
        <div className='block md:hidden'>
            {navLinks.map((nav, index) => {

                const isVisible = new RegExp(nav.title, 'i').test(currentClick);

                return (<div key={index}>
                    <button
                        onClick={() => dispatch(getCurrentClick(nav.title))}

                        className={`flex uppercase font-semibold hover:bg-white/5 items-center justify-between text-white gap-x-1 px-5 py-5 w-fit cursor-pointer transition-colors duration-300 ease-in-out ${buttonClass}
        `}>
                        <span>{nav.title}</span>
                        <span className={`${isVisible ? 'rotate-x-180' : 'rotate-x-0'} transition-transform ease-in-out duration-300`}>{nav.icon}</span>
                    </button>
                    <div className={`${isVisible ? 'max-h-[500px]' : 'max-h-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
                        <Accounts />
                    </div>
                    <div className={`${isVisible ? 'max-h-[2000px]' : 'max-h-0'} overflow-y-auto transition-all duration-300 ease-in-out overflow-hidden`}>
                        <Profile />
                    </div>
                </div>)
            })}
        </div>
    )
}

export default MobileSetting
