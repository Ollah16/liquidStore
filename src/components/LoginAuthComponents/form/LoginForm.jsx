import React, { useRef } from 'react'
import Button from '../../Button'

const LoginForm = () => {

    const formRef = useRef()
    const passwordRef = useRef()
    const userIdRef = useRef()

    const showPassowrd = () => {
        const repPassword = passwordRef.current
        const isText = repPassword.type === 'text'
        repPassword.type = isText ? 'password' : 'text'
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            const passwordElement = passwordRef.current;
            const userIdElement = userIdRef.current;

            if (!passwordElement || !userIdElement) {
                throw new Error("Form elements are not properly referenced.");
            }

            const userId = userIdElement.value.trim();
            const password = passwordElement.value.trim();

            if (!userId || !password) {
                throw new Error("User ID or Password is missing.");
            }

            console.log(userId, password)
            // Assuming a function to process the user ID and password exists
            // processCredentials(userId, password);

        } catch (error) {
            console.error("Error handling form submission:", error.message);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col'>
            <div className='w-full flex flex-col pb-5'>
                <label className='pb-3 inline-block text-md font-semibold'>User ID:</label>
                <input ref={userIdRef} type='text' name='userid' className='border pl-3 mr-3 h-10 w-[300px] border-[#767676]' autoComplete='off' />
            </div>
            <div className='w-full flex flex-col pb-5'>
                <label className='pb-3 inline-block text-md font-semibold'>Password:</label>
                <div className='relative flex items-center'>
                    <input ref={passwordRef} type='password' name='password' required className='border pl-3 mr-3 h-10 w-[300px] border-[#767676]' autoComplete='off' />
                    <Button className={'text-theme underline absolute left-[250px]'} title={'Show'} clickAction={() => showPassowrd()} />
                </div>
            </div>
        </form>
    )
}

export default LoginForm
