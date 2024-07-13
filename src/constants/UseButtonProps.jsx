import React, { useMemo } from 'react'
import { ChevronRightIcon, LockClosedIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { toggleLoginBox, toggleMenu, toggleSearch } from '../reduxtoolkit/navslice'
import { useDispatch, useSelector } from 'react-redux'

const ButtonProps = () => {

    const dispatch = useDispatch()
    const { isMenu, isLoginDropDown, isSearch } = useSelector(state => state.nav)

    const buttonProps = useMemo(() => {
        return {
            loginBtn: {
                icon: <LockClosedIcon className="size-5" />,
                title: 'Log on',
                clickAction: () => dispatch(toggleLoginBox(!isLoginDropDown)),
                aria_label: 'log on',
                className: `md:w-[120px] w-[80px] px-3 h-full block space-x-2 md:text-lg text-sm md:flex md:flex-row flex flex-col justify-center ${isLoginDropDown ? 'bg-white text-theme underline hover:no-underline' : 'bg-transparent'} transition-colors duration-200 ease-in-out hover:bg-white hover:text-theme font-semibold md:after:h-10 md:after:content-[''] md:after:inline-block md:after:w-[.2px] md:after:bg-white/20 relative md:after:absolute md:after:right-0 flex items-center`
            },
            menuBtn: {
                icon: isMenu ? < XMarkIcon className="size-5" /> : <Bars3Icon className="size-5" />,
                title: isMenu ? 'Close' : 'Menu',
                clickAction: () => dispatch(toggleMenu(!isMenu)),
                aria_label: isMenu ? 'close menu' : 'open menu',
                className: `md:w-[120px] w-[80px] ${isMenu ? 'bg-[#f1f1f1] text-theme' : 'bg-transparent text-white'} font-semibold md:text-lg space-x-2 text-sm md:flex md:flex-row flex flex-col justify-center items-center h-full cursor-pointer ml-[28px] hover:text-theme hover:bg-white px-3 transition-colors duration-200`
            },
            searchBtn: {
                icon: isSearch ? < XMarkIcon className="size-5" /> : <MagnifyingGlassIcon className='rotate-[90deg] size-5' />,
                title: isSearch ? 'Cancel' : 'Search',
                clickAction: () => dispatch(toggleSearch(!isSearch)),
                aria_label: isSearch ? 'close search' : 'open search',
                className: `md:w-[120px] w-[80px] ${isSearch ? 'bg-white text-theme' : 'bg-theme text-white'} justify-center px-3 space-x-2 font-semibold md:text-lg text-sm md:flex md:flex-row flex flex-col items-center transition-colors duration-200 h-full ease-in-out hover:bg-white hover:text-theme`
            },
            personalBtn: {
                className: "w-full flex justify-center bg-theme hover:bg-theme_hover font-bold transition-colors duration-200 ease-in-out py-[12px] px-[24px] hover:underline text-white",
                title: 'Personal',
                aria_label: 'personal account',
            },
            businessBtn: {
                className: "w-full flex justify-center bg-theme hover:bg-theme_hover font-bold transition-colors duration-200 ease-in-out py-[12px] px-[24px] hover:underline text-white",
                title: 'Business',
                aria_label: 'business account',
            },
            registerBtn: {
                className: "text-theme underline font-semibold hover:no-underline transition-underline duration-200 ease-in-out flex gap-1 items-center",
                title: `Register`,
                arrowIcon: <ChevronRightIcon className="size-5" />,
                aria_label: 'register',
            },
            keepSecureBtn: {
                className: "text-theme underline font-semibold hover:no-underline transition-underline duration-200 ease-in-out flex gap-1 items-center",
                title: `Keep me secure`,
                arrowIcon: <ChevronRightIcon className="size-5" />,
                aria_label: 'keep secure',
            }
        }
    }, [isMenu, isLoginDropDown, isSearch, dispatch])


    return buttonProps
}

export default ButtonProps
