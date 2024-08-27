import React, { useState } from 'react'
import AccountFooter from '../../constants/AccountConstants/Footer'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerList = AccountFooter()

    const [currentClick, setCurrent] = useState()

    const handleCurrent = (value) => {
        const isExist = currentClick === value
        const newClick = isExist ? '' : value
        setCurrent(newClick)
    }

    return (
        <div className='w-full'>
            <div className='w-full bg-theme text-white tracking-tight py-10'>
                <div className='w-full lg:w-10/12 px-5 lg:px-0 mx-auto'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        {
                            footerList.map((item, index) => {
                                const isVisible = currentClick === item.title

                                return (<div key={index}>
                                    <div
                                        onClick={() => handleCurrent(item.title)}
                                        className={`text-base font-medium mb-0 md:mb-2 cursor-pointer md:cursor-default flex flex-col relative md:block after:inline-block after:w-full ${currentClick === item.title ? 'after:max-h-0' : 'after:max-h-[.5px]'} transition-all duration-300 ease-in-out after:md:hidden after:absolute after:bottom-0 after:h-[.3px] after:content-[''] after:bg-white/40`}>
                                        <div className='w-full flex justify-between items-center py-2 text-sm'>
                                            <span>{item.title}</span>
                                            <ChevronDownIcon className={`size-6 md:hidden transition-all ease-in-out duration-300 ${isVisible ? 'rotate-x-180' : 'rotate-x-0'}`} />
                                        </div>
                                    </div>

                                    {item.content.map((foot, index) => (
                                        <ul key={index} className={`${isVisible ? 'max-h-[1000px]' : 'max-h-0'} md:max-h-full transition-all ease-in-out duration-300 overflow-hidden`}>
                                            <li className={`py-1 md:block cursor-pointer hover:underline text-sm font-light w-fit`}>
                                                <Link to={`/${foot}`}>{foot}</Link>
                                            </li>
                                        </ul>)
                                    )}

                                </div>)
                            })
                        }
                    </div>
                </div>
            </div >
            <div className='w-full lg:w-10/12 px-5 lg:px-0 mx-auto text-sm text-black/60 py-5'>
                <p className='mb-2'>Lloyds Premier Bank plc is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 119278.</p>
                <p className='mb-2'>Lloyds Premier Bank plc is covered by the Financial Services Compensation Scheme and the Financial Ombudsman Service. (Please note that due to the schemes eligibility criteria not all Lloyds Premier Bank business customers will be covered by these schemes.)</p>
                <p className='mb-2'>Calls may be recorded for our mutual protection, training and monitoring purposes.</p>
                <p className='mb-2'>Accounts in Jersey, the Bailiwick of Guernsey and the Isle of Man are held by Lloyds Premier Bank International Limited which is not and is not required to be, authorised under the Financial Services and Markets Act 2000 of the United Kingdom and therefore is not subject to the rules and regulations of the Financial Services Compensation Scheme made under that Act for the protection of depositors or investors.For more information about depositor compensation schemes in Jersey, the Bailiwick of Guernsey and the Isle of Man please click here.</p>
                <p className='mb-2'>Lloyds Premier Bank International Limited.Registered office and principal place of business: PO Box 160, 25 New Street, St.Helier, Jersey JE4 8RG.Lloyds Premier Bank International Limited is incorporated in Jersey No. 4029 and is regulated by the Jersey Financial Services Commission to carry on deposit - taking business under the Banking Business(Jersey) Law 1991 and investment and general insurance mediation business under the Financial Services(Jersey) Law 1998. Lloyds Premier Bank International Limited subscribes to the Jersey Code of Practice for Consumer Lending and has also notified the Jersey Financial Services Commission that it carries on money service business.</p>
                <p className='mb-2'>The Guernsey branch of Lloyds Premier Bank International Limited, principal place of business PO Box 136, Sarnia House, Le Truchot, St Peter Port, Guernsey, GY1 4EN, is licensed by the Guernsey Financial Services Commission to take deposits and to carry on controlled investment business and insurance intermediary business under The Banking Supervision(Bailiwick of Guernsey) Law, 1994, The Protection of Investors(Bailiwick of Guernsey) Law, 1987(as amended) and The Insurance Managers and Insurance Intermediaries(Bailiwick of Guernsey) Law, 2002(as amended), respectively, and is also registered with the Guernsey Financial Services Commission as a money service provider.</p>
                <p className='mb-2'>The Isle of Man branch of Lloyds Premier Bank International Limited of PO Box 111, Peveril Buildings, Peveril Square, Douglas, Isle of Man IM99 1JJ, is licensed by the Isle of Man Financial Services Authority to conduct deposit - taking and investment business and is also registered as an insurance intermediary in respect of general business.</p>
            </div>
        </div>)
}

export default Footer





