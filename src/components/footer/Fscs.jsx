import React from 'react'
import image from '../../assets/fscs-logo-crop.png'

const Fscs = () => {
    return (
        <div className='bg-[#024731] px-5 md:px-0'>
            <div className='flex flex-col md:flex-row pb-10 w-full md:w-11/12 mx-auto mb-6'>
                <div className='w-28 md:w-80 h-auto relative'>
                    <img src={image} alt='fscs logo' className='h-auto w-full block' height='768' width='626' />
                </div>
                <div className='px-0 py-5 md:p-5 text-white text-md md:text-lg'>
                    <p className='mb-7 md:mb-5'>Lloyds Bank plc. Registered office: 25 Gresham Street, London EC2V 7HN. Registered in England and Wales No. 2065. Lloyds Bank plc is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 119278.</p>
                    <p><strong>Mobile Banking app:</strong> Our app is available to UK personal Internet Banking customers and Internet Banking customers with accounts held in Jersey, the Bailiwick of Guernsey or the Isle of Man. You need to have a valid registered phone number. Minimum operating systems apply, so check the App Store or Google Play for details. Device registration required. The app doesn't work on jailbroken or rooted devices. Terms and conditions apply.</p>
                </div>
            </div>
        </div>
    )
}

export default Fscs
