import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { useDispatch, useSelector } from 'react-redux'
import { resetNav } from '../reduxtoolkit/navslice'
import ProtectedRoutes from './ProtectedRoutes'
import { useAuthentication } from '../util/authentication'
import OneTimeP from '../pages/Authentication/OTP'
import LoginAuth from '../pages/Authentication/LoginAuth'
import NotFound from '../pages/NotFound'
import FallbackPage from '../pages/FallBack'
import { clearState } from '../reduxtoolkit/authslice'

const PayNewRecipient = lazy(() => import('../pages/MakePayment/PayNewRecipient'))
const MakePayment = lazy(() => import('../pages/Account/MakePayment'))
const AccountPage = lazy(() => import('../pages/Account/AccountPage'))
const StatementPage = lazy(() => import('../pages/Account/StatementPage'))
const InternationalPayment = lazy(() => import('../pages/MakePayment/InternationalPayment'))
const TransfersAndPayment = lazy(() => import('../pages/TransfersAndPayment'))
const ConfirmPayment = lazy(() => import('../pages/Account/ConfirmPayment'))
const ConfirmIntPayment = lazy(() => import('../pages/MakePayment/ConfirmIntPayment'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))

const AppRoutes = () => {
    const isAuthenticated = useAuthentication()
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const { isMenu, isLoginDropDown } = useSelector(state => state.nav)
    const token = localStorage.getItem('token')

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

    useEffect(() => {
        const handleResetState = () => {
            if (!token) return dispatch(clearState())
        }
        handleResetState()
    }, [token, dispatch])


    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginAuth />} />
            <Route path='/onetimepassword' element={<OneTimeP />} />

            <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
                <Route path='/accounts' element={
                    <Suspense fallback={<FallbackPage />}>
                        <AccountPage />
                    </Suspense>
                } />

                <Route path='/accountstatement' element={
                    <Suspense fallback={<FallbackPage />}>
                        <StatementPage />
                    </Suspense>
                } />

                <Route path='/makepayment' element={
                    <Suspense fallback={<FallbackPage />}>
                        <MakePayment />
                    </Suspense>
                } />

                <Route path='/internationalpayments' element={
                    <Suspense fallback={<FallbackPage />}>
                        <InternationalPayment />
                    </Suspense>}
                />

                <Route path='/paynew' element={
                    <Suspense fallback={<FallbackPage />}>
                        <PayNewRecipient />
                    </Suspense>
                } />

                <Route path='/makepayment_transfer/:id' element={
                    <Suspense fallback={<FallbackPage />}>
                        <TransfersAndPayment />
                    </Suspense>
                } />

                <Route path='/confirmpayment/:id' element={
                    <Suspense fallback={<FallbackPage />}>
                        <ConfirmPayment />
                    </Suspense>}
                />

                <Route path='/confirmintpayment' element={
                    <Suspense fallback={<FallbackPage />}>
                        <ConfirmIntPayment />
                    </Suspense>}
                />

                <Route path='/error' element={
                    <Suspense fallback={<FallbackPage />}>
                        <ErrorPage />
                    </Suspense>
                } />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes >
    )
}

export default AppRoutes
