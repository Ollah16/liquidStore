import React from 'react'
import { useSelector } from 'react-redux'
import UseLink from '../../Link'
import UseLinkProps from '../../../constants/HomePageConstants/UseLinkProps'

const LoginType = () => {
    const { isLoginDropDown, isNavTopLess } = useSelector(state => state.nav)
    const { personalLink, registerLink, businessLink, keepSecureLink } = UseLinkProps()

    const buttonData = [
        { key: 'personalLink', data: personalLink },
        { key: 'businessLink', data: businessLink },
        { key: 'registerLink', data: registerLink },
        { key: 'keepSecureLink', data: keepSecureLink }
    ]


    return (
        <div className={`flex-col w-full text-sm md:text-base sm:h-max h-[calc(100vh-118px)] sm:w-[451px] py-[32px] px-[40px] fixed z-40 bg-white right-0 transition-top ease-in-out duration-500 md:right-[1%] lg:right-[2%] ${isLoginDropDown ? (isNavTopLess && window.innerWidth > 640 ? 'top-0' : 'md:top-[134px] top-[118px]') : 'top-[-5000px]'}`}>
            <p className="mb-5">
                <span className="self-start font-semibold">Internet Banking</span>
            </p>


            {buttonData.map(({ key, data }) => {
                return (
                    <div className="mb-5" key={key}>
                        <UseLink className={data.className} title={data.title} icon={data.arrowIcon} link={data.link} />
                    </div>
                )
            })}
        </div>
    )
}

export default LoginType
