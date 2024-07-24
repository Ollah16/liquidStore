import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const AccountFunctions = memo(({ path_Name }) => {

    return (
        <div className='w-full md:w-4/12 mx-auto'>
            {path_Name ?
                <button className='opacity-0 cursor-default h-[56px]'>

                </button>
                : <Link to={'/accountstatement'} className='bg-gray-100 flex flex-col w-full text-sm font-medium tracking-tight after:bg-white after:w-full after:inline-block after-content-[""] after:h-[.4px]'>
                    <div className='flex justify-between w-full p-4 text-theme hover:text-theme_light ease-in-out duration-200 transition-colors'><span>View statement</span> <ChevronRightIcon className='size-6' /></div>
                </Link>
            }

            <button className='bg-gray-100 w-full flex flex-col text-sm font-medium tracking-tight after:bg-white after:w-full after:inline-block after-content-[""] after:h-[.4px]'>
                <Link to={'/makepayment'} className='flex justify-between w-full p-4 text-theme hover:text-theme_light ease-in-out duration-200 transition-colors'><span>Make a payment</span> <ChevronRightIcon className='size-6' /></Link>
            </button>
            <button className='w-full flex flex-col text-sm font-medium tracking-tight after:bg-white after:w-full after:inline-block after-content-[""] after:h-[.4px]'>
                <div className='flex justify-between w-full p-4 bg-[#d24702] text-white hover:bg-[#ae3c04] duration-200 ease-in-out transition-colors'><span>Upgrade account</span> <ChevronRightIcon className='size-6' /></div>
            </button>
            <button className={`${path_Name ? 'bg-theme_light hover:bg-theme_light/80' : 'bg-theme hover:bg-[#00553e]'} w-full p-4 text-white flex justify-between items-center text-sm font-medium tracking-tight  transition-colors duration-200 ease-in-out`}>
                <div className='flex justify-between w-full'><span>More actions</span> <ChevronRightIcon className='size-6' /></div>
            </button>
        </div >
    )
})

export default AccountFunctions
