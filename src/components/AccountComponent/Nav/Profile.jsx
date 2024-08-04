import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDocs from '../../../constants/AccountConstants/ProfileDocs'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'


const Profile = ({ className }) => {

    const { currentClick } = useSelector(state => state.nav)
    const isVisible = /profile/i.test(currentClick)
    const profileDocs = ProfileDocs()
    const { address, email, phone } = useSelector(state => state.auth)

    return (
        <div className={`overflow-hidden ${className} bg-white ${isVisible ? 'max-h-[800px]' : 'max-h-0'} transition-all ease-in-out duration-300`}>
            <div className={`z-10 transition-top transition-position duration-300 ease-in-out w-full relative pt-5 md:pb-10`}>

                <div className='flex flex-col md:flex-row flex-wrap justify-between w-full md:w-10/12 px-5 md:p-0 mx-auto tracking-tight font-normal'>
                    <div className='w-full md:w-4/12 text-light'>
                        <div className='relative text-sm font-medium py-2 after:w-1/12 after:h-[1px] after:content-[""] after:inline-block after:bg-theme_light after:absolute after:left-0 after:-bottom-1'>YOUR PERSONAL DETAILS</div>
                        <div className='uppercase pb-2'>{address.houseNo}</div>

                        <div className='uppercase py-2'>{address.street}</div>

                        <div className='uppercase py-2'>{address.city}</div>

                        <div className='uppercase py-2'>{address.state}</div>

                        <div className='uppercase py-2'>{address.postCode}</div>

                        <div> {phone} (Mobile)</div>
                        <div className='uppercase py-2'>{email}</div>
                        <Link to={'/'} className='text-theme font-semibold flex items-center text-sm py-2'><ChevronRightIcon className='size-4' /> Change your contact details</Link>
                    </div>

                    <div className='flex flex-col md:flex-row gap-y-5 w-8/12 flex-wrap'>
                        {profileDocs.map((prof, index) => (
                            <div key={index} className='w-full md:w-6/12 px-0 md:px-5'>
                                <div className='relative text-sm font-medium py-2 after:w-1/12 after:h-[1px] after:content-[""] after:inline-block after:bg-theme_light after:absolute after:left-0 after:-bottom-1'>{prof.title}</div>


                                < ul>
                                    {prof.content?.map((list, ind) => (
                                        <li key={ind} className='font-light py-2'>{list}</li>
                                    ))}
                                </ul>

                                < ul className='py-3'>
                                    {prof.links?.map((list, ind) => (
                                        <li key={ind} className='w-full py-2'>
                                            <Link to={'/'} className='text-theme font-semibold flex items-center text-sm'>
                                                <ChevronRightIcon className='size-4' /><span>{list}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile
