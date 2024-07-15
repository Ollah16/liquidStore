import React, { useEffect, useRef, useState } from 'react'
import UseLink from '../Link'
import Products from '../../constants/ProductsProps'
import PaginatorControl from '../paginate/PaginatorControl'
import './Products.css'

const ProductCarousel = () => {
    const prodProps = Products()
    const carouselRef = useRef([])
    const carouselWrapRef = useRef()
    const scrollWidthRef = useRef()
    const [currentInnerWidth, setInnerWidth] = useState(0)
    const [currentScrollNo, setcurrentScrollNo] = useState(0)
    const [isBtnPrevDisable, setPrevDisable] = useState(false)
    const [isBtnForwardDisable, setForwardDisable] = useState(false)

    useEffect(() => {
        const handleInnerWidth = () => {
            setInnerWidth(window.innerWidth)
        }

        handleInnerWidth()
        window.addEventListener('resize', handleInnerWidth)

        return () => window.removeEventListener('resize', handleInnerWidth)
    }, [])

    useEffect(() => {
        const scrollDynamic = scrollWidthRef.current
        const mdAbove = `${((currentScrollNo) % 6 * 20)}%`
        const mdBelow = `${(((currentScrollNo) / (prodProps.length - 1)) * 100)}%`
        const scrollWidth = currentInnerWidth > 768 ? mdAbove : mdBelow
        scrollDynamic.style.width = scrollWidth

    }, [currentScrollNo, currentInnerWidth, prodProps.length])

    const handleAnimation = (type) => {
        const isForward = type === 'forward';
        const totalElements = prodProps.length;
        const flockerRef = carouselRef.current;
        const currentInnerWidth = window.innerWidth > 768
        flockerRef.forEach((el, index) => {
            const animationIndex = (index - currentScrollNo + totalElements) % totalElements;
            el.style.animation =
                currentInnerWidth ? isForward ? `slideIndex${animationIndex} 1s forwards` : `revSlideIndex${animationIndex} 1s forwards`
                    :
                    el.style.animation = isForward ? `slide${animationIndex} 1s forwards` : `revSlide${animationIndex} 1s forwards`
        });

        const currentNo = (currentScrollNo + (isForward ? 1 : -1) + totalElements) % totalElements;
        setPrevDisable(currentNo < 1);
        setForwardDisable(currentInnerWidth ? currentNo >= 5 : currentNo >= 7);
        setcurrentScrollNo(currentNo);
    };

    return (
        <div className='w-full relative min-h-[500px] md:px-16 px-5 my-16 overflow-hidden'>
            <div className='md:h-[800px] h-[850px] flex md:flex-row flex-col items-center md:bg-transparent bg-theme_hover w-full relative overflow-hidden px-2'>
                <div className='md:w-[35.6%] w-full bg-theme_hover md:h-full h-28 flex flex-col justify-center px-5'>
                    <p className='text-[#77ba00] md:text-start text-center text-[2rem] font-semibold'>Our Products</p>
                </div>
                <div className='md:w-[64.5%] w-full h-full relative flex md:flex-row flex-col items-center'>
                    <div className={`bg-transparent w-full h-max flex items-center flex-1 relative ml-0 md:ml-[-10.61%]`}>
                        <div className='overflow-hidden relative w-full'>
                            <ul className='relative h-[600px]' ref={carouselWrapRef}>
                                {prodProps.map((prod, index) => (
                                    <li
                                        ref={(el) => carouselRef.current[index] = el}
                                        key={index}
                                        className={`md:w-[20rem] w-full h-[600px] px-2 bg-transparent flex absolute  lichild${index}`}>
                                        <div className='flex flex-col h-full w-full'>
                                            <div>
                                                <img src={prod.image} alt={prod.title} />
                                            </div>
                                            <div className='md:flex-1 flex flex-col md:h-full h-max bg-[#f1f1f1] p-5'>
                                                <div className='pb-10 h-full'>
                                                    <h3 className='text-3xl font-medium mb-5'>
                                                        {prod.title}
                                                    </h3>
                                                    <p className='md:text-base text-sm font-semibold text[#333]/80 mb-5'>
                                                        {prod.subTitle}
                                                    </p>
                                                    <p className='md:text-base text-sm font-semibold text[#333]/80'>
                                                        {prod.subTitleOne}
                                                    </p>
                                                </div>
                                                <div className='h-full flex items-end w-full'>
                                                    <UseLink title={prod.linkTitle} link={prod.link} className='text-white bg-theme px-5 py-3 hover:underline text-center w-full' />
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='relative md:absolute h-[6rem] w-full py-4 bottom-0 md:left-[-4rem]'>
                        <div className={`z-20 w-full px-2 md:px-0 absolute right-0 bottom-5 md:bottom-0 h-[4rem]`}>

                            <div className='relative w-full flex h-full items-center justify-between gap-x-5'>
                                <PaginatorControl
                                    parentClassName={`leading-[0px] space-x-5 w-max md:bottom-0 bottom-0 absolute md:left-0 right-0`}
                                    clickAction={handleAnimation}
                                    isBtnForwardDisable={isBtnForwardDisable}
                                    isBtnPrevDisable={isBtnPrevDisable}
                                />

                                <div className='relative md:w-9/12 w-7/12 sm:w-8/12 flex flex-col-reverse items-center h-[5.5px] md:left-[12rem]'>
                                    <span ref={scrollWidthRef} className='inline-block md:bg-theme bg-[#77ba00] h-[5px] left-0 absolute bottom-0 transition-width ease-in-out duration-1000'>
                                    </span>
                                    <span className='inline-block w-full md:bg-theme bg-[#77ba00] h-[.5px] absolute'>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ProductCarousel