import React, { useRef, useState } from 'react'
import Button from '../../Button'

const LoginForm = () => {

    const formRef = useRef()
    const passwordRef = useRef()
    const userIdRef = useRef()
    const [passwordState, setPasswordState] = useState('Show')

    const showPassowrd = (event) => {
        event.stopPropagation();
        // console.log(event)
        const repPassword = passwordRef.current
        if (repPassword.value.length <= 0) return
        const isText = repPassword.type === 'text'
        repPassword.type = isText ? 'password' : 'text'
        setPasswordState(!isText ? 'Hide' : 'Show')
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            const formData = new FormData(formRef.current);
            const userId = formData.get('userId').trim();
            const password = formData.get('password').trim();

            if (!userId || !password) {
                throw new Error("User ID or Password is missing.");
            }

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
                <input ref={userIdRef} type='text' name='userId' className='border pl-3 mr-3 h-10 w-[300px] border-[#767676]' autoComplete='off' />
            </div>
            <div className='w-full flex flex-col pb-5'>
                <label className='pb-3 inline-block text-md font-semibold'>Password:</label>
                <div className='relative flex items-center'>
                    <input ref={passwordRef} type='password' name='password' required className='border pl-3 mr-3 h-10 w-[300px] border-[#767676]' autoComplete='off' />
                    <Button className={'text-theme underline absolute left-[250px] passwordHandler'} title={passwordState} clickAction={showPassowrd} />
                </div>
            </div>
        </form>
    )
}

export default LoginForm
