import React, { useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { getCredentials } from '../../../util/api'
import { getUser } from '../../../reduxtoolkit/authslice'
import AccountSetting from './AccountSetting'
import LogOff from './LogOff'

const SubNavComp = React.memo(({ handleCurrentClick, currentClick }) => {

    const dispatch = useDispatch()
    const { firstName, lastName, lastLogin, title } = useSelector(state => state.auth)

    useEffect(() => {

        const getCred = async () => {
            try {
                const accountInfo = await getCredentials()
                dispatch(getUser(accountInfo))
            } catch (err) {
                console.error(err)
            }
        }

        getCred()


    }, [dispatch])

    const settingsClass = `hidden md:flex`

    return (
        <nav className={`bg-white w-full block after:content-[""] relative transition-colors ease-in-out duration-300  ${currentClick ? 'border-b-[#5a8c00] border-b-4 ' : 'border-b border-black/20'} z-30 h-fit flex flex-col`}>
            <div className='w-full lg:w-10/12 px-5 lg:px-0 mx-auto'>
                <div className='flex flex-row justify-between w-full'>
                    <div className='h-full flex items-center'>
                        <div className='py-2'>
                            <p className='font-semibold tracking-tight text-xl'>{title} {lastName?.charAt(0)}. {firstName}</p>
                            <p className='flex items-center tracking-tight text-xs text-black/80 gap-x-2'><LockClosedIcon className='size-3' /> <span>Last logged on {lastLogin}</span></p>
                        </div>
                    </div>
                    <AccountSetting
                        handleCurrentClick={handleCurrentClick}
                        currentClick={currentClick}
                        settingsClass={settingsClass} />

                    <div className='flex md:hidden text-theme h-full items-center my-auto font-semibold'>
                        <LogOff />
                    </div>
                </div>
            </div>
        </nav >
    )
})

export default SubNavComp
