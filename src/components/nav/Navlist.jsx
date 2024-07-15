import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrent } from '../../reduxtoolkit/navslice'
import Button from '../Button'

const Navlist = () => {

    const { navlist, current } = useSelector(state => state.nav)
    const dispatch = useDispatch()

    return (
        <div className="before:w-5 before:lg:w-[2%] before:md:w-[1%] before:content-[''] before:inline-block flex bg-theme_hover border-b-[#649c00] border-b-[.5px] h-[48px] text-sm md:text-lg">
            <ul className="flex text-white items-center h-full">
                {navlist.map((nav, index) => {
                    const className = `${current === nav ? 'bg-theme after:opacity-100' : 'bg-transparent after:opacity-0'} transition-colors after:transition-opacity after:duration-200 after:ease-in-out after:content-[''] after:w-full after:absolute after:bg-theme after:h-1 after:left-0 after:bottom-[-.5px] md:px-7 px-3 cursor-pointer hover:underline transition-underline duration-200 ease-in-out h-full text-center sm:w-max w-full relative`;
                    const clickAction = () => dispatch(getCurrent(nav));

                    return (
                        <li className="h-full w-full"
                            tabIndex={0}
                            key={index}>
                            <Button title={nav} className={className} clickAction={clickAction} />
                        </li>
                    );
                })}
            </ul>
        </div>

    )
}

export default Navlist
