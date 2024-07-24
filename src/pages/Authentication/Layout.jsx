import React from 'react'
import NavIndex from '../../components/LoginAuthComponents/nav/NavIndex'

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen'>
            <NavIndex />

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
