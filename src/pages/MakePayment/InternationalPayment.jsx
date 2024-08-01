import React, { useEffect } from 'react'
import Layout from './Layout'
import PaymentComponent from '../../components/InternationPaymentComp/PaymentComponent'
import { useDispatch } from 'react-redux'
import { getAccountInformation } from '../../reduxtoolkit/authslice'
import { getAccountInfo } from '../../util/api'

const InternationalPayment = () => {
    const dispatch = useDispatch()

    useEffect(() => {

        const getInfo = async () => {
            try {
                const accountInfo = await getAccountInfo()
                dispatch(getAccountInformation(accountInfo))
            }
            catch (err) {
                console.error(err)
            }
        }

        getInfo()
    }, [dispatch])

    return (<Layout>
        <PaymentComponent />
    </Layout>)
}

export default InternationalPayment
