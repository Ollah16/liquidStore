import React from 'react'
import { RiErrorWarningFill } from "react-icons/ri";

const FraudProtection = () => {
    return (
        <div className='flex flex-col md:flex-row gap-x-3 items-stretch p-5 bg-[#e6eef4] mb-5'>
            <div> <RiErrorWarningFill className='size-6 mt-1 text-[#0d5595]' /></div>
            <div className='flex flex-col gap-y-3'>
                <p className='text-xl font-medium text-black/70'>Protect yourself from fraud</p>
                <p className='text-lg text-black/70'>Fraudsters often want you to pay directly to a bank account because it’s like handing over cash and is hard to trace. If you pay this way and it’s a scam, it’s very hard for you to get your money back.</p>

                <p className='text-lg text-black/70'>Only send money to someone you know and trust.</p>

                <p className='text-lg text-black/70'>If you’re buying online, pay by debit or credit card instead if you can. It can help protect your money if anything goes wrong. </p>
            </div>
        </div>
    )
}

export default FraudProtection
