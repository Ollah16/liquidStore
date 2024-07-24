import React, { lazy, useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { useDispatch, useSelector } from 'react-redux'
import { resetNav } from '../reduxtoolkit/navslice'
import ProtectedRoutes from './ProtectedRoutes'
import { useAuthentication } from '../util/authentication'
import AccountPage from '../pages/Account/AccountPage'
import StatementPage from '../pages/Account/StatementPage'
import OneTimeP from '../pages/Authentication/OTP'
import LoginAuth from '../pages/Authentication/LoginAuth'
import MakePayment from '../pages/Account/MakePayment'
import InternationalPayment from '../pages/MakePayment/InternationalPayment'
import PayNewRecipient from '../pages/MakePayment/PayNewRecipient'
import NotFound from '../pages/NotFound'

const AuthRoute = ({ isOTPValidated, isLoggedIn }) => {
    console.log(isOTPValidated, isLoggedIn)

    if (isOTPValidated && isLoggedIn) return <Navigate to={'/'} replace />


    return <Outlet />
}


const AppRoutes = () => {
    const isAuthenticated = useAuthentication()
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const { isMenu, isLoginDropDown } = useSelector(state => state.nav)
    const { isOTPValidated, isLoggedIn } = useSelector(state => state.auth)

    useEffect(() => {

        const monitorRoutes = () => {
            dispatch(resetNav())
        }

        monitorRoutes()

    }, [pathname, dispatch])


    useEffect(() => {
        const handleOverflow = () => {
            const getRef = document.querySelector('body')
            const repIsLogin = isLoginDropDown && window.innerWidth < 640
            if (isMenu || repIsLogin) {
                getRef.style.overflowY = 'hidden'
            } else {
                getRef.style.overflowY = 'auto'
            }
        }

        handleOverflow()

        window.addEventListener('scroll', handleOverflow)
        return () => window.removeEventListener('scroll', handleOverflow)

    }, [isMenu, isLoginDropDown])


    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route element={<AuthRoute isOTPValidated={isOTPValidated} isLoggedIn={isLoggedIn} />}> */}
            <Route path='/login' element={<LoginAuth />} />
            <Route path='/onetimepassword' element={<OneTimeP />} />

            <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
                <Route path='/accounts' element={<AccountPage />} />
                <Route path='/accountstatement' element={<StatementPage />} />
                <Route path='/makepayment' element={<MakePayment />} />
                <Route path='/internationalpayments' element={<InternationalPayment />} />
                <Route path='/paynew' element={<PayNewRecipient />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes >
    )
}

export default AppRoutes
