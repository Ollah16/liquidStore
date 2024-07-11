import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClickedMenu } from '../../reduxtoolkit/navslice'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const MenuContent = () => {
    const { menuContent } = useSelector(state => state.nav)

    const dispatch = useDispatch()
    const menuRef = useRef([])

    useEffect(() => {
        const refMenu = menuRef.current
        const handleMouseEnter = (event) => {
            if (window.innerWidth < 768) return
            const menuId = event.target.id;
            dispatch(getClickedMenu(menuId));
        };

        // Add event listeners
        refMenu.forEach(element => {
            if (element) {
                element.addEventListener('mouseenter', handleMouseEnter);
            }
        });

        // Cleanup function to remove event listeners
        return () => {
            refMenu.forEach(element => {
                if (element) {
                    element.removeEventListener('mouseenter', handleMouseEnter);
                }
            });
        };
    }, [dispatch, menuContent]);

    return (
        <ul className='flex flex-col justify-between gap-2 w-full md:w-3/12'>
            {menuContent.map((menu, index) => (
                <li
                    id={menu.id}
                    ref={(el) => menuRef.current[index] = el}
                    onClick={() => (dispatch(getClickedMenu(menu.id)))}
                    key={index}
                    tabIndex={0}
                    className={`flex items-center space-y-[.5px] cursor-pointer md:w-11/12 w-full before:content-[''] before:opacity-0 before:w-1 before:bg-theme hover:before:opacity-100 before:inline-block before:h-full gap-2 hover:bg-white`} >
                    <div className='flex justify-between items-center w-11/12 py-3'>
                        <div className='flex flex-col'>
                            <span className=' text-theme font-semibold text-xl'>{menu.title}</span>
                            <span className='tracking-tight'>{menu.subTitle}</span>
                        </div>
                        <div>
                            <span className='flex items-center justify-end'><ChevronRightIcon className='size-5' /></span>
                        </div>

                    </div>
                </li>

            ))}
        </ul>
    )
}

export default MenuContent
