import React, { useState } from 'react'
import FormFeatures from './FormFeatures'
import FormInputs from './FormInputs'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { handle_Login_Signout } from '../../../reduxtoolkit/authslice';
import { useDispatch } from 'react-redux';
import { logUser } from '../../../util/api';

const LoginForm = () => {

    const [password, setPassword] = useState('')
    const [userId, setUserId] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleUserId = (value) => {
        setUserId(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const handleSubmit = async () => {
        try {
            // Validate input
            if (!userId || !password) {
                toast.error("User ID and Password are required.");
                return;
            }

            // Send login request to server
            const token = await logUser({ userId, password });
            // Check if token is received
            if (token) {
                // Clear input fields and store token
                handleUserId('');
                handlePassword('');
                localStorage.setItem('token', token);

                // Update application state and navigate
                dispatch(handle_Login_Signout(true));
                navigate('/onetimepassword');
            } else {
                // Handle unexpected response
                toast.error("Login failed. Please check your credentials.");
            }

        } catch (error) {
            // Handle different types of errors
            if (error.response) {
                // Server-side errors
                const { data } = error.response;
                toast.error(data.error || "An error occurred. Please try again.");
            } else if (error.request) {
                // Network errors
                toast.error("Network error. Please check your connection.");
            } else {
                // Unexpected errors
                toast.error("An unexpected error occurred. Please try again later.");
            }
            console.error("Login error:", error.message);
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
