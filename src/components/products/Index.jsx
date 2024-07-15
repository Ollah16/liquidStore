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
        const repChild = carouselRef.current.map((m) => {
            return m.offsetHeight
        })

        const height = Math.max(...repChild)
        const repParent = carouselWrapRef.current
        repParent.style.height = currentInnerWidth < 768 ? `${height}px` : '600px'

    }, [currentInnerWidth])

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
        <div className='w-full relative min-h-[500px] md:px-16 px-5 my-16'>
            <div className='md:h-[800px] h-full flex md:flex-row flex-col items-center md:bg-transparent bg-theme_hover w-full relative overflow-hidden px-2'>
                <div className='md:w-[35.6%] w-full bg-theme_hover md:h-full h-28 flex flex-col justify-center px-5'>
                    <p className='text-[#77ba00] md:text-start text-center text-[2rem] font-semibold'>Our Products</p>
                </div>
                <div className='md:w-[64.4%] w-full relative h-fit flex md:flex-row flex-col items-center'>
                    <div className={`bg-transparent w-full flex items-center relative ml-0 md:ml-[-10.61%] h-max`}>
                        <div className='inline-block relative w-full overflow-hidden' ref={carouselWrapRef}>
                            {prodProps.map((prod, index) => (
                                <div
                                    ref={(el) => carouselRef.current[index] = el}
                                    key={index}
                                    className={`md:w-[20rem] w-full px-2 bg-transparent flex absolute h-full lichild${index}`}>
                                    <div className='flex-1 flex flex-col w-full'>
                                        <div className='h-auto flex-1 overflow-hidden'>
                                            <img src={prod.image} alt={prod.title} className='h-full w-full' />
                                        </div>
                                        <div className='md:flex-1 flex flex-col md:h-full sm:h-[45%] h-50% bg-[#f1f1f1] p-5'>
                                            <div className='pb-5 md:pb-10 h-full'>
                                                <h3 className='md:text-3xl text-2xl font-medium mb-3 md:mb-5'>
                                                    {prod.title}
                                                </h3>
                                                <p className='md:text-base text-sm font-semibold text[#333]/80 mb-5'>
                                                    {prod.subTitle}
                                                </p>
                                                {prod.subTitleOne &&
                                                    <p className='md:text-base text-sm font-semibold text[#333]/80'>
                                                        {prod.subTitleOne}
                                                    </p>
                                                }
                                            </div>
                                            <div className='h-max md:h-fit flex items-end w-full'>
                                                <UseLink title={prod.linkTitle} link={prod.link} className='text-white bg-theme px-5 py-3 hover:underline text-center w-full' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='relative md:absolute h-[6rem] md:w-[64.4%] w-full md:bottom-0 md:right-[-2.1px] flex items-center md:items-end justify-between'>
                    <div className={`z-20 w-full px-2 md:px-0 absolute h-12 my-auto md:left-[-4rem]`}>

                        <div className='relative w-full flex h-full items-center justify-between gap-x-5'>
                            <PaginatorControl
                                parentClassName={`leading-[0px] space-x-5 w-max bottom-0 absolute md:left-0 right-0`}
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
        </div >
    )
}

export default ProductCarousel