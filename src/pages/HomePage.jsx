import React from 'react'
import { useSelector } from 'react-redux'
import LoginType from '../components/HomePageComponents/nav/LoginType'
import Menu from '../components/HomePageComponents/nav/Menu'
import SearchInput from '../components/HomePageComponents/nav/SearchInput'
import NavIndex from '../components/HomePageComponents/nav/Index'
import Main from '../components/HomePageComponents/main/Index'

const HomePage = () => {

    // Extracting search state from Redux store
    const { isSearch, isNavTopLess } = useSelector(state => state.nav)


    // Memoizing the search class string to avoid unnecessary re-renders
    const searchClass = React.useMemo(() => `${isSearch ? (isNavTopLess ? 'top-0' : 'md:top-[141px] top-[117px]') : 'top-[-500px]'} fixed z-10 w-full md:hidden py-5 px-2 bg-gray-100 left-0 text-xs sm:text-sm z-30 placeholder:font-light`, [isSearch, isNavTopLess])

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
