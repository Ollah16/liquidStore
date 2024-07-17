import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button'
import mobileImg from '../../../assets/mobileAppLogo.png'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

const FormFeatures = () => {

    return (
        <div>
            <div className="after:h-[.5px] after:w-full after:content-[''] after:bg-black/70 after:inline-block mb-5">
                <div className='flex items-center gap-x-2 mb-2'>
                    <input type='checkbox' className='h-10 w-7 inline-block' />
                    <span className='text-md font-light tracking-tight'>Remember my user ID</span>
                    <ExclamationCircleIcon className='size-5 text-theme' />
                </div>
                <div>
                    <p className='text-md font-light tracking-tight'><strong>Warning:</strong> Don’t tick this box if you’re using a public or shared computer</p>
                </div>
            </div>

            <div className="after:h-[.5px] after:w-full after:content-[''] after:bg-black/70 after:inline-block mb-5">
                <div className='flex justify-between items-center'>
                    <Link href='/' className='text-theme underline font-semibold text-lg'>Forgotten your login details?</Link>
                    <Button title={'continue'} className={'font-bold text-lg bg-theme text-white py-2 px-5'} />
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-x-5 gap-y-5'>
                <div>
                    <img src={mobileImg} alt='mobilelogo' className='w-36' />
                </div>
                <div className='tracking-tight'>
                    <div className='mb-4'>
                        <p className='text-lg font-semibold text-theme mb-3'>Why not try our secure Mobile Banking app?</p>
                        <p className='text-md font-light'>With our app you get access to lots of extra features to make banking even easier. Things like freeze your card, check your PIN and set your own contactless limit.</p>
                    </div>
                    <Link href='/' className='text-theme underline text-md font-light'>How to set up the app</Link>
                </div>
            </div>
        </div>
    )
}

export default FormFeatures
