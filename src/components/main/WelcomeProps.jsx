import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import image from '../../assets/lloyds_homepage_cl_hero_mobile_final.jpg';
// import imageTwo from '../../assets/lloyds_homepage_cl_hero_mobile_final.jpg';
import WelcomeDocs from '../../constants/WelcomeDocs';
import PaginatorControl from '../paginate/PaginatorControl';

const WelcomeProps = () => {

    const welcomeDoc = WelcomeDocs()
    const welcomeRef = useRef([])
    const [elementId, setElementId] = useState(0)
    const imgRef = useRef()
    const imgParentRef = useRef()
    const adRef = useRef()

    useEffect(() => {
        const refImage = imgRef.current;
        const imgParent = imgParentRef.current;
        const advertRef = adRef.current;

        const calculateHeight = () => {
            const advertHeight = parseFloat(getComputedStyle(advertRef).height);
            const imageHeight = parseFloat(getComputedStyle(refImage).height);
            return advertHeight + imageHeight;
        };

        const handleSize = () => {
            if (window.innerWidth < 768) {
                imgParent.style.height = `${calculateHeight()}px`;
            } else {
                imgParent.style.height = getComputedStyle(refImage).height;
            }
        };

        handleSize();
        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        };
    }, [imgRef, imgParentRef, adRef]);


    const handleAnimation = (type) => {
        const isForward = type === 'forward';
        const animationIn = isForward ? 'slideIn' : 'slideInRev';
        const animationOut = isForward ? 'slideOff' : 'slideOffRev';
        const totalElements = welcomeDoc.length;

        welcomeRef.current.forEach((el, index) => {
            el.style.animation = index === elementId ? `${animationIn} 500ms forwards` : `${animationOut} 500ms forwards`;
        });

        const currentNo = (elementId + (isForward ? 1 : -1) + totalElements) % totalElements;
        setElementId(currentNo);
    };


    return (
        <div
            className="relative w-full flex after:content-[''] after:h-full after:absolute after:w-full after:inline-block after:brightness-75 overflow-hidden"
            ref={imgParentRef}>
            {welcomeDoc.map((doc, index) => (
                <div
                    ref={(el) => (welcomeRef.current[index] = el)}
                    key={index}
                    className={`absolute w-full h-fit z-20 top-0 left-0 right-0`}
                >
                    <div className='h-auto'>
                        <img
                            ref={imgRef}
                            src={image}
                            alt="Welcome to Lloyds"
                            className="object-cover w-full h-auto"
                        />
                    </div>

                    <div ref={adRef} className="p-5 md:w-8/12 lg:w-6/12 w-full space-y-5 md:absolute lg:top-[10%] md:top-[2%] relative bg-theme md:bg-transparent">
                        <p className="text-white font-semibold text-2xl md:text-4xl">{doc.title}</p>
                        <p className="text-white font-semibold text-base">{doc.subTitle}</p>
                        <Button title={doc.btnTitle} className={doc.className} aria_label={'explore button'} />
                    </div>
                </div>
            ))
            }
            <PaginatorControl
                isBtnForwardDisable={false}
                isBtnPrevDisable={false}
                parentClassName={'absolute z-20 right-10 space-x-5 hidden md:block top-[30%]'}
                clickAction={handleAnimation}
                className={'text-white bg-theme hover:bg-[#77ba00] cursor-pointer'} />
        </div>
    )
}

export default WelcomeProps
