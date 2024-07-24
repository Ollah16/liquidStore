import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-[#004A36] text-white py-10'>
            <ul className='sm:w-11/12 md:w-10/12 lg:w-8/12 px-5 sm:px-0 w-full mx-auto flex sm:flex-row flex-col gap-x-7'>
                <li className='hover:underline cursor-pointer w-fit'><Link to={'/notfound'}>Legal</Link></li>
                <li className='hover:underline cursor-pointer w-fit'><Link to={'/notfound'}>Privacy</Link></li>
                <li className='hover:underline cursor-pointer w-fit'><Link to={'/notfound'}>Security</Link></li>
                <li className='hover:underline cursor-pointer w-fit'><Link to={'/notfound'}>Cookies</Link></li>
                <li className='hover:underline cursor-pointer w-fit'><Link to={'/notfound'}>Rate and charges</Link></li>
                <li className='hover:underline cursor-pointer w-fit'><Link to={'/notfound'}>Lloyds Banking Group</Link></li >
            </ul>
        </footer >
    )
}

export default Footer
