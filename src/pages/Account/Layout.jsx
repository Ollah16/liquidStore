import React from 'react';
import NavBar from '../../components/AccountComponent/Nav/NavBar';
import Footer from '../../components/AccountComponent/Footer';

const Layout = ({ children }) => {
    return (
        <div className='tracking-tight'>
            <NavBar />
            <main className='bg-gray-100'>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
