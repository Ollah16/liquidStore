import React from 'react'
import NavIndex from '../../components/LoginAuthComponents/nav/NavIndex'

const Layout = ({ children }) => {
    return (
        <React.Fragment className='min-h-screen'>
            <NavIndex />

            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout
