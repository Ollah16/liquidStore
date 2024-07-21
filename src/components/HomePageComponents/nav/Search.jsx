import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../Button';
import SearchInput from './SearchInput';
import ButtonProps from '../../../constants/HomePageConstants/UseButtonProps';

const Search = () => {

    const { isSearch } = useSelector(state => state.nav)
    const { searchBtn } = ButtonProps()
    const { icon, className, clickAction, title } = searchBtn

    // Memoizing the search class string to avoid unnecessary re-renders
    const searchClass = React.useMemo(() => `md:flex hidden md:w-[300px] lg:w-[500px]`, [isSearch])

    return (
        <div className='h-full flex items-center'>
            <div className='h-full md:hidden block'>
                <Button title={title} icon={icon} className={className} clickAction={clickAction} />
            </div>

            <SearchInput searchClass={searchClass} />

        </div>
    )
}

export default Search
