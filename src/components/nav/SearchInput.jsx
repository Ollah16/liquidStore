import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInput } from '../../reduxtoolkit/navslice'
import { useEffect } from 'react'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


const SearchInput = React.memo(({ searchClass }) => {
    const dispatch = useDispatch()
    const { searchTitle, searchOptions } = useSelector(state => state.nav)

    const [option, setOption] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        const handleSearchOptions = () => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setOption(prev => prev.slice(0, -1));
                    setCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setIndex(prev => (prev + 1) % searchOptions.length);
                }
            } else {
                if (charIndex < searchOptions[index].length) {
                    setOption(prev => prev + searchOptions[index][charIndex]);
                    setCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        intervalRef.current = setInterval(handleSearchOptions, 100);

        return () => clearInterval(intervalRef.current);
    }, [charIndex, isDeleting, searchOptions, index]);

    return (
        <div className={`${searchClass} transition-top duration-200 ease-in-out md:ml-8`}>
            <div className={`bg-white items-center flex w-full space-x-2`}>
                <span className='px-2 w-1/12'>
                    <MagnifyingGlassIcon className='font-extrabold text-xl text-theme rotate-[90deg] size-5' />
                </span>
                <span className='w-11/12'>
                    <input
                        type='text'
                        aria-label="Search"
                        value={searchTitle}
                        onChange={e => dispatch(getInput(e.target.value))}
                        className='bg-white text-[1.211rem] text-black/70 font-semibold h-12 block w-full placeholder:text-black/60 relative focus:outline-0' placeholder={option} />
                </span>
            </div>
        </div>
    )
})

export default SearchInput
