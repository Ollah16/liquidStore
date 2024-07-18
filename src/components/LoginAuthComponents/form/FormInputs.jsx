import React, { useRef, useState } from 'react'
import Button from '../../Button'

const FormInputs = ({ password, handleUserId, handlePassword, userId }) => {

    const passwordRef = useRef()
    const [passwordState, setPasswordState] = useState('Show')

    const showPassowrd = () => {
        const repPassword = passwordRef.current
        if (password.length <= 0) return
        const isText = repPassword.type === 'text'
        repPassword.type = isText ? 'password' : 'text'
        setPasswordState(!isText ? 'Hide' : 'Show')
    }

    return (<>
        <div className='w-full flex flex-col pb-5'>
            <label className='pb-3 inline-block text-md font-semibold'>User ID:</label>
            <input type='text' name='userId' value={userId} onChange={(e) => handleUserId(e.target.value)} className='border pl-3 mr-3 h-10 w-[300px] border-[#767676]' autoComplete='off' />
        </div>
        <div className='w-full flex flex-col pb-5'>
            <label className='pb-3 inline-block text-md font-semibold'>Password:</label>
            <div className='relative flex items-center'>
                <input ref={passwordRef} type='password' value={password} name='password' onChange={(e) => handlePassword(e.target.value)} required className='border pl-3 mr-3 h-10 w-[300px] border-[#767676]' autoComplete='off' />
                <Button className={'text-theme underline absolute left-[250px] passwordHandler'} title={passwordState} clickAction={showPassowrd} />
            </div>
        </div>
    </>)
}

export default FormInputs
