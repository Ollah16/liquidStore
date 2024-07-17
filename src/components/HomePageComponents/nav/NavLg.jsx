import React from 'react'
import ButtonProps from '../../../constants/UseButtonProps'
import Button from '../../Button'
import Search from './Search'
import Navbrand from '../../Navbrand'
import Navlist from './Navlist'

const NavLg = () => {
    const { loginBtn, menuBtn } = ButtonProps()

    return (
        <div className='md:block hidden'>
            <Navlist />

            <div
                className="bg-theme text-white before:md:w-[1%] before:lg:w-[2%] before:content-[''] before:inline-block after:md:w-[1%] after:lg:w-[2%] after:content-[''] after:inline-block flex h-[94px]">

                <div className='flex justify-between gap-5 md:gap-0 items-center lg:w-[92%] md:w-[98%]'>

                    <div className='flex h-full items-center'>

                        <Navbrand />

                        <Button className={menuBtn.className} clickAction={menuBtn.clickAction} title={menuBtn.title} icon={menuBtn.icon} />

                    </div>

                    <div className="flex justify-between items-center md:gap-10 gap-0 h-full">
                        <Search />

                        <div className='h-full'>
                            <Button className={loginBtn.className} clickAction={loginBtn.clickAction} title={loginBtn.title} icon={loginBtn.icon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavLg
