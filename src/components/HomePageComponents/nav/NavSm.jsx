import React from 'react'
import ButtonProps from '../../../constants/UseButtonProps'
import Navlist from './Navlist'
import Navbrand from '../../Navbrand'
import Button from '../../Button'
import Search from './Search'

const NavSm = () => {
    const { loginBtn, menuBtn } = ButtonProps()

    return (
        <div className='md:hidden block'>
            <Navlist />

            <div className="bg-theme text-white before:w-5 md:before:w-[4%] h-[70px] md:before:content-[''] md:before:inline-block after:w-5 md:after:w-[4%] md:after:content-[''] md:after:inline-block flex">

                <div className='flex justify-between md:gap-0 w-full items-center h-full'>

                    <div className='flex h-full items-center'>
                        <Navbrand />
                    </div>

                    <div className="flex justify-between items-center h-full">
                        <Button className={menuBtn.className} clickAction={menuBtn.clickAction} title={menuBtn.title} icon={menuBtn.icon} />

                        <Search />

                        <Button className={loginBtn.className} clickAction={loginBtn.clickAction} title={loginBtn.title} icon={loginBtn.icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSm
