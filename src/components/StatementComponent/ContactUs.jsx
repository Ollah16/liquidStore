import React, { useState } from 'react'
import { TiMinus, TiPlus } from "react-icons/ti";

const ContactUs = () => {

    const [contactWithin, setContact] = useState(false)

    const contactUs = [{
        title: 'Internet banking queries',
        content: [
            'Technical queries about the Internet Banking service.',
            '0345 300 0116.Lines are open 9am – 6pm Monday – Saturday and closed on Bank Holidays.Not all Telephone Banking services are available 24 hours a day, seven days a week.',
            'If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on + 4420 7649 9437.'
        ]
    },
    {
        title: 'All account related queries',
        phone: '0345 300 0000',
        content: ['If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on + 44 1733 347 007.']
    },
    {
        title: 'Lost or stolen debit card',
        phone: '0800 096 9779',
        content: [
            'If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on + 44 1702 278 270.',
            'If your debit card is declined, there are transactions you don’t recognise or you need a PIN call us on 0345 300 0000.',
            'If you need to call us from abroad you can also call us on + 44 1733 347 007.We are open 24 / 7, calls may be recorded.Not all Telephone Banking services are available 24 hours a day, seven days a week.Please speak to an adviser for more information.'
        ]
    },
    {
        title: 'Credit card customer services line',
        phone: '0345 606 2172',
        content: [
            'If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on + 44 1702 278 272.',
            'Calls may be monitored and recorded in case we need to check we have carried out your instructions correctly and to help us improve our quality of service.'
        ]
    },
    {
        title: 'Scottish Widows pension queries',
        content: ['If you have any questions about your pension information shown here, please contact Scottish Widows. 0345 769 7318']
    }
    ]

    return (
        <div className='w-full bg-theme text-white p-5 text-base tracking-tight'>
            <div>
                <h2 className='font-semibold cursor-pointer flex justify-between items-center'
                    onClick={() => setContact(!contactWithin)}>
                    <span className='w-9/12 text-center'>CONTACT US</span>
                    {!contactWithin ?
                        <TiPlus className={'text-theme_light size-5'} />
                        : <TiMinus className={'text-theme_light size-5'} />}
                </h2>

                <div className={`${contactWithin ? 'max-h-[1000px]' : 'max-h-0'} transition-all ease-in-out duration-300 overflow-hidden`}>
                    {contactUs.map((contact, ind) => (
                        <div key={ind} className='mt-3'>
                            <div className='mb-3'>
                                <h3 className='mb-3'>{contact.title}</h3>
                                <div><strong>{contact.phone}</strong></div>
                            </div>
                            <ul>
                                {contact.content.map((con, index) => (
                                    <li key={index}>{con}</li>
                                ))}
                            </ul>
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default ContactUs
