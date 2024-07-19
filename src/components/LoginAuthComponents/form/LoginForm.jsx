import React, { useState } from 'react'
import FormFeatures from './FormFeatures'
import FormInputs from './FormInputs'
import { toast } from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [password, setPassword] = useState('')
    const [userId, setUserId] = useState('')
    const navigate = useNavigate()

    const handleUserId = (value) => {

        setUserId(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }


    const handleSubmit = async () => {

        const serverLink = 'https://liquidserver.vercel.app/user/login'
        // const serverLink = 'http://localhost:8080/user/login'
        const bodyContent = { userId, password }
        const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }

        try {
            // Validate input
            if (!userId || !password) {
                toast.error("User ID or Password is missing.");
                return;
            }

            // Send login request to server
            const response = await axios.post(serverLink, bodyContent, headers);

            handleUserId('')
            handlePassword('')

            const { token } = response.data;

            localStorage.setItem('token', token)

            navigate('/onetimepassword');

        } catch (error) {
            // Handle errors from the server
            if (error.response) {
                const { data } = error.response;
                toast.error(data.error);
            } else {
                toast.error("An unexpected error occurred. Please try again later.");
            }
            console.error("Error handling form submission:", error.message);
        }
    };


    return (
        <div className='w-full flex flex-col'>
            <FormInputs password={password} handleUserId={handleUserId} handlePassword={handlePassword} userId={userId} />
            <FormFeatures onClick={() => handleSubmit()} />
        </div>
    )
}

export default LoginForm
