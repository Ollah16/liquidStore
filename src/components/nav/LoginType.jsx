import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button'
import ButtonProps from '../../constants/UseButtonProps'

const LoginType = () => {
    const { isLoginDropDown, isNavTopLess } = useSelector(state => state.nav)
    const { personalBtn, registerBtn, businessBtn, keepSecureBtn } = ButtonProps()

    const buttonData = [
        { key: 'personalBtn', data: personalBtn },
        { key: 'businessBtn', data: businessBtn },
        { key: 'registerBtn', data: registerBtn },
        { key: 'keepSecureBtn', data: keepSecureBtn }
    ]

    return (
        <div className={`flex-col w-full text-sm md:text-base sm:h-max h-[calc(100vh-118px)] sm:w-[451px] py-[32px] px-[40px] fixed z-40 bg-white right-0 transition-top ease-in-out duration-500 md:right-[1%] lg:right-[2%] ${isLoginDropDown ? (isNavTopLess && window.innerWidth > 640 ? 'top-0' : 'md:top-[134px] top-[118px]') : 'top-[-5000px]'}`}>
            <p className="mb-5">
                <span className="self-start font-semibold">Internet Banking</span>
            </p>

            {buttonData.map(({ key, data }) => (
                <p className="mb-5" key={key}>
                    <Button className={data.className} title={data.title} arrowIcon={data.arrowIcon} />
                </p>
            ))}
        </div>
    )
}

export default LoginType
