import React, { useEffect, useState } from 'react'
import AccountFunctions from './AccountFunctions'
import AccountBalance from './AccountBalance'
import { useLocation } from 'react-router-dom'

const BalanceComp = () => {
    const { pathname } = useLocation()
    const [path_Name, setPathname] = useState()



    useEffect(() => {
        const isPathStatement = pathname === '/accountstatement'
        setPathname(isPathStatement)
    }, [pathname])

    return (
        <div className='w-full md:w-full mt-5 relative'>
            <div className={`before:content-[''] shadow-sm shadow-slate-500 before:bg-theme before:inline-block before:w-full before:h-1 before:absolute before:top-0`}>
                <div className='flex flex-col md:flex-row bg-white'>
                    <AccountBalance path_Name={path_Name} />
                    <AccountFunctions path_Name={path_Name} />
                </div >
            </div >
        </div >
    )
}

export default BalanceComp
