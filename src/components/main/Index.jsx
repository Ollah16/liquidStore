import React, { lazy } from 'react'
import WelcomeProps from './WelcomeProps';
import MobileApp from './MobileAppAd';
import ProgressiveLinks from './ProgressiveLinks';
import Benefits from './Benefits';
const ProductCarousel = lazy(() => import('../products/Index'))

const Main = () => {

    return (
        <main className="before:content-[''] md:before:h-[141px] before:block before:h-[117px] overflow-hidden">
            <WelcomeProps />
            <ProgressiveLinks />
            <MobileApp />
            <ProductCarousel />
            <Benefits />
        </main >
    )
}

export default Main
