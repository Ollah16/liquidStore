import React from 'react'
import Socials from './Socials'
import Fscs from './Fscs'
import FooterList from './FooterList'

const FooterIndex = () => {


    return (
        <div className="bg-theme flex flex-col items-center pt-16 overflow-hidden">
            <FooterList />
            <Socials />
            <Fscs />
        </div >
    )
}

export default FooterIndex
