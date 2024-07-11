import React from 'react'
import WelcomeProps from './WelcomeProps';
import MobileApp from './MobileAppAd';
import ProgressiveLinks from './ProgressiveLinks';
import ProductCarousel from '../products/Index';

const Main = () => {



    return (
        <main className="before:content-[''] md:before:h-[142px] before:block before:h-[118px] overflow-hidden">
            <WelcomeProps />
            <ProgressiveLinks />
            <MobileApp />
            <ProductCarousel />
        </main >
    )
}

export default Main
