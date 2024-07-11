import React, { useRef, useState } from 'react'
import UseLink from '../Link'
import Products from '../../constants/ProductsProps'
import PaginatorControl from '../paginate/PaginatorControl'
import './Products.css'

const ProductCarousel = () => {
    const prodProps = Products()
    const carouselRef = useRef([])
    const [currentScrollNo, setcurrentScrollNo] = useState(0)
    const [isBtnPrevDisable, setPrevDisable] = useState(false)
    const [isBtnForwardDisable, setForwardDisable] = useState(false)

    const handleAnimation = (type) => {
        const isForward = type === 'forward';
        const totalElements = prodProps.length;
        const flockerRef = carouselRef.current;
        const animations = isForward ? ['slideIndex0', 'slideIndexI', 'slideIndexII', 'slideIndexIII', 'slideIndexIV', 'slideIndexV', 'slideIndexVI', 'slideIndexVII']
            : ['revSlideIndex0', 'revSlideIndexI', 'revSlideIndexII', 'revSlideIndexIII', 'revSlideIndexIV', 'revSlideIndexV', 'revSlideIndexVI', 'revSlideIndexVII'];

        flockerRef.forEach((el, index) => {
            const animationIndex = (index - currentScrollNo + totalElements) % totalElements;
            el.style.animation = `${animations[animationIndex]} 1s forwards`;
        });

        const currentNo = (currentScrollNo + (isForward ? 1 : -1) + totalElements) % totalElements;
        setPrevDisable(currentNo < 1);
        setForwardDisable(currentNo >= 5);
        setcurrentScrollNo(currentNo);
    };

    return (
        <div className='w-full relative min-h-[500px] px-5 my-16 overflow-hidden'>
            <div className='h-[800px] flex'>
                <div className='w-[40%] bg-theme_hover h-full flex flex-col justify-center px-5'>
                    <p className='text-[#77ba00] text-[2rem] font-semibold'>Our Products</p>
                </div>
                <div className='w-[60%] h-full flex items-center relative translate-x-[-4.5rem] overflow-hidden'>
                    <ul className='flex justify-between relative gap-x-3 h-[600px]'>
                        {prodProps.map((prod, index) => (
                            <li
                                ref={(el) => carouselRef.current[index] = el}
                                key={index}
                                className={`w-[300px] h-[600px] px-2 bg-transparent absolute lichild${index}`}>
                                <div className='flex flex-col h-full w-full'>
                                    <div>
                                        <img src={prod.image} alt={prod.title} />
                                    </div>
                                    <div className='flex flex-col justify-between items-start flex-1 bg-[#f1f1f1] px-3 py-5'>
                                        <p className='text-2xl font-medium'>
                                            {prod.title}
                                        </p>
                                        <p className='text-base'>
                                            {prod.subTitle}
                                        </p>
                                        <p className='text-base'>
                                            {prod.subTitleOne}
                                        </p>
                                        <UseLink title={prod.linkTitle} link={prod.link} className='text-white bg-theme px-5 py-3 hover:underline text-center' />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div
                        className={`flex flex-col z-20 px-2 w-full items-center justify-between
                        after:content-[''] after:w-8/12 after:h-[1px] after:bg-theme_hover after:inline after:absolute after:bottom-8 after:right-10
                        before:content-[''] before:w-full before:h-[5px] before:bg-theme_hover before:inline before:absolute before:bottom-8 before:right-10`}>
                        <PaginatorControl
                            parentClassName={`leading-[0px] space-x-5 w-4/12 bottom-0 absolute left-0 px-2`}
                            clickAction={handleAnimation}
                            isBtnForwardDisable={isBtnForwardDisable}
                            isBtnPrevDisable={isBtnPrevDisable}
                        />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCarousel