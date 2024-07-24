import React, { useEffect } from 'react';
import NavBar from '../../components/AccountComponent/Nav/NavBar';
import Footer from '../../components/AccountComponent/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main className='bg-gray-100'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
