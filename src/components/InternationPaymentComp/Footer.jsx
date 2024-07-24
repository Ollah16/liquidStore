import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#004A36] text-white py-10'>
            <ul className='sm:w-8/12 px-5 md:px-0 w-full mx-auto flex sm:flex-row flex-col gap-x-7'>
                <li className='hover:underline cursor-pointer w-fit'>Legal</li>
                <li className='hover:underline cursor-pointer w-fit'>Privacy</li>
                <li className='hover:underline cursor-pointer w-fit'>Security</li>
                <li className='hover:underline cursor-pointer w-fit'>Cookies</li>
                <li className='hover:underline cursor-pointer w-fit'>Rate and charges</li>
                <li className='hover:underline cursor-pointer w-fit'>Lloyds Banking Group</li >
            </ul>
        </footer >
    )
}

export default Footer
