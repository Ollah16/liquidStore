import React, { useState } from 'react'
import AccountFeaures from '../../../constants/AccountConstants/AccountFeaures'
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

const AccountProductServices = () => {

    const [currentFeature, setCurrentFeature] = useState('')

    const accountFeatures = AccountFeaures()

    const handleFeature = (value) => {
        const isExist = value === currentFeature
        const newFeature = isExist ? '' : value
        setCurrentFeature(newFeature)
    }


    return (
        <div className='w-full md:w-full'>
            <div className='w-full bg-theme text-white'>
                <div className='w-full'>
                    <div className="flex flex-col justify-between items-center w-full after:content-[''] after:h-1 after:w-2/12 after:bg-theme_light mb-5"><p className='text-center w-full font-semibold tracking-tight py-5'>OUR PRODUCTS AND SERVICES</p></div>
                    <div className='flex flex-col'>
                        {accountFeatures && accountFeatures.map((act, index) => (
                            <div key={index} className={`text-center w-full flex flex-col ${index === 0 && "before:content-[''] before:h-[.5px] before:w-full before:bg-black/20"} after:content-[''] after:h-[.5px] after:w-full after:bg-black/20`} aria-label={act.title}>
                                <h3 onClick={() => handleFeature(act.title)} className='flex justify-between items-center py-3 px-5 cursor-pointer hover:bg-[#00553e] transition-colors duration-200 ease-in-out'>< span className='w-11/12 text-start md:text-center font-semibold tracking-tight text-sm' > {act.title}</span> {act.title === currentFeature ? <TiMinus className={'text-theme_light size-5'} /> : <TiPlus className={'text-theme_light size-5'} />}</h3>
                                <ul className={`bg-[#005f45] ${act.title === currentFeature ? 'max-h-[500px] p-5' : 'max-h-0'} transition-all ease-in-out duration-300 overflow-hidden`}>
                                    {act?.content?.map((con, ind) => (
                                        <li key={ind} className={`text-start md:text-center hover:underline cursor-pointer py-1`}>{con}</li>
                                    ))}
                                </ul>
                            </div>))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AccountProductServices
