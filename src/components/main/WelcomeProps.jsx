import React, { useEffect, useRef } from 'react'
import Button from '../Button'
import imageDesktop from '../../assets/lloyds_homepage_cl_hero_mobile_final.jpg';
import imageMobile from '../../assets/lloyds-homepage-strategic-engagement.jpg';
import WelcomeDocs from '../../constants/WelcomeDocs';

const WelcomeProps = () => {

    const welcomeDoc = WelcomeDocs()
    const welcomeRef = useRef([])
    const imageDesktopRef = useRef()
    const imageMobileRef = useRef()
    const imgParentRef = useRef()
    const adRef = useRef()

    useEffect(() => {
        const deskTopImgRef = imageDesktopRef.current;
        const mobileImageRef = imageMobileRef.current
        const advertRef = adRef.current;
        const repParentRef = imgParentRef.current

        const calculateHeight = () => {
            const advertHeight = advertRef.offsetHeight
            const imageHeight = window.innerWidth > 768 ? deskTopImgRef.offsetHeight : mobileImageRef.offsetHeight
            return advertHeight + imageHeight;
        };


        const handleSize = () => {

            if (window.innerWidth < 768) {
                advertRef.style.height = ``;
                repParentRef.style.height = `${calculateHeight()}px`;
            } else {
                repParentRef.style.height = `${deskTopImgRef.offsetHeight}px`;
                advertRef.style.height = `${deskTopImgRef.offsetHeight}px`;
            }
        };

        handleSize();
        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        };
    }, [imageDesktopRef, imgParentRef, adRef]);


    return (
        <div
            className="relative w-full flex after:content-[''] after:h-full after:absolute after:w-full after:inline-block after:opacity-70 overflow-hidden"
            ref={imgParentRef}>
            {welcomeDoc.slice(0, 1).map((doc, index) => (
                <div
                    ref={(el) => welcomeRef.current[index] = el}
                    key={index}
                    className={`w-full relative z-20 top-0 left-0 right-0`}
                >
                    <div className='hidden md:inline-block h-auto absolute'>
                        <img
                            ref={imageDesktopRef}
                            src={imageDesktop}
                            // height='411'
                            // width='2000'
                            alt="Welcome to Lloyds"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className='md:hidden block h-auto'>
                        <img
                            src={imageMobile}
                            ref={imageMobileRef}
                            height='411'
                            width='2000'
                            alt="Welcome to Lloyds"
                            className="object-cover w-full h-auto"
                        />
                    </div>

                    <div ref={adRef} className="p-5 mb-3 h-fit md:max-w-[62%] lg:max-w-[53%] flex items-center relative bg-theme md:bg-transparent">
                        <div className='md:my-auto'>
                            <div className='mb-5'>
                                <p className="text-white font-semibold text-xl md:text-2xl lg:text-4xl mb-3">{doc.title}</p>
                                <p className="text-white font-semibold text-base md:text-base lg:text-lg">{doc.subTitle}</p>
                            </div>
                            <Button title={doc.btnTitle} className={doc.className} aria_label={'explore button'} />
                        </div>
                    </div>
                </div>
            ))
            }

        </div>
    )
}

export default WelcomeProps
