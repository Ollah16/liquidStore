import React from 'react'
import NavIndex from '../components/nav/Index'
import LoginType from '../components/nav/LoginType'
import { useSelector } from 'react-redux'
import SearchInput from '../components/nav/SearchInput'
import Menu from '../components/nav/Menu'
import Main from '../components/main/Index'

const HomePage = () => {

    // Extracting search state from Redux store
    const { isSearch } = useSelector(state => state.nav)

    // Memoizing the search class string to avoid unnecessary re-renders
    const searchClass = React.useMemo(() => `${isSearch ? 'md:top-[141px] top-[117px]' : 'top-[-500px]'} fixed z-10 w-full md:hidden py-5 px-2 bg-gray-100 left-0 text-xs sm:text-sm z-30`, [isSearch])

    return (
        <div className={`min-h-screen relative overflow-x-hidden`}>
            <NavIndex />
            <LoginType />
            <Main />
            <SearchInput searchClass={searchClass} />
            <Menu />
        </div>
    )
}

export default HomePage
