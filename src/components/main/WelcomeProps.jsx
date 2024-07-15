import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import image from '../../assets/lloyds_homepage_cl_hero_mobile_final.jpg';
// import imageTwo from '../../assets/lloyds_homepage_cl_hero_mobile_final.jpg';
import WelcomeDocs from '../../constants/WelcomeDocs';
import PaginatorControl from '../paginate/PaginatorControl';

const WelcomeProps = () => {

    const welcomeDoc = WelcomeDocs()
    const welcomeRef = useRef([])
    const imgRef = useRef()
    const imgParentRef = useRef()
    const adRef = useRef()

    useEffect(() => {
        const refImage = imgRef.current;
        const advertRef = adRef.current;
        const repParentRef = imgParentRef.current

        const calculateHeight = () => {
            const advertHeight = parseFloat(getComputedStyle(advertRef).height);
            const imageHeight = parseFloat(getComputedStyle(refImage).height);
            return advertHeight + imageHeight;
        };

        const handleSize = () => {
            if (window.innerWidth < 768) {
                advertRef.style.height = `100%`;
                repParentRef.style.height = `${calculateHeight()}px`;
            } else {
                repParentRef.style.height = `${refImage.offsetHeight}px`;
                advertRef.style.height = `${refImage.offsetHeight}px`;
            }
        };

        handleSize();
        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        };
    }, [imgRef, imgParentRef, adRef]);


    return (
        <div
            className="relative w-full flex after:content-[''] after:h-full after:absolute after:w-full after:inline-block after:brightness-75 overflow-hidden"
            ref={imgParentRef}>
            {welcomeDoc.slice(0, 1).map((doc, index) => (
                <div
                    ref={(el) => (welcomeRef.current[index] = el)}
                    key={index}
                    className={`absolute w-full h-fit z-20 top-0 left-0 right-0`}
                >
                    <div className='h-auto relative md:absolute'>
                        <img
                            ref={imgRef}
                            src={image}
                            alt="Welcome to Lloyds"
                            className="object-cover w-full h-auto"
                        />
                    </div>

                    <div ref={adRef} className="p-5 mb-3 h-full md:max-w-[62%] lg:max-w-[53%] flex items-center relative bg-theme md:bg-transparent">
                        <div className='my-auto'>
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
