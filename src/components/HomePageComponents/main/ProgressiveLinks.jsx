import React from 'react'
import UseLinkProps from '../../../constants/UseLinkProps'
import UseLink from '../../Link'

const ProgressiveLinks = () => {
    const { mortgageLink, moneyWLink, protectLink, logOnLink } = UseLinkProps()
    const progressiveLinks = { mortgageLink, moneyWLink, protectLink, logOnLink }

    return (
        <div className='w-full relative md:flex md:justify-center h-auto md:h-16 z-30 md:-mt-16 m-0'>
            <div className='md:w-11/12 w-full flex md:flex-row flex-col h-full'>
                {Object.entries(progressiveLinks).map(([key, props]) => {
                    return (
                        < UseLink key={key} title={props.title} link={props.link} icon={props.icon} className={props.className} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProgressiveLinks
