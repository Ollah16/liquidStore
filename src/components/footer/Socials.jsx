import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Button from '../Button';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import UseLink from '../Link';

const Socials = () => {

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    return (
        <div className='md:w-11/12 w-full py-8 px-5 md:px-0'>
            <div className='w-full flex justify-between'>
                <div className='text-white flex items-center gap-x-3 md:gap-x-5'>
                    <p className='text-md md:text-lg'>Connect with us</p>
                    <UseLink icon={<FaXTwitter className='size-6 hover:text-[#77ba00] transition-colors duration-200 ease-in-out' />} link='/' />
                    <UseLink icon={<AiFillFacebook className='size-6 hover:text-[#77ba00] transition-colors duration-200 ease-in-out' />} link='/' />
                    <UseLink icon={<FaYoutube className='size-6 hover:text-[#77ba00] transition-colors duration-200 ease-in-out' />} link='/' />
                    <UseLink icon={<FaInstagram className='size-6 hover:text-[#77ba00] transition-colors duration-200 ease-in-out' />} link='/' />
                </div>
                <Button
                    clickAction={() => handleScrollTop()}
                    title={'Back to top'}
                    className={'underline hover:no-underline text-md md:text-lg flex flex-row-reverse gap-x-1 items-center text-white'}
                    icon={<ChevronUpIcon className='md:size-5 size-2' />} />
            </div>
        </div>
    )
}

export default Socials
