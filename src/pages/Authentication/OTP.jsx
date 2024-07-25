import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import OTPInput from '../../components/OTPComponent/OTPInput'
import { useDispatch } from 'react-redux'
import { handleOTP } from '../../reduxtoolkit/authslice'
import Layout from './Layout'

const OneTimeP = () => {

    const [otp, setOtp] = useState('');

    const [requestDuration, setDuration] = useState(60)
    const [isDisabled, setIsDisable] = useState(false)
    const [clear, setClear] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        let interval;
        let requestTimeOut = 0;
        let totalDuration = requestDuration;

        const handleInterval = () => {
            if (requestTimeOut < requestDuration && isDisabled) {
                totalDuration--;
                setDuration(totalDuration);
                requestTimeOut++;
            } else if (totalDuration <= 0) {
                setDuration(60);
                setIsDisable(!isDisabled);
                requestTimeOut = 0;
            }
        };

        interval = setInterval(handleInterval, 1000);

        return () => clearInterval(interval);
    }, [isDisabled, requestDuration]);

    const handleRequestOtp = async () => {
        const token = localStorage.getItem('token')
        // const serverLink = 'https://liquidserver.vercel.app/user/getOtp'

        const serverLink = 'http://localhost:8080/user/getOtp'

        const header = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        //Set button to disable to delay 
        setIsDisable(!isDisabled)

        //Sanitize inputs
        setClear(!clear)

        try {
            const response = await axios.get(serverLink, header);

            // Notify user of successful OTP submission
            const { message } = response.data
            toast.success(message);

        } catch (error) {
            // Handle errors from the server
            if (error.response) {
                const { data } = error.response;
                toast.error(data.error);
            } else if (error.request) {
                // Handle network errors
                toast.error('Network error. Please try again later.');
            } else {
                // Handle other errors
                toast.error('An unexpected error occurred. Please try again later.');
            }
            console.error('Error submitting OTP:', error.message);
        }
    };

    const handleSubmitOtp = async () => {
        const token = localStorage.getItem('token')

        // const serverLink = 'https://liquidserver.vercel.app/user/submitotp'
        const serverLink = 'http://localhost:8080/user/submitotp'
        const bodyContent = { otp }

        const header = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            }
        }

        if (!otp) {
            return toast.error('OTP is required')
        }

        try {
            const response = await axios.post(serverLink, bodyContent, header)

            const { token: newToken } = response.data;

            localStorage.setItem('token', newToken)

            // Notify user of successful OTP submission
            toast.success('OTP verified successfully.');

            dispatch(handleOTP(true))

            navigate('/accounts')

        } catch (error) {
            // Handle errors from the server
            if (error.response) {
                const { data } = error.response;
                toast.error(data.error);
                setClear(!clear)
            } else if (error.request) {
                // Handle network errors
                toast.error('Network error. Please try again later.');
            } else {
                // Handle other errors
                toast.error('An unexpected error occurred. Please try again later.');
            }
            console.error('Error submitting OTP:', error.message);
        }
    };

    return (
        <Layout>
            <div className='flex justify-center items-center px-5 h-full my-44'>
                <div className='w-full md:w-5/12 mx-auto p-5 my-auto border rounded-lg shadow-lg'>
                    <h2 className='lg:text-2xl text-xl font-bold mb-5 text-center text-black/80 tracking-tight'>One-Time Password Verification</h2>
                    <div className='flex gap-2 justify-center'>
                        <OTPInput length={6} onChange={setOtp} clear={clear} />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <Button title={'Request OTP'} disabled={isDisabled} className={`${isDisabled ? 'cursor-not-allowed bg-gray-100 text-black/80' : 'cursor-pointer bg-theme hover:underline text-white hover:bg-[#024731]'} py-2 px-5 text-md md:text-base transition-underline transition-colors duration-200 ease-in-out`} clickAction={handleRequestOtp} />
                        <Button title={'Submit OTP'} className={`bg-theme text-white py-2 px-5 ml-2 hover:underline hover:bg-[#024731] text-md md:text-base transition-underline transition-colors duration-200 ease-in-out`} clickAction={handleSubmitOtp} />
                    </div>
                    <div>
                        {isDisabled && <p className='font-light text-sm text-center mt-5'>You can request again in {requestDuration} seconds</p>}
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default OneTimeP
