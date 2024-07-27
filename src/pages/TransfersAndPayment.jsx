import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipient } from '../util/api'
import Balance from '../components/StatementComponent/Balance'
import CompletePayment from '../components/MakePayment/CompletePayment'
import Layout from './Account/Layout'
import Recipient from '../components/TransferComponent/Recipient'
import PaymentInfo from '../components/TransferComponent/PaymentInfor'
import SelectPayee from '../components/MakePayment/SelectPayee'

const TransfersAndPayment = () => {

    const { id } = useParams()
    const [recipient, setRecipient] = useState({})
    const [isSelected, selectRecipient] = useState(false)

    useEffect(() => {
        const getBody = document.querySelector('body')
        getBody.style.overflowY = 'auto'
    }, [])

    useEffect(() => {

        //fetch beneficiary
        const getBeneficiary = async () => {
            const response = await getRecipient(id)
            setRecipient(response)
        }

        getBeneficiary()

    }, [])

    //choose beneficiary
    const handleBeneficiary = (value) => {
        selectRecipient(value)
    }

    const changeRecipient = async (id) => {
        const response = await getRecipient(id)
        setRecipient(response)
        selectRecipient(!isSelected)
    }


    return (<Layout>
        <div className='w-full py-10'>
            <div className='lg:w-10/12 w-full px-5 lg:px-0 mx-auto'>
                <div className='md:w-10/12 w-full bg-white p-5 '>
                    <div className='w-full border-b border-b-gray-500/70 pb-5'>
                        <Balance />
                        <Recipient recipient={recipient} onClick={() => handleBeneficiary(!isSelected)} />
                        <PaymentInfo />
                    </div>

                    <CompletePayment isDisabled={false} id={id} />
                </div>
            </div >
        </div>
        <SelectPayee
            isSelected={isSelected}
            onClick={() => handleBeneficiary(!isSelected)}
            clickRecipient={changeRecipient}
        />
    </Layout >)
}

export default TransfersAndPayment
