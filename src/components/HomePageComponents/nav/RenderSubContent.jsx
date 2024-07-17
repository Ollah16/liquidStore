import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react'

const RenderMenuContent = ({ content, contentIndex }) => {
    return (
        <ul key={contentIndex}
            tabIndex={0}
            className='w-full md:w-4/12 h-fit px-5 inline-block flex-grow-0'>
            {content && content.map((item, index) => (
                <li key={index} className={`${index === 0 ? 'text-theme text-lg font-bold' : 'text-black/80 text-base'} font-semibold py-[.5px] hover:underline cursor-pointer flex items-center space-x-2 group`}>
                    <span>{item} </span>
                    {index === 0 && <span className='group-hover:translate-x-2 transition-transform duration-200 ease-in-out'><ChevronRightIcon className='size-5' /></span>}
                </li>
            ))}
        </ul>
    );

}

export default RenderMenuContent
