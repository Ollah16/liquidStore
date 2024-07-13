import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Button from '../Button'
import '../paginate/Paginate.css'

const PaginatorControl = ({ clickAction, parentClassName, isBtnForwardDisable, isBtnPrevDisable }) => {

    const arrowIcon = [
        {
            icon: <ArrowLongLeftIcon className='md:size-16 size-12' />,
            type: 'previous',
            isBtnDisable: isBtnPrevDisable,
            className: `${isBtnPrevDisable ? 'text-gray-500 bg-gray-200 hover:bg-none cursor-not-allowed' : 'hover:bg-[#77ba00] bg-theme text-white cursor-pointer'}`
        },
        {
            icon: <ArrowLongRightIcon className='md:size-16 size-12' />,
            type: 'forward',
            isBtnDisable: isBtnForwardDisable,
            className: `${isBtnForwardDisable ? 'text-gray-500 bg-gray-200 hover:bg-none cursor-not-allowed' : 'hover:bg-[#77ba00] bg-theme text-white cursor-pointer'}`
        }

    ]

    return (
        <div className={parentClassName}>
            {arrowIcon.map((_, ind) => (
                <Button
                    clickAction={() => clickAction(_.type)}
                    aria_label={'paginateButton'}
                    key={ind}
                    disabled={_.isBtnDisable}
                    className={_.className}
                    title={_.icon} />
            ))}
        </div>
    )
}

export default PaginatorControl
