import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { resetMenu } from '../../reduxtoolkit/navslice';
import RenderMenuContent from './RenderSubContent';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const MenuSubContent = () => {
    const { menuSubContent, currentMenuTitle, currentMenuSubTitle, currentId } = useSelector(state => state.nav)
    const dispatch = useDispatch()
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (innerWidth < 768) {
            dispatch(resetMenu(''));
        } else {
            dispatch(resetMenu(0));
        }
    }, [innerWidth, dispatch]);

    const clickAction = () => dispatch(resetMenu(''))

    return (menuSubContent.map((sub, subIndex) => {
        const { contentI, contentII, contentIII, contentIV, contentV, contentVI, contentVII, contentFeatured, contentAlready } = sub;

        const rotatedArrow = <ChevronRightIcon className='text-theme size-5 rotate-180' />
        const className = 'flex gap-2 py-2 px-3 items-center bg-[#f1f1f1] w-full justify-start absolute left-0 top-0'
        const titleStyle = 'text-xl text-theme font-bold self-start'
        const subStyle = 'text-base font-semibold self-start'

        return (
            <div key={subIndex} className={`${sub.id === currentId ? 'md:block right-0 block w-full z-20 top-0 bottom-0' : 'md:hidden right-[-1000px] top-[-340px] z-10'} bg-white md:relative absolute md:w-9/12 space-y-10 pb-5`}>
                <div className="after:content-[''] hidden  after:inline-block after:w-full after:bg-black/60 after:h-[.5px] after:absolute after:bottom-0 md:flex flex-col justify-between gap-y-10 relative px-5">
                    <p className="mb-0 text-xl py-2">{currentMenuTitle}</p>
                </div>

                <div className='my-0 md:hidden block'>
                    <Button
                        titleStyle={titleStyle}
                        aria_label={currentMenuTitle || 'btn'}
                        icon={rotatedArrow}
                        title={currentMenuTitle}
                        subTitle={currentMenuSubTitle}
                        className={className}
                        clickAction={clickAction}
                        subStyle={subStyle} />
                </div>


                <div className="flex md:flex-row flex-col justify-between gap-3 md:before:hidden before:inline-block before:w-full before:h-[30px] before:content-[''] bg-white pb-4">
                    <div className='flex md:flex-row flex-wrap flex-col gap-y-5 w-full'>
                        {contentI && < RenderMenuContent content={contentI} contentIndex={0} />}
                        {contentII && < RenderMenuContent content={contentII} contentIndex={1} />}
                        {contentIII && < RenderMenuContent content={contentIII} contentIndex={2} />}
                        {contentIV && < RenderMenuContent content={contentIV} contentIndex={4} />}
                        {contentV && < RenderMenuContent content={contentV} contentIndex={5} />}
                        {contentFeatured && < RenderMenuContent content={contentFeatured} contentIndex={6} />}
                        {contentVII && < RenderMenuContent content={contentVI} contentIndex={7} />}
                        {contentVII && < RenderMenuContent content={contentVII} contentIndex={8} />}
                        {contentAlready && < RenderMenuContent content={contentAlready} contentIndex={3} />}
                    </div>
                </div>

            </div>
        );
    })

    )
}

export default MenuSubContent
